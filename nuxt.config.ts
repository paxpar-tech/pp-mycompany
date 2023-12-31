import { createResolver, logger } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

// That allows to overwrite these dependencies paths via `.env` for local development
// fov local dev :
// PAXPAR_WIDGETS_PATH=../paxpar-widgets
const envModules = {
  ppw: process?.env?.PAXPAR_WIDGETS_PATH || "@arundo-tech/paxpar-widgets",
}


export default defineNuxtConfig({
  extends: [
    envModules.ppw,
  ],
  devtools: { enabled: true },

  modules: [
    // Remove it if you don't use Plausible analytics
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible'
  ],


  // typescript: {
  //   tsConfig: {
  //     compilerOptions: {
  //       // see https://github.com/nuxt-themes/docus/issues/996
  //   
  //       // Error:  Nuxt Build Error: [vite]: Rollup failed to resolve import "@supabase/auth-ui-shared" from "/home/runner/work/pp-mycompany/pp-mycompany/node_modules/@arundo-tech/paxpar-widgets/pages/login.vue?vue&type=script&setup=true&lang.ts".
  //       verbatimModuleSyntax: false
  //     },
  //   },
  // },

  nitro: {
    prerender: {
      // https://github.com/nuxt-themes/docus/issues/944#issuecomment-1634580369
      //concurrency: 1,
      // https://github.com/nuxt-themes/docus/issues/944#issuecomment-1634798275
      failOnError: false,
    },
  },
  
  vite: {
    vue: {
      script: {
        // opt-in, see https://github.com/vuejs/rfcs/discussions/503
        // and https://github.com/nuxt/nuxt/issues/20881
        defineModel: true,
        // opt-in, see https://github.com/vuejs/rfcs/discussions/503
        // and https://github.com/nuxt/nuxt/issues/20881
        propsDestructure: true
      }
    },

  },


})
