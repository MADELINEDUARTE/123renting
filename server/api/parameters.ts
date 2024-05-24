interface WeeklyScheduleItem {
    from: string;
    to: string;
}

interface WeeklySchedule {
    [day: string]: WeeklyScheduleItem[];
}

interface TimetableInfo {
    weeklySchedule: WeeklySchedule;
    closingDays: string[];
    closingDaysPerYear: string[];
    weeklyScheduleException: any[]; // La estructura real de este campo no está clara en los datos proporcionados
}

interface OpeningInfo {
    min_date: string;
    min_days: string;
    opening_time: { [day: string]: string };
    closed_at_formatted: any[]; // La estructura real de este campo no está clara en los datos proporcionados
    closed_at: any[]; // La estructura real de este campo no está clara en los datos proporcionados
    timetable: { [day: string]: TimetableInfo };
}

interface LocaleInfo {
    js_date_format: string;
    locale: string;
}

interface EnabledLanguage {
    key: string;
    code: string;
    name: string;
    flag: string;
    default: number;
    locale: string;
}

interface ColorsInfo {
    first: string;
    textOnFirst: string;
    accentOnFirst: string;
    second: string;
    textOnSecond: string;
    accentOnSecond: string;
    third: string;
    textOnThird: string;
    accentOnThird: string;
    notActive: string;
    textOnNotActive: string;
    accentOnNotActive: string;
}

interface AdmittedAges {
    [age: string]: number | string;
}

interface ResultInfo {
    opening: OpeningInfo;
    locale: LocaleInfo;
    default_lang: string;
    default_country: string;
    default_int_prefix: string;
    timezone: string;
    current_datetime: string;
    currency_code: string;
    currency_symb: string;
    default_vat: number;
    maps_key: string;
    enabled_languages: EnabledLanguage[];
    colors: ColorsInfo;
    admitted_ages: AdmittedAges;
    tax_code_required: string;
    pay_online: boolean;
    pay_agency: boolean;
    info_request: boolean;
    suggested_start_time: string;
    suggested_end_time: string;
    suggested_end_time_same_day: string;
    upselling_level1: boolean;
    upselling_level2: boolean;
    upselling_vehicle_level2: boolean;
    stripe_key: string;
}

interface ApiResponse {
    result: ResultInfo;
    status: boolean;
}

interface TokenInfo {
    token: string;
    expires_at: string;
    name: string;
    level: number;
}

async function getParametros(event: any): Promise<ApiResponse | null> {
    const config = useRuntimeConfig(event);
    const storedTokenInfo = getCookie(event, 'tokenInfo');

    if(!storedTokenInfo){
        return null
    }

    const tokenInfo: TokenInfo = JSON.parse(storedTokenInfo);

    const response = await $fetch<ApiResponse>(`${config.urlApi}/module/rental/api/partner/config/parameters`,{
        headers: {
         'X-PartnerToken': tokenInfo.token,
        //  'Accept': 'application/json'
        }
      });
    return response
}

export default defineEventHandler(async (event) => {
    try {
        const parameters = getCookie(event, 'parameters');

        if(parameters){
            return JSON.parse(parameters)
        }

        const parametros = await getParametros(event);

        if(parametros && parametros.status){
            // Establecemos el tiempo de vencimiento de la cookie (por ejemplo, 1 día)
            const expirationTime = new Date();
            expirationTime.setDate(expirationTime.getDate() + 1);
                
            // Guardamos los nuevos parámetros en las cookies con tiempo de vencimiento
            setCookie(event, 'parameters', JSON.stringify(parametros.result), { expires: expirationTime });
         
            return parametros.result
        
        }

        return null
       
    } catch (error) {
        console.error('Error en el manejador de eventos:', error);
        return null;
    }
});
