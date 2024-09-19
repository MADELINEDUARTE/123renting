export interface Data {
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
    politica_privacidad?: string;
    telefono?: string;
    email?: string;
    direccion?: string;
    ubicacion?: string;
    ubicacion_link?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    descripcion?: string;
    meta_description?: string;
    meta_name?: string;
    meta_url?: string;
    title?: string;
    video?: string;
    youtube?: string;
    termino_mail?: string;
    contrato?: string;
    google?: string;
    Keywords?: string;
    onepage?: string;
    horario?: string;
    Newsletter?: string;
    newsletter?: string;
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

const initialResult: Data = {
    elementos: [],
    parametros: {
        politica_privacidad: "",
        telefono: "",
        email: "",
        direccion: "",
        ubicacion: "",
        ubicacion_link: "",
        facebook: "",
        twitter: "",
        instagram: "",
        descripcion: "",
        meta_description: "",
        meta_name: "",
        meta_url: "",
        title: "",
        video: "",
        youtube: "",
        termino_mail: "",
        contrato: "",
        google: "",
        Keywords: "",
        onepage: "",
        horario: "",
        Newsletter: "",
        newsletter: ""
    },
    sliders: [],
    idioma: "",
    idregion: ""
};

const home = {
    data: reactive<ApiResponse>({
        data: initialResult,
        status: false
    }),
    setData: function(result: Data){
        this.data.data = result
        // const expirationTime = new Date();
        // expirationTime.setDate(expirationTime.getDate() + 1);

        // const sliders = useCookie('sliders',{ expires: expirationTime })
        
        // sliders.value = JSON.stringify(this.data.data.sliders)

        this.data.status = true
    },
    idiomaToId: function  (idioma: string): number  {
        const idiomaMap: { [key: string]: number } = {
            "es": 1,
            "en": 2,
            "ca": 3,
            "ger": 4,
        };

        return idiomaMap[idioma] || 1; // Default to 1 if `idioma` is not found
    },
    idiomaInId: function  (idioma: number): string  {
        const idiomaMap: { [key: number]: string } = {
            1: "es",
            2: "en",
            3: "ca",
            4: "ger",
        };

        return idiomaMap[idioma] || 'es'; // Default to 1 if `idioma` is not found
    },
    
}

const parametros  = computed((): Parametros=>{
    return home.data.data.parametros
})


const sliders  = computed((): Slider[]=>{
    // const sliders = useCookie<Slider[]>('sliders') 
    // if(sliders.value){
    //     return sliders.value
    // }
    return home.data.data.sliders
})

export const useHome = () => {
    return { home  , parametros, sliders}
}