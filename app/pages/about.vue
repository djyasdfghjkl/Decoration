<template>
  <div class="pt-20">
    <!-- About Hero Section -->
    <section class="relative py-20 lg:py-32 bg-gray-900 text-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-3xl">
          <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            用匠心筑家，<br/>
            <span class="text-blue-500">成就每一份对生活的向往</span>
          </h1>
          <p class="text-xl text-gray-400 leading-relaxed mb-8">
            至臻装饰成立于 2010 年，我们始终秉承“至臻品质，诚信装饰”的服务理念，致力于为每一位客户打造最舒适的居住空间。
          </p>
        </div>
      </div>
      <!-- Background Abstract Shape -->
      <div class="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 translate-x-1/4"></div>
    </section>

    <!-- Company Stats -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">15+</div>
            <div class="text-gray-500 font-medium">行业深耕年限</div>
          </div>
          <div>
            <div class="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">5000+</div>
            <div class="text-gray-500 font-medium">交付理想家园</div>
          </div>
          <div>
            <div class="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">100+</div>
            <div class="text-gray-500 font-medium">精英设计团队</div>
          </div>
          <div>
            <div class="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">100%</div>
            <div class="text-gray-500 font-medium">环保材料认证</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Values -->
    <section class="py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">我们的核心价值观</h2>
          <div class="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
            <div class="text-blue-600 mb-6">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">诚实守信</h3>
            <p class="text-gray-500 leading-relaxed">报价透明，拒绝隐形消费。我们承诺所见即所得，合同约定即为最终交付。</p>
          </div>
          <div class="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
            <div class="text-blue-600 mb-6">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">追求卓越</h3>
            <p class="text-gray-500 leading-relaxed">不断探索新的设计理念与施工工艺，在细节中体现品质，在专业中彰显价值。</p>
          </div>
          <div class="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
            <div class="text-blue-600 mb-6">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">以人为本</h3>
            <p class="text-gray-500 leading-relaxed">关注居住者的生活体验，从环保、功能到美学，全方位呵护您的家庭生活。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Join Us CTA -->
    <section class="py-20 bg-blue-600 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl lg:text-5xl font-bold mb-8">准备好开始您的装修之旅了吗？</h2>
        <p class="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          联系我们的金牌顾问，免费获取初步设计方案和详细报价单。
        </p>
        <button class="px-12 py-5 bg-white text-blue-600 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors shadow-xl">
          免费预约设计
        </button>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: '关于我们 - 至臻装饰',
  meta: [
    { name: 'description', content: '了解至臻装饰的发展历程、核心价值观及专业团队' }
  ]
})
</script>
