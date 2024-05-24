<template>
    <div class="row flex-column-revers p-0 m-0">
        <div class="car-item-single col-12">
            <p class="" style="font-size: 12px" ><span style="font-size: 18px; font-weight: 900; color: #E94B28">{{ textos.number }}</span> {{ textos.text }}</p>
            <div class="car-single-wrapper m-0 p-0" style="border-color: #464646">
                <!-- <p>{{ precio }}</p> -->
<!-- <p>{{ coche }}</p> -->
<!-- <p>{{ reserva_devolucion }}</p> -->
                <!-- <div class="w-100 text-center p-2 " :style="{ backgroundColor: plan?.backgroundColor }" style="border-top-left-radius: 15px; border-top-right-radius: 15px;">
                    <p><strong>{{ plan?.nombre }}</strong></p>
                </div> -->
           
                <div class="p-3">
                    <table class="table caption-top">
                        <tbody>
                            <tr>
                                <th>{{$t('Tarifa')}}</th>
                                <td style="text-align: right;"><strong> {{ precio?.fee_on_pricelist_type.without_tax }} {{ currency?.symbol }} / {{ $t(precio?.fee_on_pricelist_type.type || '') }} x {{ precio?.price_referred_to }}</strong></td>   
                            </tr>
                            <tr>
                                <th>{{$t('sub_total')}}</th>    
                                <td style="text-align: right;"><strong>{{ precio?.rent_rate_discount_included.without_tax }} {{ currency?.symbol }}</strong></td>
                            </tr>
                            <tr>
                                <th>{{$t('IVA')}}</th>    
                                <td style="text-align: right;"><strong>{{ precio?.rent_rate_discount_included.tax }} {{ currency?.symbol }}</strong></td>
                            </tr>
                            <!-- <tr v-for="(item, key) in reserva.mejoras" :key="`mejora-${key}`">
                                <th>{{ item.descripcion }}</th>    
                                <td style="text-align: right;"><strong>{{ item.precio }}€</strong></td>
                            </tr> -->
                            <tr>
                                <th>{{$t('Total')}}  </th>
                                <td style="text-align: right; font-size: 20px;"><strong>{{ precio?.rent_rate_discount_included.with_tax }} {{ currency?.symbol }}</strong></td>

                            </tr>
                                            
                        </tbody>
                    </table>
                </div> 
                
            </div>

            
       
        </div>
        
        <!-- <div class="col-12">

            <p class="m-0" style="font-size: 12px" ><span style="font-size: 18px; font-weight: 900; color: #E94B28">5.</span> Mejora tu reserva</p>
            
            <div class="row mt-2">
                <div class="col-3 col-sm-2  pe-0">
                        <div @click="onSelectPlan(1)" :style="{ opacity: plan?.id == 1 ? '1':'.4' }" class="cardPaquete theme-btn1 m-0 mb-2 d-flex justify-content-center align-items-center">
                            <h4 class="">{{$t('basic')}}</h4>
                        </div>
                        <div @click="onSelectPlan(2)" :style="{ opacity: plan?.id == 2 ? '1':'.4' }" class="cardPaquete theme-btn2 m-0 mb-2 d-flex justify-content-center align-items-center">
                            <h4>{{$t('medium')}}</h4>
                        </div>
                        <div @click="onSelectPlan(3)" :style="{ opacity: plan?.id == 3 ? '1':'.4' }" class="cardPaquete theme-btn3 m-0 mb-2 d-flex justify-content-center align-items-center">
                            <h4>{{$t('premium')}}</h4>

                        </div>
                </div>
            
                <div class="col-sm-10 col-9 ">
                    <div class="owl-carousell owl-carousel owl-theme">
                        <div 
                            class="item"
                            v-for="(item,key) in mejoras.data"
                            :key="`item-${key}`"
                        >
                            <div @click="addBeneficio({plan: 1,item: item , incluido: item.basic})" :style="{ opacity: plan?.id == 1 ? '1':'.4', background: reserva.mejoras.map(e=>e.id).includes(item.id) && plan?.id == 1 ?  plan?.backgroundColor : '', border: plan?.id == 1 && !item.basic ? '1px solid white':'', }" class="cardPaquete card bgcard mb-2 ">
                               <p>{{ item.descripcion }}</p>
                                <div class="d-flex justify-content-center">
                                    <i v-if="item.basic" class="fa fa-check d-flex align-items-center justify-content-center p-0 m-0 circleC" style=""></i>
                                    <button v-else  type="button" class="btn btn-sm btn-outline-light">+{{ item.precio }}{{$t('moneda')}}</button>

                                </div> 
                            </div>
                            <div @click="addBeneficio({plan: 2,item: item , incluido: item.medium})" :style="{ opacity: plan?.id == 2 ? '1':'.4', background: reserva.mejoras.map(e=>e.id).includes(item.id) && plan?.id == 2 ?  plan?.backgroundColor : '', border: plan?.id == 2 && !item.medium  ? '1px solid white':'', }" class="cardPaquete card bgcard mb-2 ">
                                <p>{{ item.descripcion }}</p>
                                <div class="d-flex justify-content-center">
                                    <i v-if="item.medium" class="fa fa-check d-flex align-items-center justify-content-center p-0 m-0 circleC" style=""></i>
                                    <button v-else  type="button" class="btn btn-sm btn-outline-light">+{{ item.precio }}{{$t('moneda')}}</button>

                                </div> 
                            </div>
                            <div @click="addBeneficio({plan: 3,item: item , incluido: item.premium})" :style="{ opacity: plan?.id == 3 ? '1':'.4', background: reserva.mejoras.map(e=>e.id).includes(item.id) && plan?.id == 3 ?  plan?.backgroundColor : '', border: plan?.id == 3 && !item.premium ? '1px solid white':'', }" class="cardPaquete card bgcard mb-2">
                                <p>{{ item.descripcion }}</p>
                                <div class="d-flex justify-content-center">
                                    <i v-if="item.premium" class="fa fa-check d-flex align-items-center justify-content-center p-0 m-0 circleC" style=""></i>
                                    <button v-else  type="button" class="btn btn-sm btn-outline-light">+{{ item.precio }}{{$t('moneda')}}</button>

                                </div> 
                            </div>
                            
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script setup lang="ts">

    import type { Vehicle, Currency } from '~/composables/useVehicle'

    const props = defineProps({
        plan_id: Number,
        coche: Object as () => Vehicle,
        reserva_devolucion: Object,
        currency: Object as () => Currency,
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

    const precio = computed(()=>{
        return props.coche?.pricelists.find((price: Pricelist) =>  price.id == props.plan_id )
    })

    // import type { Calculo } from '~/composables/useReserva'

    // import type { Mejora } from '~/composables/useMejoras'

    // const { mejoras } = useMejoras()

    // const { reserva } = useReserva()


    onMounted(()=>{

        // $('.open-popup-link').magnificPopup({
        //     type:'inline',
        //     midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
            
        // });

        // $('.owl-carousell')
        // const carousel = document.querySelector('.owl-carousell')
        
        // $('.owl-carousell').owlCarousel({
        //     items: 4,
        //     loop:true,
        //     autoWidth:true,
        //     margin:5,
        //     merge:true,
        //     nav:true,
        //     autoplay:true,
        //     autoplayTimeout:3000,
        //     autoplayHoverPause:true,
        //     // responsive:{
        //     //     678:{
        //     //         mergeFit:true
        //     //     },
        //     //     1000:{
        //     //         mergeFit:true
        //     //     }
        //     // }
        // });

        // setTimeout(()=>{
        //         $('#inline-popupss').magnificPopup({
        //             delegate: 'a',
        //             removalDelay: 500, //delay removal by X to allow out-animation
        //             callbacks: {
        //                 beforeOpen: function() {
        //                     this.st.mainClass = this.st.el.attr('data-effect');
        //                 }
        //             },
        //             midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
        //         });
        
        //     },1000)
    })
   

    

    
    

</script>

<style lang="scss">



.cardPaquete{
    margin-right: 10px;
    text-align: center;
    padding: 2px 8px;
    align-items: center;
    justify-content: center;
    width: auto;
    min-width: 80px;
    height: 80px;
    cursor: pointer;
    // border: 1px solid white;
    h4{
        color: white;
    }
    &:hover{
        background: #242323;
        h4{
            color: black;
        }
    }
    p{
        font-size: 10px;
    }
    button{
        font-size: 12px;
        border: none!important;
    }
}

.bgcard{
    background:#373535;
}

/* Estilo para ocultar la barra de desplazamiento en un div con overflow-auto */
.overflow-auto-scroll-hidden {
  overflow: auto;
}

.overflow-auto-scroll-hidden::-webkit-scrollbar {
  width: 6px; /* ajusta según sea necesario */
  border-radius: 10px;
}

.overflow-auto-scroll-hidden::-webkit-scrollbar-thumb {
  background-color: transparent; /* oculta el pulgar de la barra de desplazamiento */
}

.overflow-auto-scroll-hidden:hover::-webkit-scrollbar-thumb {
  background-color: #999; /* color del pulgar al pasar el mouse sobre el área de desplazamiento */
  border-radius: 10px;
 
}

.circleC{
    font-size: 10px; 
    background: green; 
    color: white; 
    border-radius: 100%; 
    border: 1px solid green;  
    width: 20px; 
    height: 20px;
}

.owl-nav{
    display: flex;
    justify-content: flex-end;
    button{
        font-size: 30px!important;
        background:#373535 !important;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        margin-left: 10px;
    }
}

</style>