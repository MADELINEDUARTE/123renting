
interface Data {
    id: number;
    name: string;
    code: string;
    tax_code?: string;
    gender?: string;
    company_name: string;
    vat_number?: string;
    complete_name: string;
    age?: number | null;
    telephone: string;
    email: string;
    city?: string;
    address?: string;
    street?: string;
    street_number?: string;
    anag_jf_id?: string;
  }
  

interface Client {
    data: Data,
    setClient: (data: Data) => void
}

const client = {
    data: reactive<Data>({
        id: 0,
        name: "",
        code: "",
        tax_code: "",
        gender: "",
        company_name: "",
        vat_number: "",
        complete_name: "",
        age: null,
        telephone: "",
        email: "",
        city: "",
        address: "",
        street: "",
        street_number: "",
        anag_jf_id: ""
    }),
    setClient: function(data:Data){
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                this.data[key] = data[key]
            }
        }
    }
}

const clientInfo = computed(() => {
    return client.data
})

export const useClient = () => {
    return { client, clientInfo }
}