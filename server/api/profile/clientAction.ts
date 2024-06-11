interface TokenInfo {
    token: string;
    expires_at: string;
    name: string;
    level: number;
}

async function searhClient(event:any)
{
    const config = useRuntimeConfig(event);
    const storedTokenInfo = getCookie(event, 'tokenInfoAction');

    if(!storedTokenInfo){
        return null
    }

    const tokenInfo: TokenInfo = JSON.parse(storedTokenInfo);
    const cookies = parseCookies(event)
    const tokenLogin = cookies.auth;
    const query = getQuery(event)
    
    const response = await $fetch(`${config.urlApiAction}/api/client/search`,{
        headers: {
            'x-api-key': tokenInfo.token,
            'x-region-id': config.regionAction,
            'Accept': 'application/json',
            'Authorization':'Bearer '+tokenLogin
        },
        query: {
            name: query.name || '',
            email: query.email || '',
            per_page: query.per_page || 10,
            page: query.page || 1,
            idioma: query.lang || config.idiomaAction,
            idregion: config.regionAction
        }
      });
    
   

    return response
}

export default defineEventHandler(async (event) => {
    const client = await searhClient(event);
    return client;
});