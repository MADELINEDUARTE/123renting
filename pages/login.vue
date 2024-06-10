<template>
    <LayoutWeb>
        <main class="main">
            <div class="login-area py-120">
                <div class="container">
                    <div class="find-car-form col-12 col-sm-6 mx-auto">
                        <div class="d-flex justify-content-between">
                            <div class="d-flex justify-center flex-column">
                                <h4 class="find-car-title m-0">Ingrese a su cuenta</h4>
                            </div>
                        </div>
                        <form action="#" @submit.prevent="onSubmit">
                            <div class="row">
                                <div v-if="messageError" class="col-12 my-4">
                                    <div class="card bg-danger">
                                        <div class="card-body">
                                            <p>{{ messageError }}</p>
                                            <ul class="list">
                                                <li v-for="(error, key) in errors" :key="`error${key}`" ><p> <b>{{ key }}</b> : <span v-for="(e, k) in error" :key="`er${key}${k}`" >{{ e }}</span> </p></li>
                                               
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group mb-4 col-12">
                                    <label>Email Address</label>
                                    <input type="email" v-model="email" class="form-control" placeholder="Your Email" autocomplete="off" style="background-repeat: no-repeat !important; background-position: calc(100% - 3px) center !important; background-size: 14px !important; cursor: text;">
                                </div>
                                <div class="form-group mb-4 col-12">
                                    <label>Password</label>
                                    <input type="password" v-model="password" class="form-control" placeholder="Your Password" autocomplete="off" style="background-repeat: no-repeat !important; background-position: calc(100% - 3px) center !important; background-size: 14px !important;">
                                </div>
                                <div class="d-flex mb-4 justify-content-between mb-4 col-12">
                                    <!-- <div class="form-check">
                                        <input class="form-check-input" v-model="remember" type="checkbox" value="" id="remember">
                                        <label class="form-check-label" for="remember">Remember Me</label>
                                    </div> -->
                                    <a href="forgot-password.html" class="forgot-pass">Forgot Password?</a>
                                </div>
                                <div class="d-flex align-items-center col-12">
                                    <button :disabled="load" type="submit" class="theme-btn btn"><i class="far fa-sign-in"></i> Login</button>
                                </div>
                                <div class="d-flex justify-content-center my-4 align-items-center col-12">
                                    <p>
                                       Aun no tienes cuenta?  
                                    </p>
                                    <nuxt-link  class="nav-link mx-2 active" to="/register">  Registrate </nuxt-link> 
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </LayoutWeb>
</template>
<script setup>
    const { parametros } = useHome()

    const email = ref('')
    const password = ref('')
    const remember = ref(false)
    const loginInfo = useCookie('loginInfo')
    const auth = useCookie('auth')
    const messageError = ref('')
    const errors = ref([])
    const submit = ref()
    const load = ref(false)
    const route = useRoute()
    const router = useRouter()

    const onSubmit = (event) => {
        if(remember.value){
            loginInfo.value = {
                email: email.value,
                // password: password.value,
                // remember: remember.value,
            }
        }

        Login()
    }
    onMounted(()=>{
        messageError.value = ''
        errors.value = []

        if(loginInfo.value){
            email.value = loginInfo.value.email
            // password.value = loginInfo.value.password
            // remember.value = loginInfo.value.remember
        }

    })

    async function Login(){
        
        try {
            load.value = true
            const {  data, pending, error, refresh } =  await useFetch('/api/auth/login',{  method: 'post',body:{
                email: email.value,
                password: password.value
            } })
            load.value = false

            if(data.value){
                // console.log('data.value.token',data.value.access_token)
                auth.value = data.value.access_token
                errors.value = []
                messageError.value = ''
                loginInfo.value = {
                    email: email.value,
                }
                navigateTo('/profile')
            }else{
                const errorData = error.value.data
                messageError.value = errorData.data.message
                if(errorData.data.errors){
                    errors.value = errorData.data.errors
                }
            }

        } catch (error) {
            console.error('Error en el manejador de eventos:', error);
            return null;
        }
    };
</script>