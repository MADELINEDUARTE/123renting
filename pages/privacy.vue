<template>
<LayoutWeb>
<main class="main">
    <div class="container pt-120 pb-120">
        <div v-html="parametros.politica_privacidad"></div>             
    </div> 
<!-- privacy policy end --> 
</main>
</LayoutWeb>
</template>
<script setup>
    onMounted(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
    const { parametros } = useHome()
</script>