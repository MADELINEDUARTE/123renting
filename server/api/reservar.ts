
interface TokenInfo {
    token: string;
    expires_at: string;
    name: string;
    level: number;
}


interface ApiResponse {
    result: any;
    status: boolean;
}



async function postReservar(event: any): Promise<ApiResponse | null> {
  
    const config = useRuntimeConfig(event);
    const storedTokenInfo = getCookie(event, 'tokenInfo');

    if(!storedTokenInfo){
        return null
    }

    const tokenInfo: TokenInfo = JSON.parse(storedTokenInfo);

    const bodyData = await readBody(event)

    console.log(bodyData)

    const response = await $fetch<ApiResponse>(`${config.urlApi}/module/rental/api/partner/booking/insert`,{
        headers: {
         'X-PartnerToken': tokenInfo.token,
        },
        method: 'POST',
        body: bodyData
      });

    return response
}

export default defineEventHandler(async (event) => {
    try {

        const response = await postReservar(event);

        if(response && response.status){
         
            return response.result
        
        }

        return null
       
    } catch (error) {
        console.error('Error en el manejador de eventos:', error);
        return null;
    }
});