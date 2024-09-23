export interface Oficina {
    id: number;
    text: string;
    status: boolean;
    fecha: string;
    email: string;
    phone: string;
    position: {
        lat: number;
        lng: number;
    };
}

const oficinas = {
    data:  reactive<Oficina[]>([])
};

export const useOficina = () => {
    return { oficinas }
}
