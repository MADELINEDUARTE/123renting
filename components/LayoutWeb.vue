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

    async function  getToken(event){
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
    
    onMounted(async ()=>{
        
        await getToken()

        parametros.value = await getParametros()

        const locationsApi = await getLocations()

        const { locations } = useLocation()
        
        locations.setLocations(locationsApi)

        const vehiclesApi = await getVehicles()

        const { vehicles } = useVehicle()

        vehicles.setData(vehiclesApi)

    })

    onNuxtReady(async () => {

        
        (function ($) {
            "use strict";

            // preloader
            $(".preloader").fadeOut("slow");

            
            /**
             * data-background 
             * TODO no se para que es esto
             */
                // $("[data-background]").each(function () {
                //     $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
                // });

                // wow init
                new WOW().init();

                // hero slider
                $('.hero-slider').owlCarousel({
                    loop: true,
                    nav: true,
                    dots: false,
                    margin: 0,
                    autoplay: true,
                    autoplayHoverPause: true,
                    autoplayTimeout: 5000,
                    items: 1,
                    navText: [
                        "<i class='fal fa-long-arrow-left'></i>",
                        "<i class='fal fa-long-arrow-right'></i>"
                    ],
                });

                $('.hero-slider2').on('change.owl.carousel', function (event) {
                    new WOW().init();
                });

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



        // const  { data, pending, error, refresh } = await useLazyFetch('https://dev.api.123renting.es/api/home_frontend', {
        //     query: { 
        //         idioma: 1,
        //         idregion: 1,
        //         cantidad: 4
        //     }
        // })

        // const beneficios = data.value.data.beneficios

        // const { mejoras } = useMejoras()

        // mejoras.data = reactive(beneficios)
        // do something with myAnalyticsLibrary
    })

    

</script>