<template>
    <div class="mt-4 col-12 cont-filterType mx-0">
        <div class="d-flex flex-wrap">
            <button 
                type="button"
                @click="filterValues.type = 0" 
                class="me-1 mb-2 btn badge  px-3 py-2 rounded-5 border border-1"
                :class="filterValues.type == 0 ? 'text-bg-secondary':''"
            >
                <p>{{ $t('Todos') }}</p>
            </button>
            <button 
                type="button"
                v-for="(item, key) in filter.types" 
                :key="`typoe-${key}`" 
                @click="filterValues.type = item.id" 
                class="me-1 mb-2 btn badge  px-3 py-2 rounded-5 border border-1"
                :class="filterValues.type == item.id ? 'text-bg-secondary':''"
            >
                <p>{{ $t(item.name) }}</p>
            </button>
        </div>

    </div>
</template>
<script setup>

const { data, filterValues, filter } = useFilter()

</script>
<style lang="scss" scoped>
.fullscreen{
    .cont-filterType{
        @media (min-width: 576px){
            margin-left: 25% !important;
            flex: 0 0 auto;
             width: 50%;
    
        }
       
    }
}

.darkmode{
    .text-bg-secondary p{
        color: white !important;
    }
} 
</style>