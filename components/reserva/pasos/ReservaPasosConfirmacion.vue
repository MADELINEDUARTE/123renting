<template>
    <div>
        <ul id="inline-popupss"><li class="text-right mt-3">
            <a href="#form-confirm" data-effect="mfp-zoom-in" class="btn btn-success w-auto py-2 open-popup-link">Confirmar</a>
        </li></ul>
        
        <div id="form-confirm" class="white-popup mfp-hide">
            <p class="mb-3" style="color: black"><b>{{ $t('complete_informacion') }}</b></p>
            <form @submit.prevent="reservar">
                <div class="row">
                    <div v-for="(input, key) in inputs" :key="`input-${key}`" class="form-group mb-4" :class="input.class">
                        <label :for="input.name">{{ $t(input.label) }} <span style="color: red; ">*</span> </label>
                        <input :required="input.required" :type="input.type" class="form-control date-picker px-3"  :id="input.name" v-model="input.model" :placeholder="$t(input.placeholder)">
                    </div>
                </div>
                <input type="submit" class="btn btn-success w-auto py-2 mt-3" value="Reservar">
            </form>
        </div>

        <div id="form-success" class="white-popup mfp-hide text-center">
            <h3 class="find-car-title mb-4">{{$t('titulo_confirmacion')}}</h3>
            <p style="color: black" class="mb-4">{{ $t('texto_confirmacion') }}</p>
            <button @click="cerrar" class="btn btn-primary w-auto py-2 mt-4">{{ $t("Finalizar") }}</button>
            
        </div>
    </div>
</template>
<script setup>
    onMounted(()=>{
        $('.open-popup-link').magnificPopup({
            type:'inline',
            midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
            
        });

        // $.magnificPopup.open({
        //     items:{
        //         src: $('#form-success'),
        //         type: 'inline'
        //     }
        // })
    })

    const inputs = reactive([
        {
            name: 'name',
            model: '',
            type: 'text',
            placeholder: 'ingrese_nombre',
            label: 'name',
            class: 'col-12',
            required: true
        },
        {
            name: 'surname',
            model: '',
            type: 'text',
            placeholder: 'ingrese_apellido',
            label: 'lastname',
            class: 'col-12',
            required: true
        },
        {
            name: 'email',
            model: '',
            type: 'email',
            placeholder: 'ingrese_email',
            label: 'email',
            class: 'col-12',
            required: true
        },
        {
            name: 'mobile_prefix',
            model: '',
            type: 'number',
            placeholder: '00',
            label: 'mobile_prefix',
            class: 'col-4',
            required: true,
            max: 3
        },
        {
            name: 'mobile',
            model: '',
            type: 'number',
            placeholder: 'ingrese_mobile',
            label: 'mobile',
            class: 'col-8',
            required: true
        },
    ])
    
    const { reserva } = useReserva()


    const datosPersonales = reactive({})

    const reservar = async () => {
        inputs.forEach( (input) => {
            datosPersonales[input.name] = input.model
        })

        datosPersonales.model = reserva.coche.coche_id
        datosPersonales.pricelist = reserva.coche.plan_id
        datosPersonales.start_datetime = reserva.getFechas().recogida
        datosPersonales.end_datetime = reserva.getFechas().devolucion
        datosPersonales.pickup_location = reserva.recogida.oficina_id
        datosPersonales.dropoff_location = reserva.devolucion.oficina_id
        
       const response =  await postReservar(datosPersonales)
       
       if(response){
            $.magnificPopup.open({
                items:{
                    src: $('#form-success'),
                    type: 'inline'
                }
            })
       }
    }

    async function postReservar(body){
        try {

            const { data } =  await useFetch(`/api/reservar`,{ method: 'post',body: body })

            console.log(data.value)
            if (data.value) {
                return data.value 
            } else {
                console.error('No se pencontraron auos');
            }
        } catch (error) {
            console.error('Error en el manejador de eventos:', error);
            return null;
        }
    };

    const emit = defineEmits(['finalizar'])

    const cerrar = () => {
        $.magnificPopup.close()
        emit('finalizar')
    }
</script>

<style>
    .white-popup {
    position: relative;
    background: #FFF;
    padding: 20px;
    width: auto;
    max-width: 50%;
    margin: 20px auto;
    border-radius: 10px;
    }
    @media (max-width: 768px) {
    .white-popup {
        max-width: 100%;
    }
    }
</style>