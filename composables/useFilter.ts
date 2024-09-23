import type { vechileCategorie } from "~/server/api/vehicles/categories";
import type { fuelType } from "~/server/api/vehicles/fuelTypes";
import type { transmissionType } from "~/server/api/vehicles/transmissionTypes";
import type { vechileType } from "~/server/api/vehicles/types";

export interface Data {
    types: vechileType[],
    categories: vechileCategorie[],
    fuelTypes: fuelType | null,
    transmissionTypes: transmissionType | null,
}

const data = {
    datos: reactive<Data>({
        types: [],
        categories: [],
        fuelTypes: null,
        transmissionTypes: null
    }),
    setDatos: function(data: Data) {
        this.datos.types = data.types;
        this.datos.categories = data.categories;
        this.datos.fuelTypes = data.fuelTypes;
        this.datos.transmissionTypes = data.transmissionTypes;
    }
}

const filter = computed(()=>{
    return data.datos
})

interface filterValues {
    doors: string;
    max_people: string;
    transmission: string;
    type: string;
    category: string;
    fuel_type: string;
}

const filterValues = ref<filterValues>({
    doors: '',
    max_people: '',
    transmission: '',
    type: '',
    category: '',
    fuel_type: '',
})

const filterValuesClean = () => {
    filterValues.value = {
        doors: '',
        max_people: '',
        transmission: '',
        type: '',
        category: '',
        fuel_type: '',
    }
}

const loadingForFilter = ref(false)

export const useFilter = () => {
    return { data, filter , filterValues, filterValuesClean , loadingForFilter}
}

