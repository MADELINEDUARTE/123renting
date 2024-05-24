<template>
    
    
    <div  :class="cocheSeleccionado ? 'col-sm-4' : 'col-12'">
        <p style="font-size: 12px" v-if="props.status_open" ><span style="font-size: 18px; font-weight: 900; color: #E94B28">{{ textos.number }}</span> {{ textos.text }}</p>
        <div class="form-group">
            <label></label>

            <input type="text" :readonly="cocheSeleccionado ? true: false" v-model="filters" class="form-control" :placeholder="$t('modelo_marca')">

            <i class="far fa-car"></i>
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
                    <i class="fa fa-rotate mx-2" style="color: white"></i>
                    <p class="m-0">{{$t('cambio_coche')}}</p>
                </div>
            </div>
        </div>
    </div>
    
    
</template>

<script setup lang="ts">

    const { vehicles } = useReserva()
    import type { Vehicle } from '~/composables/useVehicle'

    const cocheSeleccionado = ref<Vehicle>()
    const precio_id = defineModel<Number>('price_id',{ default: 0 })
    const vehicle_id = defineModel('vehicle_id')

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

    const filters = ref('')

    const filteredData = computed(() => {
        if (!filters.value) {
            return vehicles.data.result.vehicles
        } else {
            return vehicles.data.result.vehicles?.filter((item) => {
                return (
                    item.model_details.name.match(new RegExp(filters.value, 'i')) ||
                    item.model_details.model.match(new RegExp(filters.value, 'i'))
                )
            })
        }
    })

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