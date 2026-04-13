// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: '至臻装饰 - 专业家居装修设计与施工',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '至臻装饰为您提供全方位的家居装修、室内设计、老房翻新、别墅装修等一站式服务。专业团队，环保材料，透明报价。' },
        { name: 'keywords', content: '装修公司,室内设计,家居装饰,装修设计,老房翻新,别墅装修,装修报价,至臻装饰' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  modules: ['@nuxtjs/tailwindcss']
})
