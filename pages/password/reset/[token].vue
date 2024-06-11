<template>
    <LayoutWeb>
        <main class="main">
            <div class="login-area py-120">
                <div class="container">
                    <div class="find-car-form col-12 col-sm-6 mx-auto">
                        <div class="d-flex justify-content-between mb-2">
                            <div class="d-flex justify-center flex-column">
                                <h4 class="find-car-title m-0">{{ $t('recuperarcontrasena') }}</h4>
                            </div>
                        </div>
                        <form action="#" @submit.prevent="onSubmit">
                            <div class="row">
                                <div v-if="messageError" class="col-12 my-4">
                                    <div class="card bg-danger">
                                        <div class="card-body">
                                            <p>{{ $t(messageError) }}</p>
                                            <ul class="list">
                                                <li v-for="(error, key) in errors" :key="`error${key}`" ><p> <b>{{ $t(key) }}</b> : <span v-for="(e, k) in error" :key="`er${key}${k}`" >{{ e }}</span> </p></li>
                                               
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="messageSuccess" class="col-12 my-4">
                                    <div class="card bg-success">
                                        <div class="card-body">
                                            <p>{{ $t(messageSuccess) }}</p>
                                           
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group mb-4 col-12">
                                    <label>{{ $t('Password') }}</label>
                                    <input type="password" v-model="dataForm.password" class="form-control" :placeholder="$t('YourPassword')" autocomplete="off" style="background-repeat: no-repeat !important; background-position: calc(100% - 3px) center !important; background-size: 14px !important;">
                                </div>
                                <div class="form-group mb-4 col-12">
                                    <label>{{ $t('Passwordconfirmation') }}</label>
                                    <input type="password" v-model="dataForm.password_confirmation" class="form-control" :placeholder="$t('Passwordconfirmation')" autocomplete="off" style="background-repeat: no-repeat !important; background-position: calc(100% - 3px) center !important; background-size: 14px !important;">
                                </div>
                                
                                
                                <div class="d-flex align-items-center col-12">
                                    <button :disabled="load" type="submit" class="theme-btn btn"><i class="far fa-sign-in"></i> {{ $t('Enviar') }}</button>
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
    const messageSuccess = ref('')
    
    const errors = ref([])
    const submit = ref()
    const load = ref(false)
    const route = useRoute()
    const router = useRouter()

    const dataForm = reactive({
        email: "",
        token: "",
        password:"",
        password_confirmation:"",
    })

    const onSubmit = (event) => {
        if(remember.value){
            loginInfo.value = {
                email: email.value,
                // password: password.value,
                // remember: remember.value,
            }
        }

        onApiSend()
    }
    onMounted(()=>{
        messageError.value = ''
        errors.value = []

        dataForm.email = route.query.email
        dataForm.token = route.params.token

    })

    async function onApiSend(){
        
        try {
            load.value = true
            const {  data, pending, error, refresh } =  await useFetch('/api/password/reset',{  method: 'post', body: dataForm })
            load.value = false

            if(data.value){

                messageSuccess.value = data.value.message
                setTimeout(()=>{
                    navigateTo('/login')
                },1000)
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