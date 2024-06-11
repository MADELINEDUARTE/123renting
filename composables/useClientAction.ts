
interface DataAction {
    id: number;
    documento_identificacion: number;
    permiso_conducir: string;
    nombres: string;
    apellidos: string;
    fecha_nacimiento: string;
    numero_fiscal: string;
    email: string;
    telefono: string;
    direccion: string;
    ciudad: string;
    codigo_postal: string;
    // id_facebook: string | null;
    // id_gmail: string | null;
    // password: string | null;
    // pin: string | null;
    cod_pais: string | null;
    // token: string | null;
    // activo: boolean | null;
    // url_permiso: string | null;
    // url_permiso2: string;
    // url_licencia: string;
    // url_licencia2: string;
    // id_categoria: number | null;
    // id_empresa_cliente: number | null;
    // stripe_id: string | null;
    // stripe_tarjeta: string | null;
    // confirmado: boolean | null;
    // created_at: string;
    // updated_at: string;
    // id_usuario: number | null;
  }
  

interface ClientAction {
    data: DataAction,
    setClient: (data: DataAction) => void
}

const clientAction:ClientAction = {
    data: reactive<DataAction>({
        id: 0,
        documento_identificacion: 0,
        permiso_conducir: "",
        nombres: "",
        apellidos: "",
        fecha_nacimiento: "",
        numero_fiscal: "",
        email: "",
        telefono: "",
        direccion: "",
        ciudad: "",
        codigo_postal: "",
        // id_facebook: null,
        // id_gmail: null,
        // password: null,
        // pin: null,
        cod_pais: null,
        // token: null,
        // activo: null,
        // url_permiso: null,
        // url_permiso2: "",
        // url_licencia: "",
        // url_licencia2: "",
        // id_categoria: null,
        // id_empresa_cliente: null,
        // stripe_id: null,
        // stripe_tarjeta: null,
        // confirmado: null,
        // created_at: "",
        // updated_at: "",
        // id_usuario: null,
    }),
    setClient: function(data:DataAction){
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                this.data[key] = data[key]
            }
        }
    }
}

const clientActionInfo = computed(() => {
    return clientAction.data
})

export const useClientAction = () => {
    return { clientAction, clientActionInfo }
}