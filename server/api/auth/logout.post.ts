
async function Logout(event: any): Promise<any | null> {

    const config = useRuntimeConfig(event);

    const cookies = parseCookies(event)

    const tokenInfo = JSON.parse(cookies.tokenInfoAction);
    const tokenLogin = cookies.auth;
    
    const body = await readBody(event)

    const response = await $fetch(`${config.urlApiAction}/api/logout`,{
      headers: {
        'x-api-key': tokenInfo.token,
        'x-region-id': config.regionAction,
        'Accept': 'application/json',
        'Authorization':'Bearer '+tokenLogin
      },
      body: body,
      method: 'POST',
    });

    // console.log('response',response)
    return response
}

export default defineEventHandler(async (event) => {
    const logout = await Logout(event);
    return logout;
});