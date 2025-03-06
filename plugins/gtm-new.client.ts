export default defineNuxtPlugin(nuxtApp => {
  const gtmContainerId = 'GTM-WJVDCBQB'; // Reemplaza con tu ID de contenedor de GTM
  const {
    public: { gtmContainerId3 },
  } = useRuntimeConfig()

  // Insertar el script de Google Tag Manager en el <head>
  useHead({
    script: [
      {
        children: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmContainerId3}');
        `,
        type: 'text/javascript',
      },
    ],
  });

  // Insertar el noscript de Google Tag Manager justo después de la etiqueta de apertura <body>
  nuxtApp.hooks.hook('app:mounted', () => {
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=${gtmContainerId3}"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `;
    document.body.insertBefore(noscript, document.body.firstChild);
  });
});