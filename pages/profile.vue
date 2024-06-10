<template>
    <!-- preloader -->
    <div class="preloader">
        <div class="loader-ripple">
            <div></div>
            <div></div>
        </div>
    </div>
    <LayoutWeb>
        <main class="main">
        <div class="user-profile py-120">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="user-profile-sidebar">
                            <div class="user-profile-sidebar-top">
                                <div class="user-profile-img">
                                    <img src="/assets/img/user/avatar.png" alt="">
                                    <!-- <button type="button" class="profile-img-btn"><i class="far fa-camera"></i></button> -->
                                    <input type="file" class="profile-img-file">
                                </div>
                                <!-- <p>{{ clientInfo }}</p> -->
                                    <h4>{{ client.data.name }}</h4>
                                    <p>{{ client.data.email }}</p>
                                    <p style="font-size: 10px">***** {{ client.data.code.slice(-5) }}</p>
                            </div>
                                    <ul class="user-profile-sidebar-list">
                                        <li><nuxt-link to="profile" class="active"><i class="far fa-user"></i>{{$t('perfil')}}</nuxt-link>
                                        </li>
                                        <!-- <li><nuxt-link to="billing"><i class="far fa-draw-circle"></i> {{$t('facturacion')}}</nuxt-link></li> -->
                                        <!-- <li><nuxt-link to="setting"><i class="far fa-cog"></i>{{$t('ajustes')}}</nuxt-link></li> -->
                                        <li><a @click.prevent="onLogout" href="#"><i class="far fa-sign-out"></i> {{$t('cerrar_sesion')}}</a></li>
                                    </ul>
                        </div>
                    </div>
                            <div class="col-lg-9">
                                <div class="user-profile-wrapper">
                                    <div class="user-profile-card">
                                        <h4 class="user-profile-card-title">{{$t('info_perfil')}}</h4>
                                            <div class="col-lg-6">
                                                <div class="profile-info-list">
                                                <ul>
                                                    <li>{{$t('nombre_completo')}} <span>{{ client.data.name }}</span></li>
                                                    <li>{{$t('c_correo')}} <span>{{ client.data.email }}</span></li>
                                                    <li>{{$t('telefono_usuario')}} <span>{{ client.data.telephone }}</span></li>
                                                    <!-- <li>{{$t('direccion_usuario1')}} <span>{{ client.data.address }}</span></li> -->
                                                    <!-- <li>{{$t('fecha_de_ingreso')}} <span>{{$t('fecha_de_ingresonro')}}</span></li> -->
                                                </ul>
                                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </main>
    </LayoutWeb>
</template>
<script setup >
    definePageMeta({
        middleware: ["auth"]
        // or middleware: 'auth'
    })
    const loginInfo = useCookie('loginInfo')

    const { client  } = useClient()
    

    async function onSearchClient()
    {
        let query = {}

        if(loginInfo.value.email){
            query.email = loginInfo.value.email
        }

        const {  data, pending, error, refresh } =  await useFetch('/api/profile/client', {  
            query: query
        })

        if(data.value && data.value.status){
            client.setClient(data.value.result[0])
        }
    }

    onMounted(()=>{
        onSearchClient()
    })

    const auth = useCookie('auth')
    async function onLogout(){
        try {
            const {  data, pending, error, refresh } =  await useFetch('/api/auth/logout',{  method: 'post' })
            if(data.value){
                auth.value = undefined
                navigateTo('/')
            }
        } catch (error) {
            console.error('Error en el manejador de eventos:', error);
            return null;
        }
    };
</script>
