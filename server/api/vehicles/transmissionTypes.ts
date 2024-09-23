export interface transmissionType {
    manual: string;
    automatic: string;
}


interface ApiResponse {
    result: transmissionType;
    status: boolean;
}

interface TokenInfo {
    token: string;
    expires_at: string;
    name: string;
    level: number;
}

async function getTransmissionTypes(event: any): Promise<ApiResponse | null> {
    const config = useRuntimeConfig(event);
    const storedTokenInfo = getCookie(event, 'tokenInfo');

    if(!storedTokenInfo){
        return null
    }

    const tokenInfo: TokenInfo = JSON.parse(storedTokenInfo);

    const response = await $fetch<ApiResponse>(`${config.urlApi}/module/rental/api/partner/config/transmissions`,{
        headers: {
         'X-PartnerToken': tokenInfo.token,
        //  'Accept': 'application/json'
        }
      });
    return response
}

export default defineEventHandler(async (event) => {
    try {
        const cookie = getCookie(event, 'transmissionTypes');

        if(cookie){
            return JSON.parse(cookie)
        }

        const data = await getTransmissionTypes(event);

        if(data && data.status){
            // Establecemos el tiempo de vencimiento de la cookie (por ejemplo, 1 día)
            const expirationTime = new Date();
            expirationTime.setDate(expirationTime.getDate() + 1);
                
            // Guardamos los nuevos parámetros en las cookies con tiempo de vencimiento
            setCookie(event, 'transmissionTypes', JSON.stringify(data.result), { expires: expirationTime });
         
            return data.result
        
        }

        return null
       
    } catch (error) {
        console.error('Error en el manejador de eventos:', error);
        return null;
    }
});
