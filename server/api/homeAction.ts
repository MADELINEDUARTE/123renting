

interface Data {
    elementos: Elemento[];
    parametros: Parametros;
    sliders: Slider[];
    idioma: string;
    idregion: string;
}

interface Elemento {
    nombre: string;
    titulo: string;
    texto: string | null;
}

interface Parametros {
    politica_privacidad: string;
    email: string;
    direccion: string;
    ubicacion: string;
    facebook: string;
    twitter: string;
    instagram: string;
    descripcion: string;
    meta_description: string;
    meta_name: string;
    video: string;
    youtube: string;
    termino_mail: string;
    google: string;
    meta_keywords: string;
    newsletter: string;
}

interface Slider {
    id: number;
    titulo: string;
    contenido: string | null;
    contenido2: string | null;
    publico: number;
    posicion: number;
    id_pagina: number;
    url_imagen: string;
    url_imagen2: string;
    url_videos: string | null;
    servicio_id: number | null;
    role_user_id: number;
    created_at: string;
    updated_at: string;
    animation: string | null;
    transition: string;
    position: string;
    id_region: string;
    url_imagen_small: string | null;
    url_imagen_medium: string | null;
    intervalo: string | null;
    color_logo: string | null;
    color_menu: string | null;
}


interface ApiResponse {
    data: Data;
    status: boolean;
}

interface TokenInfo {
    expires_at: string;
    token: string;
    message?: string;
}

async function getHome(event: any): Promise<ApiResponse | null> {
    const config = useRuntimeConfig(event);
    const storedTokenInfo = getCookie(event, 'tokenInfoAction');

    if(!storedTokenInfo){
        return null
    }

    const tokenInfo: TokenInfo = JSON.parse(storedTokenInfo);

    const query = getQuery(event)

    const idioma = query.lang ? query.lang : config.idiomaAction

    

    const response = await $fetch<ApiResponse>(`${config.urlApiAction}/api/home_frontend?idioma=${idioma}&idregion=${config.regionAction}`,{
        headers: {
         'x-api-key': tokenInfo.token,
        //  'Accept': 'application/json'
        }
      });

    return response
}

export default defineEventHandler(async (event) => {
    try {
        // const home = getCookie(event, 'home');

        // if(home){
        //     return JSON.parse(home)
        // }

        const parametros = await getHome(event);

        
        if(parametros && parametros.status){
            // Establecemos el tiempo de vencimiento de la cookie (por ejemplo, 1 día)
            const expirationTime = new Date();
            expirationTime.setDate(expirationTime.getDate() + 1);
                
            // Guardamos los nuevos parámetros en las cookies con tiempo de vencimiento
            // setCookie(event, 'home', JSON.stringify(parametros.data), { expires: expirationTime });
         
            return parametros.data
        
        }

        return null
       
    } catch (error) {
        console.error('Error en el manejador de eventos:', error);
        return null;
    }
});
