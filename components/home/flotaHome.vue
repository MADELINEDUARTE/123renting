<template>
    <div v-show="vehiclesData.length" class="car-area bg py-120" id="flota">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 mx-auto">
                    <div class="site-heading text-center">
                        <span class="site-title-tagline">{{$t('quieres')}}</span>
                        <h2 class="site-title">{{$t('nuestra')}} <span>{{$t('flota')}}</span></h2>
                        <div class="heading-divider"></div>
                    </div>
                </div>
            </div>
            
            <div class="row">
                
                <div v-for="(item, key) in vehiclesData" :key="`vehicle-${key}`" class="col-lg-6 col-xl-4" >
                    <div class="car-item">
                        <div class="car-content">
                            <div class="car-top">
                                <h4><a class="letrac" href="#">{{ item.model_details.name }} <br>
                                <h6 class="modelo">{{ item.model_details.model }}</h6></a></h4>
                                <!-- <br> -->
                        
                                <!--<span><i class="fas fa-star"></i> 5.0</span>-->
                            </div>

                            <div class="car-img p-3">
                                <img :src="item.model_details.images[0]" alt="">
                            </div>
                        
                            <ul class="car-list">
                                <!-- <li><img src="/assets/img/car/euro.png" class="far fa-car">{{$t('precio_d')}}&nbsp;&nbsp;</li> -->
                                <li><img src="/assets/img/car/pasajeros.png"  class="far fa-user-tie">  {{ item.model_details.max_people }} {{$t('personas')}}&nbsp;</li>
                                <li><img src="/assets/img/car/puerta.png" class="far fa-gas-pump"> {{ item.model_details.doors }} {{$t('puertas')}}</li>
                                <!-- <li><i class="far fa-road"></i>10.15km / 1-litre</li>
                                <li><i class="far fa-steering-wheel"></i>Automatic</li> -->
                            </ul>
                            <div class="car-footer d-flex justify-content-center">
                                <!--<span class="car-price">$390 <sub>/ month</sub></span>
                                <a href="#" class="car-favorite-btn"><i class="far fa-heart"></i></a>-->
                                <a  v-for="(price, p) in item.pricelists" :key="`price-${p}-vehicle-${key}`" href="#" class="theme-btn">
                                    <strong>{{ price.fee_on_pricelist_type.without_tax }}{{ vehiclesCurrency.symbol }} / {{ $t(price.fee_on_pricelist_type.type) }}</strong>
                                </a>
                                <!-- <a href="#" class="theme-btn2"><strong>{{$t('medio')}}</strong></a> -->
                                <!-- <a href="#" class="theme-btn3"><strong>{{$t('primium')}}</strong></a> -->
                            </div>
                        </div>
                    </div>
                </div> 

                <!-- <div class="col-lg-6 col-xl-4">
                    <div class="car-item">
                        <div class="car-content">
                            <div class="car-top">
                                <h4><a class="letrac" href="#">{{$t('nombre_coche1')}} <br>
                                <h6 class="modelo">{{$t('nombre_coche2')}}</h6></a></h4>
                                <br>
                            </div>
                        <div class="car-img">
                            <img src="/assets/img/car/01.png" alt="">
                        </div>
                        
                            <ul class="car-list">
                                <li><img src="/assets/img/car/euro.png" class="far fa-car">{{$t('precio_d')}}&nbsp;&nbsp;</li>
                                <li><img src="/assets/img/car/pasajeros.png"  class="far fa-user-tie">{{$t('personas')}}&nbsp;</li>
                                <li><img src="/assets/img/car/puerta.png" class="far fa-gas-pump">&nbsp;&nbsp;&nbsp;{{$t('puertas')}}&nbsp;&nbsp;</li>
                               <li><i class="far fa-road"></i>10.15km / 1-litre</li>
                                <li><i class="far fa-steering-wheel"></i>Automatic</li>
                            </ul>
                            <div class="car-footer">
                                <span class="car-price">$390 <sub>/ month</sub></span>
                                <a href="#" class="car-favorite-btn"><i class="far fa-heart"></i></a>
                                <a href="#" class="theme-btn1"><strong>{{$t('basic')}}</strong></a>
                                <a href="#" class="theme-btn2"><strong>{{$t('medio')}}</strong></a>
                                <a href="#" class="theme-btn3"><strong>{{$t('primium')}}</strong></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-xl-4">
                    <div class="car-item">
                        <div class="car-content">
                            <div class="car-top">
                                <h4><a class="letrac" href="#">{{$t('nombre_coche1')}} <br>
                                <h6 class="modelo">{{$t('nombre_coche2')}}</h6></a></h4>
                                <br>
                        
                                <span><i class="fas fa-star"></i> 5.0</span>
                            </div>
                        <div class="car-img">
                            <img src="/assets/img/car/01.png" alt="">
                        </div>
                        
                            <ul class="car-list">
                                <li><img src="/assets/img/car/euro.png" class="far fa-car">{{$t('precio_d')}}&nbsp;&nbsp;</li>
                                <li><img src="/assets/img/car/pasajeros.png"  class="far fa-user-tie">{{$t('personas')}}&nbsp;</li>
                                <li><img src="/assets/img/car/puerta.png" class="far fa-gas-pump">&nbsp;&nbsp;&nbsp;{{$t('puertas')}}&nbsp;&nbsp;</li>
                               <li><i class="far fa-road"></i>10.15km / 1-litre</li>
                                <li><i class="far fa-steering-wheel"></i>Automatic</li>
                            </ul>
                            <div class="car-footer">
                                <span class="car-price">$390 <sub>/ month</sub></span>
                                <a href="#" class="car-favorite-btn"><i class="far fa-heart"></i></a>
                                <a href="#" class="theme-btn1"><strong>{{$t('basic')}}</strong></a>
                                <a href="#" class="theme-btn2"><strong>{{$t('medio')}}</strong></a>
                                <a href="#" class="theme-btn3"><strong>{{$t('primium')}}</strong></a>
                            </div>
                        </div>
                    </div>
                </div> -->

            <!-- <div class="text-center mt-4">
                <a href="#" class="theme-btn"> <strong>{{$t('ver_furgos')}}</strong>  <i class="far fa-arrow-rotate-right"></i> </a>
            </div> -->
        </div>
    </div>
    </div>
</template>

<script setup>

    const { vehicles } = useVehicle()

    const vehiclesData = computed(()=>{
        return vehicles.data.result.vehicles
    })

    const vehiclesCurrency = computed(()=>{
        return vehicles.data.result.common.currency
    })

</script>