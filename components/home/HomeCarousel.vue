<template>
    <!-- hero slider -->
    
    <div class="hero-section">
        <div class="hero-slider owl-carousel owl-theme">
            
            <div v-for="(slide , key) in sliders" :key="`slid${key}`" class="hero-single" :style="{backgroundImage: `url(${slide.url_imagen})`}" >
               
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-9 col-lg-7">
                            <div class="hero-content">
                               <div v-html="slide.contenido"></div>
                                <!-- <h6 class="hero-sub-title wow animate__animated animate__fadeInUp"
                                    data-wow-duration="1s" data-wow-delay=".25s">{{$t('reserva_ahora')}}</h6>
                                <h1 class="hero-title wow animate__animated animate__fadeInUp"
                                    data-wow-duration="1s" data-wow-delay=".50s">
                                    {{$t('viaja_sin_limites')}} <br>
                                    <span>{{$t('r_123')}}</span><br>
                                    {{$t('destino')}}
                                </h1>
                                <p class="wow animate__animated animate__fadeInUp" data-wow-duration="1s"
                                    data-wow-delay=".75s">
                                    {{$t('nuestra_flota')}}
                                </p>
                                <div class="hero-btn wow animate__animated animate__fadeInUp" data-wow-duration="1s"
                                    data-wow-delay="1s">
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="false" class="hero-single" style="background: url('/assets/img/slider/img_slider2.jpg')">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-9 col-lg-7">
                            <div v-if="true" class="hero-content">
                                <h6 class="hero-sub-title wow animate__animated animate__fadeInUp"
                                    data-wow-duration="1s" data-wow-delay=".25s">{{$t('disfruta')}}</h6>
                                <h1 class="hero-title wow animate__animated animate__fadeInUp"
                                    data-wow-duration="1s" data-wow-delay=".50s">
                                    {{$t('paga_en')}}<br> <span>{{$t('oficina')}}</span> <br>{{$t('visitanos')}}
                                </h1>
                                <p class="wow animate__animated animate__fadeInUp" data-wow-duration="1s"
                                    data-wow-delay=".75s">
                                    {{$t('hacemos')}}
                                </p>
                                <div class="btn-descarga">
                                    <img src="" alt="">
                                </div>
                                <div class="hero-btn wow animate__animated animate__fadeInUp" data-wow-duration="1s"
                                    data-wow-delay="1s">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="false" class="hero-single" style="background: url(/assets/img/slider/slider-3.png)">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-9 col-lg-7">
                            <div class="hero-content">
                                <h6 class="hero-sub-title wow animate__animated animate__fadeInUp"
                                    data-wow-duration="1s" data-wow-delay=".25s">{{$t('reserva_ahora')}}</h6>
                                <h1 class="hero-title wow animate__animated animate__fadeInUp"
                                    data-wow-duration="1s" data-wow-delay=".50s">
                                    {{$t('descarga')}} <br>
                                    <span>{{$t('nuestra_app')}}</span> <br>
                                    {{$t('cada_vez')}}
                                </h1>
                                <p class="wow animate__animated animate__fadeInUp" data-wow-duration="1s"
                                    data-wow-delay=".75s">
                                    {{$t('descargaste')}}
                                </p>
                                <div class="hero-btn wow animate__animated animate__fadeInUp" data-wow-duration="1s"
                                    data-wow-delay="1s">
                                    <!--<a href="#" class="theme-btn"><strong>Reservar</strong> <i class="far fa-arrow-right"></i></a>
                                    <a href="#" class="theme-btn theme-btn4"><strong>Tarifas</strong><i
                                    class="far fa-arrow-right"></i></a>-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- hero slider end -->
</template>


<script setup>
    const { sliders } = useHome()

    watch( sliders, ()=>{
        // hero slider
        
        (function ($) {
            "use strict";

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
            })(jQuery);
        
    })
</script>
