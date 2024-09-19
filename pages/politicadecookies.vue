<template><LayoutWeb>
    <main class="main">
        <div class="pt-120 pb-120">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="terms-content">
                            <h3>{{$t('politica')}}</h3>
                                <p>{{$t('politica_texto')}}</p>
                        </div>   

                        <div class="terms-content">
                                <h3>{{$t('condiciones')}}</h3>
                                <p>{{$t('condiciones_texto1')}}</p>
                                <p>{{$t('condiciones_texto2')}}</p>
                                <p>{{$t('condiciones_texto3')}} <a href="#"><strong>{{$t('web')}}</strong></a>  {{$t('condiciones_texto4')}}</p>
                                <p>{{$t('condiciones_texto5')}}
                            <a href="privacy.html"><strong> {{$t('aqui')}}</strong></a></p>
                        </div>

                        <div class="terms-content">
                                <h3>{{$t('indice')}}</h3>
                                <ul>
                                    <li class="text"><span class="punto"><strong>{{$t('a')}} </strong></span>{{$t('a_texto')}}</li>
                                    <li class="text"><span class="punto"><strong>{{$t('b')}} </strong></span>{{$t('b_texto')}}</li>
                                    <li class="text"><span class="punto"><strong>{{$t('c')}} </strong></span>{{$t('c_texto')}}</li>
                                    <li class="text"><span class="punto"><strong>{{$t('d')}} </strong></span>{{$t('d_texto')}}</li>
                                    <li class="text"><span class="punto"><strong>{{$t('e')}} </strong></span>{{$t('e_texto')}}</li>
                                    <li class="text"><span class="punto"><strong>{{$t('f')}} </strong></span>{{$t('f_texto')}}</li>
                                    <li class="text"><span class="punto"><strong>{{$t('g')}} </strong></span>{{$t('g_texto')}}</li>
                                </ul>
                            </div>  

                        <div class="terms-content">
                                <h3>{{$t('a')}} {{$t('a_titulo')}}</h3>
                                <p>{{$t('a_texto2')}}</p>
                                <ul>
                                    <li class="text"><span class="punto"><strong>{{$t('a')}} {{$t('a_texto3')}} </strong> </span> {{$t('a_texto3a')}}</li>
                                    <li class="text"><span class="punto"><strong> {{$t('b')}}  {{$t('b_titulo')}} </strong> </span>{{$t('b_texto2')}}</li>
                                    <li class="text"><span class="punto"><strong>{{$t('c')}} {{$t('c_titulo')}} </strong> </span>{{$t('c_texto2')}}</li>
                                    <li class="text"><span class="punto"><strong>{{$t('d')}} {{$t('d_titulo')}} </strong> </span>{{$t('d_texto2')}}</li>
                                </ul>
                                <br>
                                <p>{{$t('a_continucion')}}</p>
                            </div>

                        <div class="table-responsive">
                            <table class="table table-bordered" style="font-size: 14px;">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>{{$t('tabla_tituloa')}}</th>
                                            <th>{{$t('tabla_titulob')}}</th>
                                            <th>{{$t('tabla_tituloc')}}</th>
                                            <th>{{$t('tabla_titulod')}}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowspan="2">{{$t('tabla_columnaa1')}}</td>
                                            <td>
                                                <p>{{$t('tabla_columnab1')}}</p>
                                                <p>{{$t('tabla_columnab2')}}</p>
                                                <p>{{$t('tabla_columnab3')}}</p>
                                                <p>{{$t('tabla_columnab4')}}</p>
                                            </td>
                                            <td>{{$t('tabla_columnac1')}}</td>
                                            <td>{{$t('tabla_columnad1')}}</td>
                                            <td>{{$t('no')}}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>{{$t('tabla_columnab5')}}</p>
                                                <p>{{$t('tabla_columnab6')}}</p>
                                            </td>
                                            <td>{{$t('tabla_columnac2')}}</td>
                                            <td>{{$t('tabla_columnad2')}}</td>
                                            <td>{{$t('no')}}</td>
                                        </tr>
                                        <tr>
                                            <td>{{$t('tabla_columnaa2')}}</td>
                                            <td>
                                                <p>{{$t('tabla_columnab7')}}</p>
                                                <p>{{$t('tabla_columnab8')}}</p>
                                                <p>{{$t('tabla_columnab9')}}</p>
                                            </td>
                                            <td>{{$t('tabla_columnac3')}}</td>
                                            <td>{{$t('tabla_columnad2')}}</td>
                                            <td>{{$t('si')}}</td>
                                        </tr>
                                        <tr>
                                            <td>{{$t('tabla_columnaa3')}}</td>
                                            <td>
                                                <p>{{$t('tabla_columnab10')}}</p>
                                            </td>
                                            <td>{{$t('tabla_columnac4')}}</td>
                                            <td>{{$t('tabla_columnad2')}}</td>
                                            <td>{{$t('si')}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                        </div>
                        <br>
                        <div class="terms-content">
                                <h3>{{$t('b')}} {{$t('b_texto')}}</h3>
                                <p>{{$t('b_parrafoa')}} </p>
                                <p>{{$t('b_parrafob')}}</p>
                                <p>{{$t('b_parrafoc')}}</p>
                        </div>

                        <div class="terms-content">
                                <h3>{{$t('c')}} {{$t('c_texto')}}</h3>
                                <p>{{$t('c_parrafoa')}}</p>
                                <p>{{$t('c_parrafob')}}</p>
                                <p>{{$t('c_parrafoc')}}</p>
                        </div>

                        <div class="terms-content">
                                <h3>{{$t('d')}} {{$t('d_texto')}}</h3>
                                <p>{{$t('d_parrafoa')}} </p>
                                
                                <p>{{$t('d_parrafob')}}</p>
                                <p>{{$t('d_parrafoc')}}</p>
                        </div>

                        <div class="terms-content">
                                <h3>{{$t('e')}} {{$t('e_texto')}}</h3>
                                <p>{{$t('e_parrafoa')}}</p>
                                <p>{{$t('e_parrafob')}}</p>
                                <p>{{$t('e_parrafoc')}}</p>
                        </div>

                        <div class="terms-content">
                                <h3>{{$t('f')}} {{$t('f_texto')}}</h3>
                                <p>{{$t('f_parrafoa')}} 
                                <a href="#">{{$t('correo_info', {email: parametros.email })}}</a></p>
                        </div>

                        <div class="terms-content">
                                <h3>{{$t('g')}} {{$t('g_texto')}}. </h3>
                                <p>{{$t('g_parrafoa')}}</p>
                                
                                <p>{{$t('g_parrafob')}}</p>
                                
                                <p>{{$t('g_parrafoc')}}</p>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </main>
</LayoutWeb>
</template>
<script setup>
    onMounted(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
    const { parametros } = useHome()

</script>