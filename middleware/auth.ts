export default defineNuxtRouteMiddleware((to, from) => {
    // if (to.params.id === '1') {
    //   return abortNavigation()
    // }
    const auth = useCookie('auth')
    console.log('auth',auth.value)
    if(auth.value == undefined){
        return navigateTo('/login')
    }

    // console.log('auth',auth)
    // In a real app you would probably not redirect every route to `/`
    // however it is important to check `to.path` before redirecting or you
    // might get an infinite redirect loop
    // if (to.path !== '/') {
    //   return navigateTo('/')
    // }
  })
  