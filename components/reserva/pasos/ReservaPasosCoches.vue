<template>
    
    
    <div  :class="cocheSeleccionado ? 'col-sm-4' : 'col-12'">
        <filterVehicles class="m-0" v-if="!cocheSeleccionado" />

        <div v-if="!cocheSeleccionado" class="form-group mb-3 input-filter-group">
            <input type="text" :readonly="cocheSeleccionado ? true: false" v-model="filters" class="form-control input-filter" :placeholder="$t('modelo_marca')">
            <i class="far fa-car"></i>
        </div>

        <a v-if="!cocheSeleccionado" @click.prevent="limpiarFiltro" style="font-size: 12px; " class="text-center cursor-pointer w-100 fw-bold text-decoration-underline">Limpiar</a>
        
        <div class="d-flex w-100 justify-content-between">
            <p style="font-size: 12px" v-if="props.status_open" ><span style="font-size: 18px; font-weight: 900; color: #E94B28">{{ textos.number }}</span> {{ textos.text }}</p>
            <p v-if="loadingForFilter"><i class="fa-solid fa-spinner"></i></p>
        </div>
        
        <div class="col-12 coches pt-4" >
            <div class="row" v-show="!cocheSeleccionado">
                <div 
                    v-for="(coche, key) in filteredData" 
                    :key="`coche-${key}`" 
                    class="col-12 col-sm-4"
                >

                    <BoxCoche :coche="coche" :vehicles_currency="vehiclesCurrency" @selectCoche="selectCoche" v-model:plan_id="precio_id" />
                </div> 
            </div>
           
            <div class="col-12" v-show="cocheSeleccionado">
                
                <BoxCoche :coche="cocheSeleccionado" @selectCoche="selectCoche"  :vehicles_currency="vehiclesCurrency" v-model:plan_id="precio_id" />
                <div @click="reset" class="w-100 d-flex justify-content-end" style="cursor: pointer;">
                    
                    <p style="color: blue" class="m-0"><i class="fa fa-rotate mx-2" ></i>{{$t('cambio_coche')}}</p>
                </div>
            </div>
        </div>
    </div>
    
    
</template>

<script setup lang="ts">
    import filterVehicles from '~/components/home/filterVehicles.vue';

    const { vehicles } = useReserva()
    import type { Vehicle } from '~/composables/useVehicle'

    const cocheSeleccionado = ref<Vehicle>()
    const precio_id = defineModel<Number>('price_id',{ default: 0 })
    const vehicle_id = defineModel('vehicle_id')
    const emit = defineEmits(['reload'])

    onMounted(()=>{
        reset()
    })

    const props = defineProps({
        status_open: Boolean,
        textos:{
            type: Object,
            default(){
                return {
                    number: '',
                    text: ''
                }
            }
        },

    })

    const { filterValues, filterValuesClean, loadingForFilter } = useFilter()

    const limpiarFiltro = () => {
        filterValuesClean()
        filters.value = ''
        emit('reload')
    }

    const puertasFilter = computed(()=>{
        return filterValues.value.doors
    })

    const pasajerosFilter = computed(()=>{
        return filterValues.value.max_people
    })

    const filters = ref('')

    const filteredData = computed(() => {
    let filteredVehicles = vehicles.data.result.vehicles;

    // Filtro por el valor del texto en 'filters'
    if (filters.value) {
        filteredVehicles = filteredVehicles?.filter((item:any) => {
            return (
                item.model_details.name.match(new RegExp(filters.value, 'i')) ||
                item.model_details.model.match(new RegExp(filters.value, 'i'))
            );
        });
    }

    // Filtro por puertas (doors) si el filtro no está vacío
    if (puertasFilter.value !== '') {
        const puertasNumber = Number(puertasFilter.value);  // Convertir a número
        filteredVehicles = filteredVehicles?.filter((item:any) => {
            return item.model_details.doors >= puertasNumber;  // Comparar si es mayor o igual
        });
    }

    // Filtro por pasajeros (max_people) si el filtro no está vacío
    if (pasajerosFilter.value !== '') {
        const pasajerosNumber = Number(pasajerosFilter.value);  // Convertir a número
        filteredVehicles = filteredVehicles?.filter((item:any) => {
            return item.model_details.max_people >= pasajerosNumber;  // Comparar si es mayor o igual
        });
    }

    // console.log('filteredVehicles',filteredVehicles)

    return filteredVehicles;
});

    const vehiclesCurrency = computed(()=>{
        return vehicles.data.result.common.currency
    })

    const selectCoche = ({ coche_id, price_id }: { coche_id:number, price_id:number } ) => {
        scrollToBottomOfElement()
        const coche = vehicles.data.result.vehicles.find( (vehicle: Vehicle) => vehicle.model_id == coche_id )
        cocheSeleccionado.value = coche
        vehicle_id.value = coche?.model_id
        filters.value = coche?.model_details.name || ''
    }

    const reset = () => {
        filters.value = ''
        precio_id.value = 0
        vehicle_id.value = ''
        cocheSeleccionado.value = undefined
    }

    const scrollToBottomOfElement = () =>  {
            const element = document.querySelector('.fullscreen');
            element?.scrollTo({
                top: element.scrollHeight,
                behavior: 'smooth'
            });
        }

</script>

<style lang="scss" scoped>

.input-filter-group{
    
    .input-filter{
        padding: 15px 12px 12px 12px !important;
        font-size: 12px;
    }

    i{
        top: 10px !important;
    }
}
</style>