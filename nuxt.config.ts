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
        { name: 'description', content: '至臻装饰作为行业领先的一站式家居装修服务平台，致力于提供高品质的室内设计与施工解决方案。我们专注于别墅空间规划、老房翻新改造、全屋定制及软装搭配。拥有一支资深设计师和精湛施工团队，坚持使用环保材料，严控工艺标准，实现闭口合同零增项。从量房、设计、选材到验收，为您提供全透明、管家式的装修体验。' },
        { name: 'keywords', content: '装修公司,装饰公司,室内设计,装修设计,家居装饰,老房翻新,别墅装修,装修报价,装修预算,全屋定制,软装设计,现代简约风格,新中式装修,北欧风设计,轻奢装修,环保装修,一站式装修,装修避坑,十大装修品牌,靠谱装修公司,设计师一对一,免费量房,二手房改造,商业空间设计,办公室装修,店铺装修' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap'],
  site: {
    url: 'https://djyasdfghjkl.github.io', // 修正：url 中不应包含路径
    name: '至臻装饰'
  },
  sitemap: {
    // sitemap.xml 的配置选项
    exclude: [
      '/secret',
      '/admin/**'
    ],
  }
})
