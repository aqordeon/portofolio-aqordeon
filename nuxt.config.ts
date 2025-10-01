// https://nuxt.com/docs/api/configuration/nuxt-config
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
const Noir = definePreset(Aura, {
    semantic: {
        // primary: {
        //     50: '{blue.50}',
        //     100: '{blue.100}',
        //     200: '{blue.200}',
        //     300: '{blue.300}',
        //     400: '{blue.400}',
        //     500: '{blue.500}',
        //     600: '{blue.600}',
        //     700: '{blue.700}',
        //     800: '{blue.800}',
        //     900: '{blue.900}',
        //     950: '{blue.950}'
        // },
        colorScheme: {
            light: {
                surface: {
                    0: '#ffffff',
                    50: '{gray.50}',
                    100: '{gray.100}',
                    200: '{gray.200}',
                    300: '{gray.300}',
                    400: '{gray.400}',
                    500: '{gray.500}',
                    600: '{gray.600}',
                    700: '{gray.700}',
                    800: '{gray.800}',
                    900: '{gray.900}',
                    950: '{gray.950}',
                },
                // primary: {
                //     color: '{blue.950}',
                //     inverseColor: '#ffff00',
                //     hoverColor: '{blue.900}',
                //     activeColor: '{blue.800}'
                // },
                // highlight: {
                //     background: '{blue.950}',
                //     focusBackground: '{blue.700}',
                //     color: '#ffff00',
                //     focusColor: '#ffff00'
                // }
            },
        }
    }
});

export default defineNuxtConfig({
    app: {
        head: {
            title: 'Toko Tangan Kanan', // default fallback title
            htmlAttrs: {
                lang: 'id',
            },
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            ]
        }
    },
    css: ['~/assets/stylesheet/index.scss'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        '@zadigetvoltaire/nuxt-gtm',
        '@primevue/nuxt-module'
    ],
    primevue: {
        options: {
            theme: {
                preset: Noir,
                options: {
                    prefix: 'p',
                    // darkModeSelector: 'system',
                    darkModeSelector: false,
                    cssLayer: false
                }
            }
        }
    },
    ssr: false,
    gtm: {
        id: 'GTM-KHGJZ7SZ', // Your GTM single container ID, array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy'] or array of objects [{id: 'GTM-xxxxxx', queryParams: { gtm_auth: 'abc123', gtm_preview: 'env-4', gtm_cookies_win: 'x'}}, {id: 'GTM-yyyyyy', queryParams: {gtm_auth: 'abc234', gtm_preview: 'env-5', gtm_cookies_win: 'x'}}], // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy']
        queryParams: {
            // Add URL query string when loading gtm.js with GTM ID (required when using custom environments)
            gtm_auth: 'rnTLronCY0qHoPUNaNbVog',
            gtm_preview: 'env-6',
            gtm_cookies_win: 'x',
        },
        defer: false, // Script can be set to `defer` to speed up page load at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible). Defaults to false, so the script is loaded `async` by default
        compatibility: false, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
        nonce: '2726c7f26c', // Will add `nonce` to the script tag
        enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
        debug: true, // Whether or not display console logs debugs (optional)
        loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
        enableRouterSync: true, // Pass the router instance of your app to automatically sync with router (optional)
        ignoredViews: ['homepage'], // Don't trigger events for specified router names (optional)
        trackOnNextTick: false, // Whether or not call trackView in Vue.nextTick
        devtools: true, // (optional)
    }
})
