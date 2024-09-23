<template>
    <div class="find-car px-0" :class="statusOpen ? 'fullscreen':''"  id="iniciatureserva">
        <div class="container">
            <div class="find-car-form" :class="statusOpen ? 'px-0':''">
                <div class="d-flex justify-content-between" :class="statusOpen ? 'mb-4':''">
                    
                    

                    <div  class="d-flex justify-center flex-column ">
                        <h4 class="find-car-title m-0">{{$t('encuentra')}}</h4>
                        <p v-if="statusOpen">
                            {{$t('completainformacion')}}</p>
                    </div>

                    

                    <div @click="onOpen" v-if="statusOpen" class="d-flex justify-center align-items-center p-3">
                        <i class="fa fa-times iconTimes" style="font-size: 20px;"></i>
                    </div>
                </div>

                <form @click="onOpenaLL" action="#">

                    <div v-if="detectDeviceType() =='isDesktop'">
                        
                        <div v-if="statusOpen"  class="col-12 d-flex mb-4" :class="paso > 1 ? 'justify-content-between':'justify-content-end'">
                            <button type="button" v-if="paso > 1" @click="onOpen" class="theme-btn w-auto py-2 m-0">{{$t('volver')}}</button>
                            <button :disabled="loading" type="button" v-if="paso < 2" @click="siguiente(paso+1)" class="theme-btn w-auto py-2 m-0">
                                <i v-if="loading" class="fa-solid fa-spinner"></i>
                                <span v-else>{{ $t('siguiente') }}</span>
                            </button>
                            <!-- <button type="button" id="inline-popups"  data-effect="mfp-zoom-in" v-show="paso == 2" @click="confirmar" class="btn btn-success w-auto py-2">Confirmar</button> -->
                            <!-- <ul v-show="paso == 2"  id="inline-popups"><li><a :style="{opacity: validateStatus ? '1':'.5', cursor: validateStatus ? 'pointer':'no-drop' }" href="#test-popup" data-effect="mfp-zoom-in" class="btn btn-success w-auto py-2">{{$t('siguiente')}}</a></li></ul> -->
                        </div>
                    </div>

                        <div class="mb-2" v-if="paso == 2">
                            <div class="card car-item shadow-none border border-secondary m-0 mb-3 p-2">
                                <div class="carbody car-content">
                                    <p><b>{{ locations.data.find( e => reserva.recogida.oficina_id).name }} - {{ locations.data.find( e => reserva.devolucion.oficina_id).name }}</b></p>
                                    <p>{{ moment(reserva.recogida.fecha.date).format('ll') }} | {{ reserva.recogida.fecha.time }} - {{ moment(reserva.devolucion.fecha.date).format('ll') }} | {{ reserva.recogida.fecha.time }}</p>
                                </div>
                            </div>
                        </div>

                    <Transition>
                        <div class="row" v-if="paso == 1">
                            
                            <filterCampoType />
                            

                            <ReservaPasosOficina 
                                :status_open="statusOpen" 
                                :oficinas="locations.data" 
                                :type="$t('recogida')"
                                :textos="{
                                    number: '1.',
                                    text: $t('ofi_selecciona')
                                }"
                                class="col-paso mb-4" 
                                tipo_reserva="recogida"
                                :class="computedClassPasoOficina"
                                v-model:oficina_id="reserva.recogida.oficina_id"
                                v-model:date="reserva.recogida.fecha.date"
                                v-model:time="reserva.recogida.fecha.time"
                            />

                            <div v-if="statusOpen" class="col-12 col-sm-6 offset-sm-3 mb-4 mt-3" style="background: #ffffff;opacity:.2; height: 1px;"></div>

                            <ReservaPasosOficina 
                                :status_open="statusOpen" 
                                :oficinas="locations.data" 
                                :type="$t('devolucion')"
                                :textos="{
                                    number: '2.',
                                    text: $t('ofi_selecciona2')
                                }"
                                :fecha_min="reserva.recogida.fecha.date"
                                tipo_reserva="devolucion"
                                class="col-paso mb-4" 
                                :class="computedClassPasoOficina"
                                v-model:oficina_id="reserva.devolucion.oficina_id"
                                v-model:date="reserva.devolucion.fecha.date"
                                v-model:time="reserva.devolucion.fecha.time"
                            />

                        </div>
                    </Transition>
                    <Transition>
                        <div class="row" v-if="paso == 2">
                            <ReservaPasosCoches 
                                :status_open="statusOpen"
                                :textos="textoplan"
                                v-model:price_id="reserva.coche.plan_id"
                                v-model:vehicle_id="reserva.coche.coche_id"
                                @reload="getFlota"
                            />
                            
                            <ReservaPasosResumen 
                                class="col-12 col-sm-8"
                                :textos="textresumen"
                                v-show="reserva.coche.coche_id"
                                v-model:plan_id="reserva.coche.plan_id"
                                :coche="vehicles.data.result.vehicles.find( e => e.model_id == reserva.coche.coche_id)"
                                :reserva_devolucion="reserva.devolucion"
                                :currency="vehicles.data.result.common.currency"
                            />
                            
                            <ReservaPasosConfirmacion v-if="reserva.coche.coche_id && reserva.coche.plan_id" @finalizar="onOpen"/>
                        </div>
                    </Transition>

                    <div class="content-mobile" v-if="detectDeviceType() =='isMobile'">
                        <div v-if="statusOpen" class="col-12 d-flex mb-4" :class="paso > 0 ? 'justify-content-between':'justify-content-end'">
                            <button type="button" v-if="paso > 1" @click="siguiente(paso-1)" class="btn btn-danger w-auto py-2 m-0">{{$t('volver')}}</button>
                            <button :disabled="loading" type="button" v-if="paso < 2" @click="siguiente(paso+1)" class="theme-btn w-auto py-2 m-0">
                                <i v-if="loading" class="fa-solid fa-spinner"></i>
                                <span v-else>{{ $t('siguiente') }}</span>
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
       
    </div>
</template>

<script setup lang="ts">
    import filterCampoType from '~/components/home/filterCampoType.vue'

    const { vehicles } = useReserva()
    import moment from 'moment';
    const { reserva } = useReserva()

    const textoplan = {
        number: '3.',
        text: 'Elige un coche seleccionando el plan que prefieras.'
    }
    const textresumen = {
        number: '4.',
        text: 'Resumen de la reserva.'
    }
    const detectDeviceType = () => {
        try {
            const width = window.innerWidth;
            if (width <= 768) { // 768px es un punto de quiebre común para dispositivos móviles
                return 'isMobile';
            } else {
                return 'isDesktop';
            }
        } catch (error) {
            
        }
        // const width = window.innerWidth;    
    }    



    //CONTROLA LA APERTURA Y EL CIERRE DEL MODAL

    const statusOpen = ref(false)

    const onOpen = () => {
        statusOpen.value = !statusOpen.value

        if(statusOpen.value){
            blockBackNavigation()
            $('body')[0].style.overflow = 'hidden'
            $('html')[0].style.overflow = 'hidden'
        }else{
            paso.value = 1
            reserva.coche = { plan_id: 0, coche_id: 0 }
            reserva.recogida = { oficina_id: 0, fecha: { date: moment().format('Y-M-D'), time: '12:00', } }
            reserva.devolucion = { oficina_id: 0, fecha: { date: moment().format('Y-M-D'), time: '12:00', } }

            $('body')[0].style.overflow = ''
            $('html')[0].style.overflow = ''
        }  
    }

    const onOpenaLL = () => {
        if(!statusOpen.value){
            onOpen()
        }
    }

    const paso = ref(1)

    const loading = ref(false)

    const siguiente = async (prox: number) => {

        if(prox < 1){
            statusOpen.value = false
            // onOpen()
            return 
        }
        loading.value = true
        await getFlota()
        loading.value = false
        if(prox == 2){
            if(vehicles.data.result && vehicles.data.result.vehicles.length){
                paso.value = 2
            }else{
                paso.value = 1
                alert('No se encontraron coches. pruebe con otra fecha')
            }
        }else{
            paso.value = prox

        }
    }

    const computedClassPasoOficina = computed(()=>{
        return statusOpen.value ? 'col-12 col-sm-6 offset-sm-3':'col-12 col-md-6'
    })

    //////////////////////////////////////////////////////////////////

    const { locations } = useLocation()
    
    // CONTTROL DE RESERVA

    ////////////////////////
    // GET FLOTA

    const { filterValues, loadingForFilter } = useFilter()

    const getFlota = async () => {

        loadingForFilter.value = true
        const vehiclesApi = await getVehicles()
        
        vehicles.setData(vehiclesApi)
        loadingForFilter.value = false
        return vehicles.data
    }

    

    watch( filterValues.value , async ()=>{
        await getFlota()
    })

    async function getVehicles(){
        try {
            
            const parametrosBusqueda = {
                pickup_location: reserva.recogida.oficina_id,
                dropoff_location: reserva.devolucion.oficina_id,
                start_datetime: `${reserva.recogida.fecha.date} ${reserva.recogida.fecha.time}` ,
                end_datetime: `${reserva.devolucion.fecha.date} ${reserva.devolucion.fecha.time}`,
            }

            const queryParams = new URLSearchParams(parametrosBusqueda as any).toString();

            const queryParamsFilter = new URLSearchParams(filterValues.value as any).toString();
            // console.log('queryParamsFilter',queryParamsFilter)

            const { data } =  await useFetch(`/api/vehicles?${queryParams}&${queryParamsFilter}`)

            // console.log(data.value)
            if (data.value) {
                return data.value 
            } else {
                console.error('No se pencontraron autos');
            }
        } catch (error) {
            console.error('Error en el manejador de eventos:', error);
            return null;
        }
    };


    const blockBackNavigation = () => {
        // Agregar un nuevo estado al historial
        window.history.pushState(null, "", window.location.href);

        window.addEventListener('popstate', function(event) {
            // Volver a agregar el estado al historial cuando se detecte que el usuario intenta navegar hacia atrás
            window.history.pushState(null, "", window.location.href);
        });

        // Opcional: mostrar una alerta para avisar al usuario que la navegación hacia atrás está bloqueada
        window.onpopstate = () => {
            if(paso.value == 2){
                paso.value = 1
            }
            // else{
            //     onOpen()
            // }
            // alert("La navegación hacia atrás está deshabilitada en esta página.");
            return false
        };
    }

</script>

<style scoped lang="scss">

    .white-popup{
        background: #1B1A1A;
        // max-width: 60%;
    }
    .find-car {
        /* position: relative;
        margin-top: -70px;
        z-index: 1; */
        transition: all .2s ease; /* Agregar una transición para una animación suave */
    }
    .find-car {
        &.fullscreen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            margin: 0;
            z-index: 1000;
            background: #1B1A1A;

            // Media query para dispositivos pequeños
            // @media screen and (max-width: 767px) {
                overflow-y: scroll;
            // }

            /* Ancho de la barra de desplazamiento */
            &::-webkit-scrollbar {
                width: 8px;
            }

            /* Estilo del riel de la barra de desplazamiento */
            &::-webkit-scrollbar-track {
                background-color: transparent;
            }

            /* Estilo del pulgar de la barra de desplazamiento */
            &::-webkit-scrollbar-thumb {
                background-color: #424242;
                border-radius: 10px;
            }

            /* Estilo del pulgar de la barra de desplazamiento al pasar el ratón sobre él */
            &::-webkit-scrollbar-thumb:hover {
            background-color: #555;
            }

        }
    }
    .iconTimes{
            color: white;
            cursor: pointer;
        }
    .darkmode{
        .find-car{
            &.fullscreen{
                background: #ffffff;
            }
        }
        .iconTimes{
            color: #000000;
        }
    }
    .col-paso{
        &.disabled{
            opacity: .2;
        }
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    .fa-spinner {
        animation: spin 2s linear infinite;
    }
    .content-mobile{
        position: sticky;
        bottom: 5px;
        z-index: 9;
        left: 0px;
        text-align: center;
        width: 100%;
    }
</style>