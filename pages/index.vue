<template>
<LayoutWeb>
<main class="main">
        <!-- hero slider -->
        <HomeCarousel v-if="sliders.length"/>
        <!-- hero slider end -->

        <!-- find-car form -->
        <ReservaSolicitudFormHome />   
        <!-- <div class="find-car" id="iniciatureserva">
    <div class="container">
        <div class="find-car-form">
            <h4 class="find-car-title">{{$t('encuentra')}}</h4>
            <form action="#">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="form-group">
                            <label>{{$t('ofi_recogida')}}</label>
                            <input type="text" class="form-control" :placeholder="$t('ofi_recogida')">
                            <i class="far fa-location-dot"></i>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="form-group">
                            <label>{{$t('elige')}}</label>
                            <input type="text" class="form-control" :placeholder="$t('furgoneta')">
                            <i class="far fa-car"></i>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="form-group">
                            <label>{{$t('ofi_devolucion')}}</label>
                            <input type="text" class="form-control" :placeholder="$t('ofi_devolucion')">
                            <i class="far fa-location-dot"></i>
                        </div>
                    </div>
                    <div class="col-lg-2">
                        <div class="form-group">
                            <label>{{$t('fecha_recogida')}}</label>
                            <input type="text" class="form-control date-picker" :placeholder="$t('mm_dd_aa')">
                            <i class="far fa-calendar-days"></i>
                        </div>
                    </div>
                    <div class="col-lg-2">
                        <div class="form-group">
                            <label>{{$t('h_recogida')}}</label>
                            <input type="text" class="form-control time-picker" :placeholder="$t('cero')">
                            <i class="far fa-clock"></i>
                        </div>
                    </div>
                    <div class="col-lg-2">
                        <div class="form-group">
                            <label>{{$t('fecha_devolucion')}}</label>
                            <input type="text" class="form-control date-picker" :placeholder="$t('mm_dd_aa')">
                            <i class="far fa-calendar-days"></i>
                        </div>
                    </div>
                    <div class="col-lg-2">
                        <div class="form-group">
                            <label>{{$t('h_devolucion')}}</label>
                            <input type="text" class="form-control time-picker" :placeholder="$t('cero')">
                            <i class="far fa-clock"></i>
                        </div>
                    </div>
                    <div class="col-lg-4 align-self-end">
                        <nuxt-link to="car-single" class="theme-btn" type="submit">
                            <strong>{{$t('b_inicia_reserva')}}</strong> <i class="far fa-arrow-right"></i>
                        </nuxt-link>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div> -->

        <!-- find-car form end -->

    <!-- feature area -->
    <div class="feature-area pt-120" id="visitanos">
        <div class="container">
            <div class="col-lg-6 mx-auto">
                <div class="site-heading text-center">
                    <span class="site-title-tagline">{{$t('atencion')}}</span>
                    <h2 class="site-title text">{{$t('visitanos')}} <span> {{$t('nuestras_oficinas')}}</span></h2>
                    <div class="heading-divider"></div>
                </div>
            </div>
            
              <div class="feature-wrapper">
                <div class="row" v-if="locations.data.length">
                    <div
                        v-for="(item,key) in locations.data" 
                        :key="`location-${key}`"
                        class="col-md-6 col-lg-4">
                        <div class="feature-item">
                          <a :href="`https://www.google.com/maps?q=${item.latitude},${item.longitude}`" target="_blank"> 
                            <div class="testimonial-quote-icon">
                                <img src="/assets/img/icon/location.svg" alt=""/>
                            </div>
                            <div class="feature-content">
                                <h4>{{ item.name }}</h4>
                                <p>{{ item.complete_address }}</p>
                            </div>
                          </a>
                        </div>
                    </div>
                    <!-- <div class="col-md-6 col-lg-4">
                        <div class="feature-item">
                            <a href="#">
                              <div class="testimonial-quote-icon">
                                  <img src="/assets/img/icon/location.svg" alt="">
                              </div>
                              <div class="feature-content">
                                  <h4>{{$t('direccion2')}}</h4>
                                <p>{{$t('avenida2')}}</p>
                              </div>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="feature-item">
                            <a href="#">
                              <div class="testimonial-quote-icon">
                                  <img src="/assets/img/icon/location.svg" alt="">
                              </div>
                              <div class="feature-content">
                                  <h4>{{$t('direccion3')}}</h4>
                                <p>{{$t('avenida3')}}</p>
                              </div>
                            </a>
                        </div>
                    </div> -->
                    <!-- <div class="text-center mt-4">
                        <a href="#" class="theme-btn"> <strong>{{$t('b_ver_mas')}}</strong> <i class="far fa-arrow-rotate-right"></i> </a>
                    </div> -->
                </div>
             </div>
          </div>
          </div>

    <!-- about area -->
    <div class="about-area py-120 mb-50" id="nosotros123">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 d-flex align-items-center justify-content-center">
                    <div class="about-left">
                        <div class="about-img">
                            <img class="about-img-1" src="/assets/img/about/01.png" alt="">
                        </div>
                        <div class="about-shape"><img src="/assets/img/shape/02.png" alt=""></div>
                        <div class="about-experience">
                            <div class="about-experience-icon">
                                <img src="/assets/img/icon/car-rent.svg" alt="">
                            </div>
                            <b>{{$t('disponibilidad')}} <br>  {{$t('mejor_serv')}}</b>
                        </div>
                    </div>
                </div>
                 
                <div class="col-lg-6">
                    <div class="about-right">
                        <div class="site-heading mb-3">
                            <span class="site-title-tagline">{{$t('nosotros')}}</span>
                            <h2 class="site-title">
                                {{$t('mejor_opcion')}} <span>{{$t('alquiler')}} </span> {{$t('rapido')}}
                            </h2>
                        </div>
                        <p class="about-text">
                            {{$t('somos')}}
                        </p>
                        <div class="about-list-wrapper">
                            <ul class="about-list list-unstyled">
                                <li>
                                    {{$t('tarifas_s')}}
                                </li>
                                <li>
                                    {{$t('eficiencia')}}
                                </li>
                                <li>
                                    {{$t('elevado')}}
                                </li>
                            </ul>
                        </div>
                        <a href="#iniciatureserva" class="theme-btn mt-4"><strong>{{$t('b_inicia_reserva')}}</strong> <i
                                class="far fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- about area end -->

    <!-- car area -->
    <flotaHome />
    <!-- car area end -->

    <!-- process-area -->
    <div class="process-area pt-120 pb-80">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 mx-auto">
                    <div class="site-heading text-center">
                        <span class="site-title-tagline">{{$t('trabajamos')}}</span>
                        <h2 class="site-title">{{$t('opcion')}} <span>{{$t('alquiler')}}</span></h2>
                        <div class="heading-divider"></div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-between">
                <div class="col-lg-3 col-md-6 text-center mb-50">
                    <div class="process-single">
                        <div class="icon">
                            <span>{{$t('uno')}}</span>
                            <i class="fa-thin fa-thought-bubble"></i>
                        </div>
                        <h4>{{$t('pensamos')}}</h4>
                        <p>{{$t('adapta')}}</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 text-center mb-50">
                    <div class="process-single">
                        <div class="icon">
                            <span>{{$t('dos')}}</span>
                            <i class="fa-thin fa-garage-open"></i>
                        </div>
                        <h4>{{$t('siempre')}}</h4>
                        <p>{{$t('entregamos')}}</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 text-center mb-50">
                    <div class="process-single">
                        <div class="icon">
                            <span>{{$t('tres')}}</span>
                            <i class="fa-thin fa-gauge-max"></i>
                        </div>
                        <h4>{{$t('rapidos')}}</h4>
                        <p>{{$t('sistema')}}</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 text-center mb-50">
                    <div class="process-single">
                        <div class="icon">
                            <span>{{$t('cuatro')}}</span>
                            <i class="fa-thin fa-phone-volume"></i>
                        </div>
                        <h4>{{$t('contactanos')}}</h4>
                        <p>{{$t('llamanos',{ phone: parametros.telefono })}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- process-area end -->

    <!-- choose-area -->
    <!--<div class="choose-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="choose-content">
                        <div class="site-heading">
                            <span class="site-title-tagline text-white">Why Choose Us</span>
                            <h2 class="site-title text-white mb-10">We are dedicated <span>to provide</span> quality service</h2>
                            <p class="text-white">
                                It is a long established fact that a reader will be distracted by the readable
                                content of a page when looking at its layout.
                            </p>
                        </div>
                        <div class="choose-content-wrapper">
                            <div class="choose-item">
                                <div class="choose-item-icon">
                                    <img src="/assets/img/icon/car.svg" alt="">
                                </div>
                                <div class="choose-item-info">
                                    <h3>Best Quality Cars</h3>
                                    <p>There are many variations of passages of Lorem Ipsum available but the
                                        majority have suffered alteration.</p>
                                </div>
                            </div>
                            <div class="choose-item">
                                <div class="choose-item-icon">
                                    <img src="/assets/img/icon/car-key.svg" alt="">
                                </div>
                                <div class="choose-item-info">
                                    <h3>No Cancellation Fees</h3>
                                    <p>There are many variations of passages of Lorem Ipsum available but the
                                        majority have suffered alteration.</p>
                                </div>
                            </div>
                            <div class="choose-item">
                                <div class="choose-item-icon">
                                    <img src="/assets/img/icon/driver.svg" alt="">
                                </div>
                                <div class="choose-item-info">
                                    <h3>Personal Driver</h3>
                                    <p>There are many variations of passages of Lorem Ipsum available but the
                                        majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="choose-img">
                        <div class="video-wrapper">
                            <a class="play-btn popup-youtube" href="https://www.youtube.com/watch?v=ckHzmP1evNU">
                                <i class="fas fa-play"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>-->
    <!-- choose-area end -->

    <!-- faq area -->
    <div class="faq-area py-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="faq-right">
                        <div class="site-heading mb-3">
                            <span class="site-title-tagline">{{$t('dudas')}}</span>
                            <h2 class="site-title my-3">{{$t('en123')}} <span>{{$t('respondemos')}}</span> {{$t('preguntas')}}</h2>
                        </div>
                        <p class="about-text">{{$t('sabemos')}}</p>
                        <div class="faq-img mt-3">
                            <img src="/assets/img/faq/01.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <span><i class="far fa-question"></i></span> {{$t('como')}}
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show"
                                aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                        {{$t('facil')}}
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <span><i class="far fa-question"></i></span> {{$t('necesito')}}
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    {{$t('necesitas')}}
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false"
                                    aria-controls="collapseThree">
                                    <span><i class="far fa-question"></i></span> {{$t('puedo')}}
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse"
                                aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    {{$t('puedes')}}
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingS">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseS" aria-expanded="false"
                                    aria-controls="collapseS">
                                    <span><i class="far fa-question"></i></span>{{$t('puedo_recoger')}}
                                </button>
                            </h2>
                            <div id="collapseS" class="accordion-collapse collapse"
                                aria-labelledby="headingS" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    {{$t('principio')}}
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    <span><i class="far fa-question"></i></span>{{$t('circular')}}
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    {{$t('circular_furgo')}}
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFive">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    <span><i class="far fa-question"></i></span>{{$t('circular2')}}
                                </button>
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    {{$t('circular_furgo2')}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- faq area end -->

    <!-- testimonial-area -->
    <div class="testimonial-area py-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 mx-auto">
                    <div class="site-heading text-center">
                        <span class="site-title-tagline">{{$t('testimonios')}} </span>
                        <h2 class="site-title text-">{{$t('que_dicen')}}<span> {{$t('clientes')}}</span></h2>
                        <div class="heading-divider"></div>
                    </div>
                </div>
            </div>
            <div class="testimonial-slider owl-carousel owl-theme">
                <div class="testimonial-single">
                    <div class="testimonial-content">
                        <div class="testimonial-author-img">
                            <img src="/assets/img/testimonial/01.jpg" alt="">
                        </div>
                        <div class="testimonial-author-info">
                            <h4>{{$t('nombre1')}}</h4>
                           <!--<p>Customer</p>-->
                            
                        </div>
                    </div>
                    <div class="testimonial-quote">
                        <span class="testimonial-quote-icon"><i class="flaticon-quote-hand-drawn-symbol"></i></span>
                        <div class="testimonial-rate">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <p>
                            {{$t('testimonio1')}}
                        </p>
                        <div class="testimonial-quote-icon">
                            <img src="/assets/img/icon/quote.svg" alt="">
                        </div>
                    </div>
                    
                </div>
                <div class="testimonial-single">
                    <div class="testimonial-content">
                        <div class="testimonial-author-img">
                            <img src="/assets/img/testimonial/02.jpg" alt="">
                        </div>
                        <div class="testimonial-author-info">
                            <h4>{{$t('nombre2')}}</h4>
                            <!--<p>Customer</p>-->
                        </div>
                    </div>
                    <div class="testimonial-quote">
                        <span class="testimonial-quote-icon"><i class="flaticon-quote-hand-drawn-symbol"></i></span>
                        <div class="testimonial-rate">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <p>
                            {{$t('testimonio2')}}
                        </p>
                        <div class="testimonial-quote-icon">
                            <img src="/assets/img/icon/quote.svg" alt="">
                        </div>
                    </div>
                    
                </div>
                <div class="testimonial-single">
                    <div class="testimonial-content">
                        <div class="testimonial-author-img">
                            <img src="/assets/img/testimonial/03.jpg" alt="">
                        </div>
                        <div class="testimonial-author-info">
                            <h4>{{$t('nombre3')}}</h4>
                            <!--<p>Customer</p>-->
                        </div>
                    </div>
                    <div class="testimonial-quote">
                        <span class="testimonial-quote-icon"><i class="flaticon-quote-hand-drawn-symbol"></i></span>
                        <div class="testimonial-rate">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <p>
                            {{$t('testimonio3')}}
                        </p>
                        <div class="testimonial-quote-icon">
                            <img src="/assets/img/icon/quote.svg" alt="">
                        </div>
                    </div>
                    
                </div>
                <div class="testimonial-single">
                    <div class="testimonial-content">
                        <div class="testimonial-author-img">
                            <img src="/assets/img/testimonial/04.jpg" alt="">
                        </div>
                        <div class="testimonial-author-info">
                            <h4>{{$t('nombre4')}}</h4>
                            <!--<p>Customer</p>-->
                        </div>
                    </div>
                    <div class="testimonial-quote">
                        <span class="testimonial-quote-icon"><i class="flaticon-quote-hand-drawn-symbol"></i></span>
                        <div class="testimonial-rate">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <p>
                            {{$t('testimonio4')}}
                        </p>
                        <div class="testimonial-quote-icon">
                            <img src="/assets/img/icon/quote.svg" alt="">
                        </div>
                    </div>
                    
                </div>
                <div class="testimonial-single">
                    <div class="testimonial-content">
                        <div class="testimonial-author-img">
                            <img src="/assets/img/testimonial/05.jpg" alt="">
                        </div>
                        <div class="testimonial-author-info">
                            <h4>{{$t('nombre5')}}</h4>
                            <!--<p>Customer</p>-->
                        </div>
                    </div>
                    <div class="testimonial-quote">
                        <span class="testimonial-quote-icon"><i class="flaticon-quote-hand-drawn-symbol"></i></span>
                        <div class="testimonial-rate">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <p>
                            {{$t('testimonio5')}}
                        </p>
                        <div class="testimonial-quote-icon">
                            <img src="/assets/img/icon/quote.svg" alt="">
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    <!-- testimonial-area end -->

    <!-- partner area -->
    <br>
    <div class="partner-area bg pt-50 pb-50">
        <div class="container">
            <div class="partner-wrapper partner-slider owl-carousel owl-theme">
                <img src="/assets/img/partner/01.png" style="width: 100%" alt="123coche">
                <img src="/assets/img/partner/02.png" style="width: 100%" alt="123coche">
                <img src="/assets/img/partner/04.png" style="width: 100%" alt="urbane">
                <img src="/assets/img/partner/03.png" style="width: 100%" alt="camper">
                
                
                
                <!--<img src="/assets/img/partner/01.png" alt="thumb">
                <img src="/assets/img/partner/02.png" alt="thumb">
                <img src="/assets/img/partner/01.png" alt="thumb">-->
            </div>
        </div>
    </div>
    <!-- partner area end -->

    <!-- blog-area -->
    <!-- <div class="blog-area py-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 mx-auto">
                    <div class="site-heading text-center">
                        <span class="site-title-tagline">Our Blog</span>
                        <h2 class="site-title">Latest News & <span>Blog</span></h2>
                        <div class="heading-divider"></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-4">
                    <div class="blog-item">
                        <div class="blog-item-img">
                            <img src="/assets/img/blog/01.jpg" alt="Thumb">
                        </div>
                        <div class="blog-item-info">
                            <div class="blog-item-meta">
                                <ul>
                                    <li><a href="#"><i class="far fa-user-circle"></i> By Alicia Davis</a></li>
                                    <li><a href="#"><i class="far fa-calendar-alt"></i> March 17, 2023</a></li>
                                </ul>
                            </div>
                            <h4 class="blog-title">
                                <a href="#">There are many variations of the passages available suffered</a>
                            </h4>
                            <a class="theme-btn" href="#">Read More<i class="far fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="blog-item">
                        <div class="blog-item-img">
                            <img src="/assets/img/blog/02.jpg" alt="Thumb">
                        </div>
                        <div class="blog-item-info">
                            <div class="blog-item-meta">
                                <ul>
                                    <li><a href="#"><i class="far fa-user-circle"></i> By Alicia Davis</a></li>
                                    <li><a href="#"><i class="far fa-calendar-alt"></i> March 17, 2023</a></li>
                                </ul>
                            </div>
                            <h4 class="blog-title">
                                <a href="#">There are many variations of the passages available suffered</a>
                            </h4>
                            <a class="theme-btn" href="#">Read More<i class="far fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="blog-item">
                        <div class="blog-item-img">
                            <img src="/assets/img/blog/03.jpg" alt="Thumb">
                        </div>
                        <div class="blog-item-info">
                            <div class="blog-item-meta">
                                <ul>
                                    <li><a href="#"><i class="far fa-user-circle"></i> By Alicia Davis</a></li>
                                    <li><a href="#"><i class="far fa-calendar-alt"></i> March 17, 2023</a></li>
                                </ul>
                            </div>
                            <h4 class="blog-title">
                                <a href="#">There are many variations of the passages available suffered</a>
                            </h4>
                            <a class="theme-btn" href="#">Read More<i class="far fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>-->
    <!-- blog-area end -->
<br>

</main>
</LayoutWeb>
</template>
<script setup>
import flotaHome from './../components/home/flotaHome.vue'
    import { reactive, ref, onMounted } from 'vue'

    const { locations } = useLocation()
    const { sliders } = useHome()
    const { parametros } = useHome()

    onNuxtReady(async () => {
        (function ($) {
            "use strict";

        
            // partner-slider
            $('.partner-slider').owlCarousel({
                loop: true,
                margin: 0,
                nav: false,
                dots: false,
                autoplay: true,
                responsive: {
                    0: {
                        items: 2
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 4
                    }
                }
            });


            // testimonial-slider
            $('.testimonial-slider').owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                dots: true,
                autoplay: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 4 
                    }
                }
            });


            // car-single-slider
            $('.car-single-slider').owlCarousel({
                loop: true,
                margin: 20,
                nav: true,
                dots: false,
                navText: [
                    "<i class='fal fa-long-arrow-left'></i>",
                    "<i class='fal fa-long-arrow-right'></i>"
                ],
                autoplay: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            });


            // // fun fact counter
            // $('.counter').countTo();
            // $('.counter-box').appear(function () {
            //     $('.counter').countTo();
            // }, {
            //     accY: -100
            // });


                /**
                 * TODO donde se usa esto
                 */
            // magnific popup init
            // $(".popup-gallery").magnificPopup({
            //     delegate: '.popup-img',
            //     type: 'image',
            //     gallery: {
            //         enabled: true
            //     },
            // });

            // $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
            //     type: "iframe",
            //     mainClass: "mfp-fade",
            //     removalDelay: 160,
            //     preloader: false,
            //     fixedContentPos: false
            // });

            // // countdown
            // if ($('#countdown').length) {
            //     $('#countdown').countdown('2030/01/30', function (event) {
            //         $(this).html(event.strftime('' + '<div class="row">' + '<div class="col countdown-single">' + '<h2 class="mb-0">%-D</h2>' + '<h5 class="mb-0">Day%!d</h5>' + '</div>' + '<div class="col countdown-single">' + '<h2 class="mb-0">%H</h2>' + '<h5 class="mb-0">Hours</h5>' + '</div>' + '<div class="col countdown-single">' + '<h2 class="mb-0">%M</h2>' + '<h5 class="mb-0">Minutes</h5>' + '</div>' + '<div class="col countdown-single">' + '<h2 class="mb-0">%S</h2>' + '<h5 class="mb-0">Seconds</h5>' + '</div>' + '</div>'));
            //     });
            // }

            /**
             * TODO este se usa?
             */
            // // copywrite date
            // let date = new Date().getFullYear();
            // $("#date").html(date);

            // find-car date picker 
            // if ($('.date-picker').length) {
            //     $(function () {
            //         $(".date-picker").datepicker();
            //     });
            // }

            // // find-car time picker 
            // if ($('.time-picker').length) {
            //     $(function () {
            //         $(".time-picker").timepicker();
            //     });
            // }

            // // profile image btn
            // $(".profile-img-btn").click(function () {
            //     $(".profile-img-file").click(); 
            // });


        })(jQuery);
        // do something with myAnalyticsLibrary
    })

    
// $(document).ready(function() {
 
//  $(".owl-carousel").owlCarousel();

// });
// document.addEventListener('DOMContentLoaded', function () {
//   const bdark = document.querySelector('#bdark');
//   const body = document.querySelector('body');

//   load();

//   bdark.addEventListener('click', function (e) {
//     body.classList.toggle('darkmode');
//     store(body.classList.contains('darkmode'));
//   });

//   function load() {
//     const darkmode = localStorage.getItem('darkmode');

//     if (!darkmode) {
//       store('false');
//     } else if (darkmode === 'true') {
//       body.classList.add('darkmode');
//     }
//   }

//   function store(value) {
//     localStorage.setItem('darkmode', value);
//   }
// });
</script>

  