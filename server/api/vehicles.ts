
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

function getFechasDefault(){

    // Crear un objeto Date para la fecha de mañana a las 9 de la mañana
    const now = new Date();
    const start_datetime = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 9, 0, 0);

    // Crear un objeto Date para end_datetime sumando 7 días a start_datetime
    const end_datetime = new Date(start_datetime);
    end_datetime.setDate(start_datetime.getDate() + 7);

    // Formatear las fechas en la forma YYYY-MM-DD HH:mm
    const formatDate = (date:Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses empiezan desde 0
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}`;
    }

    const formattedStartDatetime = formatDate(start_datetime);
    const formattedEndDatetime = formatDate(end_datetime);

    return { formattedStartDatetime, formattedEndDatetime }
}

async function getVehicles(event: any): Promise<ApiResponse | null> {
  
    const config = useRuntimeConfig(event);
    const storedTokenInfo = getCookie(event, 'tokenInfo');

    if(!storedTokenInfo){
        return null
    }

    const tokenInfo: TokenInfo = JSON.parse(storedTokenInfo);

    const query = getQuery(event)

    const parametrosBusqueda = {
        pickup_location: query && query.pickup_location ?  query.pickup_location : 1,
        dropoff_location: query && query.dropoff_location ?  query.pickup_location : 1,
        start_datetime: query && query.start_datetime ? query.start_datetime : getFechasDefault().formattedStartDatetime,
        end_datetime: query && query.end_datetime ? query.end_datetime : getFechasDefault().formattedEndDatetime,
        // doors: query.doors || '',
        // max_people: query.max_people || '',
        transmission: query.transmission || '',
        type: query.type || '',
        category: query.category || '',
        fuel_type: query.fuel_type || '',
    }

    const queryParams = new URLSearchParams(parametrosBusqueda as any).toString();



    const response = await $fetch<ApiResponse>(`${config.urlApi}/module/rental/api/partner/vehicle/availability?${queryParams}`,{
        headers: {
         'X-PartnerToken': tokenInfo.token,
        }
      });

    return response
}

export default defineEventHandler(async (event) => {
    try {

        const response = await getVehicles(event);

        if(response && response.status){
         
            return response.result
        
        }

        return null
       
    } catch (error) {
        console.error('Error en el manejador de eventos:', error);
        return null;
    }
});