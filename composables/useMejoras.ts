export interface Mejora {
    basic: number;
    created_at: string;
    descripcion: string;
    icon: string;
    id: number;
    medium: number;
    precio: number;
    premium: number;
    updated_at: string;
  }
  
  
const mejoras = {
    data: reactive<Mejora[]>([])
}

export const useMejoras = () => {
    return { mejoras  }
}