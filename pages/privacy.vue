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
    const { parametros } = useHome()
</script>