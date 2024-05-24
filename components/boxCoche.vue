<template>
    <div class="car-item w-100 m-0">
        <div  v-if="coche" class="car-content">
            <div class="car-top">
                <h4><a class="letrac" href="#">{{ coche.model_details.name }} <br>
                <h6 class="modelo">{{ coche.model_details.model }}</h6></a></h4>
                <!-- <br> -->
        
                <!--<span><i class="fas fa-star"></i> 5.0</span>-->
            </div>

            <div class="car-img p-3">
                <img :src="coche.model_details.images[0]" alt="">
            </div>
        
            <ul class="car-list">
                <!-- <li><img src="/assets/img/car/euro.png" class="far fa-car">{{$t('precio_d')}}&nbsp;&nbsp;</li> -->
                <li><img src="/assets/img/car/pasajeros.png"  class="far fa-user-tie">  {{ coche.model_details.max_people }} {{$t('personas')}}&nbsp;</li>
                <li><img src="/assets/img/car/puerta.png" class="far fa-gas-pump"> {{ coche.model_details.doors }} {{$t('puertas')}}</li>
                <!-- <li><i class="far fa-road"></i>10.15km / 1-litre</li>
                <li><i class="far fa-steering-wheel"></i>Automatic</li> -->
            </ul>
            <div class="car-footer d-flex justify-content-center">
                <!--<span class="car-price">$390 <sub>/ month</sub></span>
                <a href="#" class="car-favorite-btn"><i class="far fa-heart"></i></a>-->
                <a @click.prevent="selectCoche(coche.model_id, price.id)"  v-for="(price, p) in coche.pricelists" :key="`price-${p}-vehicle-${coche.model_id}`" href="#" class="theme-btn">
                    <strong>{{ price.fee_on_pricelist_type.without_tax }}{{ props.vehicles_currency?.symbol }} / {{ $t(price.fee_on_pricelist_type.type) }}</strong>
                </a>
                <!-- <a href="#" class="theme-btn2"><strong>{{$t('medio')}}</strong></a> -->
                <!-- <a href="#" class="theme-btn3"><strong>{{$t('primium')}}</strong></a> -->
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    
    import type { Vehicle, Currency } from '~/composables/useVehicle'

    const props = defineProps({
        coche: Object as () => Vehicle,
        vehicles_currency: Object as () => Currency
        // plan_id: {
        //     type: Number,
        //     default: 0
        // }
    })

    const emit = defineEmits(['selectCoche'])

    const plan_id = defineModel<Number>('plan_id',{ default: 0 })

    const selectCoche = (coche_id: number, price_id: number) => {
        plan_id.value = price_id
        emit( 'selectCoche' , { coche_id, price_id } )
    };


    // const { planes } = usePlan()

    // const planSeleccionado = computed(()=>{
    //     return planes.data.find((e)=> e.id == plan_id.value)
    // })

    // const precio = computed(()=>{

    //     const clave = planSeleccionado.value?.key || ''
    //     let precio = null
    //     switch (clave) {
    //         case 'basico':
    //             precio = props.coche?.config.basico 
    //             break;
    //         case 'medio':
    //             precio = props.coche?.config.medio 
    //             break;
    //         case 'premium':
    //             precio = props.coche?.config.premium 
    //             break;
    //         default:

    //             break;
    //     }

    //     return precio
    // })

</script>