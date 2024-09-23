<template>
    <div class="card car-item border-0 shadow-none ">
        <div class="card-body car-content p-0">
            <h4>{{ $t('Filtro de busqueda') }}</h4>
            <div @click="status = !status" class="d-block d-sm-none mt-3">
                
                <p class="bagde border col-4 px-3 py-1 mt-2 rounded-5" >
                    <i class="me-2 fa-solid fa-filter"></i>
                    {{ $t('Filtrar') }}
                </p>
                
            </div>

            <div :class="status ? 'd-flex':'d-none'" class="row mt-3  d-sm-flex" >
                <div class="col-4 mb-2 col-sm-2">
                    <select v-model="filterValues.doors" class="form-select selectFilter" aria-label="Default select example">
                        <option value="" selected>{{ $t('Puertas') }}</option>
                        <option value="2"> 2+</option>
                        <option value="3"> 3+</option>
                        <option value="4"> 4+</option>
                        <option value="5"> 5+</option>
                        <option value="7"> 7+</option>
                    </select>
                </div>
                <div class="col-4 mb-2 col-sm-2">
                    <select v-model="filterValues.max_people" class="form-select selectFilter" aria-label="Default select example">
                        <option value="" selected>{{ $t('Pasajeros') }}</option>
                        <option value="2"> 2+</option>
                        <option value="4"> 4+</option>
                        <option value="5"> 5+</option>
                        <option value="7"> 7+</option>
                    </select>
                </div>
                <div class="col-4 mb-2 col-sm-2">
                    <select v-model="filterValues.transmission" class="form-select selectFilter" aria-label="Default select example">
                        <option value="" selected>{{ $t('Transmission types') }}</option>
                        <option v-for="(item,key) in filter.transmissionTypes" :key="`transmissionTypes${key}`" :value="item"> {{item}}</option>
                    </select>
                </div>
                <div class="col-4 mb-2 col-sm-2">
                    <select v-model="filterValues.type" class="form-select selectFilter" aria-label="Default select example">
                        <option value="" selected>{{ $t('Vehicles Type') }}</option>
                        <option v-for="(item,key) in filter.types" :key="`type${key}`" :value="item.id"> {{item.name}}</option>
                    </select>
                </div>
                <div class="col-4 mb-2 col-sm-2">
                    <select v-model="filterValues.category" class="form-select selectFilter" aria-label="Default select example">
                        <option value="" selected>{{ $t('Categories') }}</option>
                        <option v-for="(item,key) in filter.categories" :key="`categories${key}`" :value="item.id"> {{item.name}}</option>
                    </select>
                </div>
                <div class="col-4 mb-2 col-sm-2">
                    <select v-model="filterValues.fuel_type" class="form-select selectFilter" aria-label="Default select example">
                        <option value="" selected>{{ $t('Fuel types') }}</option>
                        <option v-for="(item,key) in filter.fuelTypes" :key="`fuelTypes${key}`" :value="item"> {{item}}</option>
                    </select>
                </div>
                
            </div>
           
        </div>
    </div>
</template>
<script setup>
 
const { data, filterValues, filter } = useFilter()


const status = ref(false)

</script>

<style scoped lang="scss">
.selectFilter{
    border-radius: 8px;
    font-size: 14px;
    padding: 6px 10px 6px 10px;
}

</style>