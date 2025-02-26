// ~/plugins/gtm.client.ts
export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.hooks.hook('vue:setup', () => {
    const {
      public: { gtmContainerId1, gtmContainerId2, namePage },
    } = useRuntimeConfig()

    const gtmContainers = [gtmContainerId1, gtmContainerId2].filter(Boolean);

    gtmContainers.forEach(gtmContainerId => {
      if (!gtmContainerId) return; // Validación para gtmContainerId vacío

      useHead({
        script: [
          {
            src: `https://www.googletagmanager.com/gtag/js?id=${gtmContainerId}`,
            async: true,
          },
          {
            children: `
              window.dataLayer = window.dataLayer || [];
              
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtmContainerId}', {
                'page_type': '${namePage}'
              });
            `,
            type: 'text/javascript',
            // charset: 'utf-8',
          },
        ],
        noscript: [
            {
                children: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmContainerId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                tagPosition: 'bodyOpen',
            },
        ],
      })
    });
  })
})