<template>
    <LayoutWeb>
        <main class="main">
            <div class="login-area py-120">
                <div class="container">
                    <div class="find-car-form col-12 col-sm-6 mx-auto">
                        <div class="d-flex justify-content-between">
                            <div class="d-flex justify-center flex-column">
                                <h4 class="find-car-title m-0">Crear una cuenta</h4>
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
                                    <label>Name</label>
                                    <input type="text" v-model="dataForm.name" class="form-control" placeholder="Your Name" autocomplete="off" style="background-repeat: no-repeat !important; background-position: calc(100% - 3px) center !important; background-size: 14px !important; cursor: text;">
                                </div>
                                <div class="form-group mb-4 col-12">
                                    <label>Email Address</label>
                                    <input type="email" v-model="dataForm.email" class="form-control" placeholder="Your Email" autocomplete="off" style="background-repeat: no-repeat !important; background-position: calc(100% - 3px) center !important; background-size: 14px !important; cursor: text;">
                                </div>
                                <div class="form-group mb-4 col-12">
                                    <label>Password</label>
                                    <input type="password" v-model="dataForm.password" class="form-control" placeholder="Your Password" autocomplete="off" style="background-repeat: no-repeat !important; background-position: calc(100% - 3px) center !important; background-size: 14px !important;">
                                </div>
                                <div class="form-group mb-4 col-12">
                                    <label>Password confirmation</label>
                                    <input type="password" v-model="dataForm.password_confirmation" class="form-control" placeholder="Password confirmation" autocomplete="off" style="background-repeat: no-repeat !important; background-position: calc(100% - 3px) center !important; background-size: 14px !important;">
                                </div>
                                <div class="d-flex align-items-center col-12">
                                    <button type="submit" class="theme-btn"><i class="far fa-sign-in"></i> Registrar</button>
                                </div>
                                <div class="d-flex justify-content-center my-4 align-items-center col-12">
                                    <p>
                                       Ya tienes cuenta?  
                                    </p>
                                    <nuxt-link  class="nav-link mx-2 active" to="/login">  Ingresa </nuxt-link> 
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
    const auth = useCookie('auth')
    const load = ref(false)
    const messageError = ref('')
    const errors = ref([])
    const loginInfo = useCookie('loginInfo')

    const dataForm = reactive({
        email: "",
        password:"",
        password_confirmation:"",
        name: "",
        id_region: 1
    })
    
    const onSubmit = async (event) => {
        load.value = true
        const {  data, pending, error, refresh } =  await useFetch('/api/auth/register',{  method: 'post', body: dataForm })
        load.value = false  
        
            if(data.value){
                // console.log('data.value.token',data.value.access_token)
                auth.value = data.value.access_token
                errors.value = []
                messageError.value = ''
                loginInfo.value = {
                    email: dataForm.email,
                }
                navigateTo('/profile')
            }else{
                const errorData = error.value.data
                messageError.value = errorData.data.message
                if(errorData.data.errors){
                    errors.value = errorData.data.errors
                }
            }
    }

    onMounted(()=>{
       
    })
</script>