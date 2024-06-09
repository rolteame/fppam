// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/css/main.css","animate.css/animate.min.css"],
  modules: ["@nuxtjs/google-fonts", "@nuxtjs/tailwindcss", "shadcn-nuxt"],
  googleFonts: {
    families: {
      'Baloo Da 2': [400],
      'Archivo Narrow': [400, 700],
    }
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
})