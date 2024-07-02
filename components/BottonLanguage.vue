<template>
    <div class="dropdown">
                                <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fa-regular fa-language"></i>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><a @click="cambioIdioma('es')"  class="dropdown-item" href="#"><i class="fas fa-caret-right"></i> {{$t('idioma_es')}}</a></li>
                                    <li><a @click="cambioIdioma('en')" class="dropdown-item" href="#"><i class="fas fa-caret-right"></i>{{$t('idioma_en')}}</a></li>
                                    <li><a @click="cambioIdioma('ca')" class="dropdown-item" href="#"><i class="fas fa-caret-right"></i> {{$t('idioma_ca')}}</a></li>
                                    <li><a @click="cambioIdioma('ger')" class="dropdown-item" href="#"><i class="fas fa-caret-right"></i>{{$t('idioma_ger')}}</a></li>
                                </ul>
                            </div>
    
</template>
<script setup lang="ts">
    const { home } = useHome()
   import type { Data } from '~/composables/useHome'
    const { locale } = useI18n()

    async function getHome({ id_idioma }: { id_idioma: number } = { id_idioma: 1 }): Promise<Data | null> {
        try {
            const { data } = await useFetch(`/api/homeAction?lang=${id_idioma}`);
            if (data.value) {
                const homeData = reactive(data.value as unknown as Data);
                return homeData;
            } else {
                console.error('Error en homeAction');
                return null;
            }
        } catch (error) {
            console.error('Error en el manejador de eventos:', error);
            return null;
        }
    }

    const cambioIdioma = async (idioma: string) => {
        
        const homeActionApi = await getHome({ id_idioma: home.idiomaToId(idioma) });

        locale.value = idioma;

        const lang = useCookie('lang')
        lang.value = idioma

        if (homeActionApi) {
            home.setData(homeActionApi);
        } else {
            console.error('No data returned from API');
        }
    }

   

</script>