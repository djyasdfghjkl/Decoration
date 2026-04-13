<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-24 pb-12 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 md:mb-8 leading-tight">
            定义属于您的 <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">理想生活空间</span>
          </h1>
          <p class="text-lg md:text-xl lg:text-2xl text-gray-500 mb-8 md:mb-12 leading-relaxed">
            从灵感到现实，我们提供专业的设计与施工服务，为您打造高品质的家居环境。
          </p>
          <div class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button class="w-full sm:w-auto px-8 md:px-10 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 hover:-translate-y-1">
              开启设计之旅
            </button>
            <button class="w-full sm:w-auto px-8 md:px-10 py-4 bg-white text-gray-700 border-2 border-gray-100 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all">
              查看案例展示
            </button>
          </div>
        </div>
      </div>
      
      <!-- Background Decor -->
      <div class="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-blue-100/30 rounded-full blur-3xl -z-0"></div>
      <div class="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-50/50 rounded-full blur-3xl -z-0"></div>
    </section>

    <!-- Features Section -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div class="group p-6 md:p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 border border-transparent hover:border-blue-50 text-center md:text-left">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors mx-auto md:mx-0">
              <svg class="w-8 h-8 text-blue-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 class="text-xl md:text-2xl font-bold mb-4 text-gray-900">大师级设计</h3>
            <p class="text-gray-500 leading-relaxed">顶尖设计师团队，深度挖掘您的生活习惯，量身定制独特空间。</p>
          </div>

          <div class="group p-6 md:p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 border border-transparent hover:border-blue-50 text-center md:text-left">
            <div class="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors mx-auto md:mx-0">
              <svg class="w-8 h-8 text-indigo-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl md:text-2xl font-bold mb-4 text-gray-900">严苛工艺</h3>
            <p class="text-gray-500 leading-relaxed">数字化工程管理，环保材料认证，365项工艺标准层层把关。</p>
          </div>

          <div class="group p-6 md:p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 border border-transparent hover:border-blue-50 text-center md:text-left">
            <div class="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors mx-auto md:mx-0">
              <svg class="w-8 h-8 text-emerald-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl md:text-2xl font-bold mb-4 text-gray-900">全程无忧</h3>
            <p class="text-gray-500 leading-relaxed">闭口合同零增项，全流程透明监控，十年质保售后保障。</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: '首页 - 至臻装饰 - 专业全屋整装与设计',
  meta: [
    { name: 'description', content: '至臻装饰，专业提供全屋整装、旧房翻新、别墅大宅设计。资深设计团队、环保施工工艺、透明闭口报价，为您打造高品质的理想生活空间。' },
    { name: 'keywords', content: '全屋整装,装修设计,室内装潢,装修公司推荐,装修方案,施工标准,至臻装饰官网' }
  ]
})
</script>
