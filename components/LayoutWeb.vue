<template>
<div class="preloader">
    <div class="loader-ripple">
        <div></div>
        <div></div>
    </div>
</div>

<AppHeader />

<slot /> 

<AppFooter />
<!-- scroll-top -->
<a href="#" id="scroll-top"><i class="far fa-arrow-up"></i></a>
</template>
<script setup  >
    
    import { reactive, ref, onMounted } from 'vue'

    async function getToken(event){
        try {
            const { data } =  await useFetch('/api/token')

            if (data.value) {
                // console.log('Token actualizado o recuperado:', tokenInfo);
            } else {
                console.error('No se pudo obtener el token.');
            }
            return true 
        } catch (error) {
            console.error('Error en el manejador de eventos:', error);
            return null;
        }
    };

    async function getTokenAction(event){
        try {
            const { data } =  await useFetch('/api/tokenAction')

            if (data.value) {
                // console.log('Token actualizado o recuperado:', tokenInfo);
            } else {
                console.error('No se pudo obtener el tokenAction.');
            }
            return true 
        } catch (error) {
            console.error('Error en el manejador de eventos:', error);
            return null;
        }
    };

    async function getParametros(event){
        try {
            const { data } =  await useFetch('/api/parameters')
            if (data.value) {
                const parametros = reactive(data.value)
                return parametros 
            } else {
                console.error('No se pudo obtener el token.');
            }
        } catch (error) {
            console.error('Error en el manejador de eventos:', error);
            return null;
        }
    };

    async function getHome({ id_idioma }) {
        try {
            const { data } = await useFetch(`/api/homeAction?lang=${id_idioma}`);
            if (data.value) {
                const home = reactive(data.value)
                return home 
            } else {
                console.error('Error en homeAction');
            }
        } catch (error) {
            console.error('Error homeAction en el manejador de eventos:', error);
            return null;
        }
    };

    async function getLocations(event){
        try {
            const { data } =  await useFetch('/api/locations')
            if (data.value) {
                return data.value 
            } else {
                console.error('No se pudo obtener el token.');
            }
        } catch (error) {
            console.error('Error en el manejador de eventos:', error);
            return null;
        }
    };

    async function getVehicles(){
        try {
            const { data } =  await useFetch('/api/vehicles')
            if (data.value) {
                return data.value 
            } else {
                console.error('No se pudo obtener el token.');
            }
        } catch (error) {
            console.error('Error en el manejador de eventos:', error);
            return null;
        }
    };
    
    const parametros = ref()
    const { home, sliders } = useHome()
    const { locations } = useLocation()
    const { vehicles } = useVehicle()

    const { locale } = useI18n()

    onMounted(async ()=>{
        
        await getTokenAction()
        await getToken()

        parametros.value = await getParametros()
        
        const lang = useCookie('lang')

        let idioma = lang.value!=undefined ? lang.value : 'es'
        locale.value = idioma;

        const homeActtionApi = await getHome({ id_idioma: home.idiomaToId(idioma) })
        
        home.setData(homeActtionApi)

        const locationsApi = await getLocations()

        locations.setLocations(locationsApi)

        const vehiclesApi = await getVehicles()

        vehicles.setData(vehiclesApi)
        
        console.log('Mounted')

        (function ($) {
            "use strict";
            
            $(".preloader").fadeOut("slow");

            new WOW().init();
  
            $('.hero-slider2').on('change.owl.carousel', function (event) {
                new WOW().init();
            });

        })(jQuery);

    })


    // watch(sliders,(to)=>{
    //     console.log('to sliders',to)
    //     (function ($) {
    //         "use strict";
    //         $(".preloader").fadeOut("slow");
    //     })(jQuery);
    // })

    onNuxtReady(async () => {

        console.log('nuxtReady')
        (function ($) {
            "use strict";

            // preloade
            /**
             * data-background 
             * TODO no se para que es esto
             */
                // $("[data-background]").each(function () {
                //     $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
                // });

                // wow init
                // new WOW().init();

               
                // $('.hero-slider2').on('change.owl.carousel', function (event) {
                //     new WOW().init();
                // });

                // multi level dropdown menu
                $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
                    if (!$(this).next().hasClass('show')) {
                        $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
                    }
                    var $subMenu = $(this).next('.dropdown-menu');
                    $subMenu.toggleClass('show');

                    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
                        $('.dropdown-submenu .show').removeClass('show');
                    });
                    return false;
                });

        
                
            // scroll to top
            $(window).scroll(function () {

                if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                    $("#scroll-top").fadeIn('slow');
                } else {
                    $("#scroll-top").fadeOut('slow');
                }
            });

            $("#scroll-top").click(function () {
                $("html, body").animate({ scrollTop: 0 }, 1500);
                return false;
            });

            $(window).scroll(function () {
                if ($(this).scrollTop() > 50) {
                    $('.navbar').addClass("fixed-top");
                } else {
                    $('.navbar').removeClass("fixed-top");
                }
            });


        })(jQuery);

    })

    

</script>