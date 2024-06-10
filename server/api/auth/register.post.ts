
async function getRegister(event: any): Promise<any | null> {

    const config = useRuntimeConfig(event);

    const cookies = parseCookies(event)

    const tokenInfo = JSON.parse(cookies.tokenInfoAction);
    
    const body = await readBody(event)

    const response = await $fetch(`${config.urlApiAction}/api/register`,{
      headers: {
        'x-api-key': tokenInfo.token,
        'x-region-id': config.regionAction
        // 'Accept': 'application/json'
      },
      body: body,
      method: 'POST',
    });

    // console.log('response',response)
    return response
}

export default defineEventHandler(async (event) => {
    // try {
       
        // console.log('LLEGA')
        const register = await getRegister(event);

        // console.log({ data, error } )
        // if (login) {
        //     // console.log('Token actualizado o recuperado:', tokenInfo);
        // } else {
        //     console.error('No se pudo obtener el token.');
        // }
        return register;
    // } catch (error) {
    //     console.error('Error en el manejador de eventos:', error);
    //     return null;
    // }
});