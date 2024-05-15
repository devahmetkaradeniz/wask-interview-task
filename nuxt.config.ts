// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src',
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
  pages: true,
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-highcharts"
  ],
  googleFonts: {
    families: {
      Inter: {
        wght: [600]
      }
    }
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    configPath:'tailwind.config'
  },
  webpack: {
    optimization: {
      splitChunks: {
        maxSize: 300000
      }
    }
  },
  nitro: {
    compressPublicAssets: true,
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL
    }
  }
})