interface LocationInfo {
    id: number;
    code: string;
    name: string;
    description: string;
    type: string;
    phone: string;
    email: string;
    complete_address: string;
    address: string;
    city: string;
    zip: string;
    province: string;
    country: string;
    streetNumber: string;
    latitude: number;
    longitude: number;
    extra_fee_with_tax: number;
    extra_fee_without_tax: number;
    extra_fee_tax: number;
    timetable_pickup: number;
    timetable_dropoff: number;
    web: number;
}


interface ApiResponse {
    result: LocationInfo;
    status: boolean;
}

interface TokenInfo {
    token: string;
    expires_at: string;
    name: string;
    level: number;
}

async function getData(event: any): Promise<ApiResponse | null> {
    const config = useRuntimeConfig(event);
    const storedTokenInfo = getCookie(event, 'tokenInfo');

    if(!storedTokenInfo){
        return null
    }

    const tokenInfo: TokenInfo = JSON.parse(storedTokenInfo);

    const response = await $fetch<ApiResponse>(`${config.urlApi}/module/rental/api/partner/locations`,{
        headers: {
         'X-PartnerToken': tokenInfo.token,
        //  'Accept': 'application/json'
        }
      });
    return response
}

export default defineEventHandler(async (event) => {
    try {
        
        const data = await getData(event) as ApiResponse

        if(!data.status){
            return null
        }

        return data.result
       
    } catch (error) {
        console.error('Error en el manejador de eventos:', error);
        return null;
    }
});
