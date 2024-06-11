
async function getAction(event: any): Promise<any | null> {

    const config = useRuntimeConfig(event);

    const cookies = parseCookies(event)

    const tokenInfo = JSON.parse(cookies.tokenInfoAction);
    
    const body = await readBody(event)

    const response = await $fetch(`${config.urlApiAction}/api/password/reset`,{
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
        const response = await getAction(event);
        return response;
});