interface TokenInfo {
    expires_at: string;
    token: string;
    message?: string;
}

interface Response {
    status: boolean;
    result: TokenInfo;
}

async function getToken(event: any): Promise<TokenInfo | null> {
    try {
        const storedTokenInfo = getCookie(event, 'tokenInfoAction');

        if (storedTokenInfo) {
            const tokenInfo: TokenInfo = JSON.parse(storedTokenInfo);
            const expirationDate = new Date(tokenInfo.expires_at);
            const currentTime = new Date();
            if (expirationDate > currentTime) {
                return tokenInfo;
            }
        }

        const config = useRuntimeConfig(event);

        const response = await $fetch<Response>(`${config.urlApiAction}/api/generate_token`,{
            method: 'POST',
            body: {
                'clave_token': config.secretTokenAction
            }
          });

        if (response.status) {
            setCookie(event, 'tokenInfoAction', JSON.stringify(response.result));
            return response.result;
        }
        return null;
    } catch (error) {
        console.error('Error al obtener el tokenAction:', error);
        return null;
    }
}

export default defineEventHandler(async (event) => {
    try {
        const tokenInfo = await getToken(event);
        if (tokenInfo) {
            // console.log('Token actualizado o recuperado:', tokenInfo);
        } else {
            console.error('No se pudo obtener el token.');
        }
        return tokenInfo;
    } catch (error) {
        console.error('Error en el manejador de eventos:', error);
        return null;
    }
});
