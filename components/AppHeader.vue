<template>
    <!-- header area -->
<header class="header">
    <!-- top header -->
    <div class="header-top">
        <div class="container">
            <div class="header-top-wrapper">
                <div class="header-top-left">
                    <div class="header-top-contact">
                        <ul>
                            <li>
                                <div class="header-top-contact-icon">
                                    <img src="/assets/img/icon/mail.svg" alt="">
                                </div>
                                <div class="header-top-contact-info">
                                    <a :href="`mailto:${parametros.email}`">{{ parametros.email }}</a>
                                </div>
                            </li>
                            <li>
                                <div class="header-top-contact-icon">
                                    <img src="/assets/img/icon/clock.svg" alt="">
                                </div>
                                <div class="header-top-contact-info">
                                    <a href="#">{{parametros.horario}}</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                
                <div class="header-top-right">
                </div>
                    <div class="header-top-social">
                        <DarkMode/>
                        <a :href="parametros.facebook"><i class="fab fa-facebook-f"></i></a>
                        <a :href="parametros.instagram"><i class="fab fa-instagram"></i></a>
                        <a :href="parametros.twitter"><i class="fab fa-twitter"></i></a>
                        <a :href="parametros.youtube"><i class="fa-brands fa-youtube"></i></a>
                        <a :href="parametros.ubicacion_link"><i class="fa-solid fa-location-dot"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="main-navigation">
        <nav class="navbar navbar-expand-lg">
            <div class="container custom-nav">
                <nuxt-link  class="navbar-brand" to="/">  <img src="/assets/img/logo/logoh.png" alt="logo"></nuxt-link> 
                
                <div class="mobile-menu-right">
                    <div class="header-account header-mobile-account">
                        <div class="dropdown">
                            <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                             <i class="far fa-user-circle"></i>
                            </button>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li> <nuxt-link  class="dropdown-item" to="/profile"><i class="far fa-user"></i> {{$t('perfil')}} </nuxt-link>  </li>
                              <!-- <li><a class="dropdown-item" href="billing"><i class="far fa-clipboard-list"></i> {{$t('facturacion')}}</a></li> -->
                              <!-- <li><a class="dropdown-item" href="setting"><i class="far fa-cog"></i>{{$t('ajustes')}}</a></li> -->
                              <li><a class="dropdown-item" @click.prevent="onLogout" href="#"><i class="far fa-sign-out"></i>{{$t('cerrar_sesion')}}</a></li>
                            </ul>
                          </div>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-mobile-icon"><i class="far fa-bars"></i></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse" id="main_nav">
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <nuxt-link  class="nav-link active" to="/">{{$t('inicio')}} </nuxt-link> 
                        </li>
                        <li class="nav-item"><a class="nav-link" href="#visitanos">
                            {{$t('oficinas')}}</a></li>
                        <li class="nav-item"><a class="nav-link" href="#flota">{{$t('flota')}}</a></li>
                    </ul>
                    <div class="header-nav-right">
                        <div class="header-phone">
                            <div class="header-phone-icon">
                                <img src="/assets/img/icon/phone.svg" alt="">
                            </div>
                            <div class="header-phone-content">
                                <span>{{$t('necesitas_furgo')}}</span>
                                <h5 class="header-phone-number"><a href="tel:+2123654789">{{ parametros.telefono }}</a></h5>
                            </div>
                        </div>
                        <div class="header-btn mt-2">
                            <a href="#iniciatureserva" class="theme-btn"><strong>{{$t('reserva')}}</strong></a>
                        </div>
                        <div class="header-account">
                            <div class="dropdown">
                                <button type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                 <i class="far fa-user-circle"></i>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                  <li> <nuxt-link  class="dropdown-item" to="/profile"><i class="far fa-user"></i> {{$t('perfil')}} </nuxt-link>  </li>
                                  <!-- <li><a class="dropdown-item" href="billing"><i class="far fa-clipboard-list"></i>{{$t('facturacion')}}</a></li>
                                  <li><a class="dropdown-item" href="setting"><i class="far fa-cog"></i> {{$t('ajustes')}}</a></li> -->
                                  <li><a @click.prevent="onLogout" class="dropdown-item" href="#"><i class="far fa-sign-out"></i>{{$t('cerrar_sesion')}}</a></li>
                                </ul>
                              </div>
                        </div>
                        <div class="header-account">
                            <BottonLanguage />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</header>
<!-- header area end -->
</template>

<script setup>
    const { parametros } = useHome()
    
    const auth = useCookie('auth')

    async function onLogout(){
        
        try {

            const {  data, pending, error, refresh } =  await useFetch('/api/auth/logout',{  method: 'post' })
            

            if(data.value){
                auth.value = undefined
                navigateTo('/')
            }else{
                
            }

        } catch (error) {
            console.error('Error en el manejador de eventos:', error);
            return null;
        }
    };

</script>