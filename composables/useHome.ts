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
        this.data.status = true
    },
     idiomaToId: function  (idioma: string): number  {
        const idiomaMap: { [key: string]: number } = {
            "es": 1,
            "en": 2,
            "cat": 3,
            "ger": 4,
        };

        return idiomaMap[idioma] || 1; // Default to 1 if `idioma` is not found
    }
}

const parametros  = computed((): Parametros=>{
    return home.data.data.parametros
})


const sliders  = computed((): Slider[]=>{
    return home.data.data.sliders
})

export const useHome = () => {
    return { home  , parametros, sliders}
}