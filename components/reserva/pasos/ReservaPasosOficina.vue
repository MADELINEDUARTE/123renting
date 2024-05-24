<template>
    <div >
 

            <p style="font-size: 12px" v-if="props.status_open" ><span style="font-size: 18px; font-weight: 900; color: #E94B28">{{ textos.number }}</span> {{ textos.text }}</p>
     

        <div class="row">
            <div class="col-12">
                <div  class="form-group">
                    <div class="d-flex justify-content-between">
                        <label>{{$t('oficina_de')}} {{ type }}</label>
                        <a v-if="oficina_id" :href="`https://www.google.com/maps?q=${oficinaSeleccionada.latitude},${oficinaSeleccionada.longitude}`" target="_blank" style="font-size: 12px" class="mt-1" >{{$t('ver_mapa')}} <span class="fa fa-location-dot"></span> </a>
                    </div>
                    <select type="text" class="form-control" placeholder="Oficina" v-model="oficina_id">
                        <option value="0">{{$t('seleccione_ofi')}}</option>
                        <option 
                            v-for="(oficina, key) in oficinas" 
                            :key="`oficina-${type}-${key}`"
                            :value="oficina.id" 
                        >{{ oficina.name }}</option>
                    </select>
                    <i class="far fa-location-dot"></i>
                </div>
            </div>
            <div class="col-6">
                <div class="form-group">
                    <label>{{$t('fecha_de')}} {{ type }}</label>
                    <input type="date" :min="fechaHoy()" v-model="date" class="form-control date-picker px-3" placeholder="MM/DD/AA">
                    <!-- <i class="far fa-calendar-days"></i> -->
                </div>
            </div>
            <div class="col-6">
                <div class="form-group">
                    <label>{{$t('hora_de')}} {{ type }}</label>
                    <input type="time" v-model="time" class="form-control time-picker px-3" placeholder="00:00 AM">
                    <!-- <i class="far fa-clock"></i> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
  status_open: Boolean,
  oficinas: Array,
  type: String,
  fecha_min: String,
  tipo_reserva: String,
  textos:{
    type: Object,
    default(){
        return {
            number: '',
            text: ''
        }
    }
  }
})

const idOficina = ref(0)

const oficina_id = defineModel('oficina_id')
const date = defineModel('date')
const time = defineModel('time')

const oficinaSeleccionada = computed( () => {
    return props.oficinas.find( (e) => e.id == oficina_id.value )
})

const fechaHoy = ()=>{
    // Crear un objeto Date para la fecha de hoy
    const now = new Date();
    
    // Verificar si la hora actual es mayor o igual a las 18:00
    if (now.getHours() >= 18) {
        // Si es mayor o igual a las 18:00, establecer la fecha a mañana
        now.setDate(now.getDate() + 1);
    }

    // Formatear la fecha en la forma YYYY-MM-DD
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses empiezan desde 0
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    //

    if(props.tipo_reserva == 'devolucion'){
        return props.fecha_min
    }

    // Obtener la fecha mínima formateada
    const minDate = formatDate(now);

    return minDate;
}

const horaHoy = () => {
     // Crear un objeto Date para la hora actual
     const now = new Date();

    // Formatear la hora en la forma HH:MM
    const formatTime = (date) => {
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    // Obtener la hora mínima formateada
    const minTime = formatTime(now);

    return minTime
}

</script>