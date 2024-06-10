interface TokenInfo {
    token: string;
    expires_at: string;
    name: string;
    level: number;
}

async function searhClient(event:any)
{
    const config = useRuntimeConfig(event);
    const storedTokenInfo = getCookie(event, 'tokenInfo');

    if(!storedTokenInfo){
        return null
    }

    const tokenInfo: TokenInfo = JSON.parse(storedTokenInfo);

    // const bodyData = await readBody(event)

    const query = getQuery(event)
    
    const response = await $fetch(`${config.urlApi}/api/partner/customer/search`,{
        headers: {
         'X-PartnerToken': tokenInfo.token,
        },
        query: {
            name: query.name || '',
            email: 'yosec.cervino@gmail.com' || '',
            per_page: query.per_page || 10,
            page: query.page || 1
        }
      });

    return response
}

export default defineEventHandler(async (event) => {
    const logout = await searhClient(event);
    return logout;
});