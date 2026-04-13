<template>
  <div class="pt-20">
    <!-- Hero Section -->
    <section class="bg-gray-50 py-16 md:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
          设计案例
        </h1>
        <p class="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
          探索我们精心打造的理想家居，每一个案例都是对品质生活的独特诠释。
        </p>
      </div>
    </section>

    <!-- Filter (Mock) -->
    <section class="py-8 border-b border-gray-100 sticky top-20 bg-white/90 backdrop-blur-sm z-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
        <div class="flex space-x-4 md:justify-center whitespace-nowrap">
          <button class="px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">全部风格</button>
          <button class="px-6 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-200">现代简约</button>
          <button class="px-6 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-200">新中式</button>
          <button class="px-6 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-200">北欧风</button>
          <button class="px-6 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium hover:bg-gray-200">轻奢美式</button>
        </div>
      </div>
    </section>

    <!-- Case Grid -->
    <section class="py-16 md:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <!-- Case Item 1 -->
          <div class="group cursor-pointer">
            <div class="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-200 mb-6">
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-8 text-white">
                <p class="text-sm font-medium mb-2">现代简约 | 120㎡</p>
                <h3 class="text-xl font-bold">静谧时光 - 都会森林系住宅</h3>
              </div>
              <div class="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 group-hover:scale-110 transition-transform duration-700"></div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">静谧时光</h3>
            <p class="text-gray-500 mt-2">极致的灰白调，勾勒出宁静的居家氛围。</p>
          </div>

          <!-- Case Item 2 -->
          <div class="group cursor-pointer">
            <div class="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-200 mb-6">
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-8 text-white">
                <p class="text-sm font-medium mb-2">新中式 | 180㎡</p>
                <h3 class="text-xl font-bold">墨香雅居 - 现代东方美学</h3>
              </div>
              <div class="w-full h-full bg-gradient-to-br from-indigo-100 to-purple-100 group-hover:scale-110 transition-transform duration-700"></div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">墨香雅居</h3>
            <p class="text-gray-500 mt-2">传统元素与现代材质的完美碰撞。</p>
          </div>

          <!-- Case Item 3 -->
          <div class="group cursor-pointer">
            <div class="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-200 mb-6">
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex flex-col justify-end p-8 text-white">
                <p class="text-sm font-medium mb-2">北欧风 | 95㎡</p>
                <h3 class="text-xl font-bold">晨曦暖阳 - 治愈系原木小家</h3>
              </div>
              <div class="w-full h-full bg-gradient-to-br from-emerald-50 to-teal-100 group-hover:scale-110 transition-transform duration-700"></div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">晨曦暖阳</h3>
            <p class="text-gray-500 mt-2">让阳光洒满每一个角落，温暖而治愈。</p>
          </div>

          <!-- Repeat for visual richness -->
          <div class="group cursor-pointer hidden md:block">
            <div class="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-200 mb-6">
              <div class="w-full h-full bg-gradient-to-br from-amber-50 to-orange-100 group-hover:scale-110 transition-transform duration-700"></div>
            </div>
            <h3 class="text-xl font-bold text-gray-900">光影之间</h3>
            <p class="text-gray-500 mt-2">探索空间与光线的无限可能。</p>
          </div>
        </div>
        
        <!-- More Button -->
        <div class="mt-16 text-center">
          <button class="px-10 py-4 border-2 border-gray-100 text-gray-600 rounded-full font-bold hover:border-blue-600 hover:text-blue-600 transition-all">
            加载更多案例
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: '设计案例 - 至臻装饰 - 多样装修风格实景展示',
  meta: [
    { name: 'description', content: '精选至臻装饰上千套装修设计案例，涵盖现代简约、新中式、北欧风、美式轻奢、法式等多种风格。高清实景拍摄，为您提供源源不断的装修设计灵感。' },
    { name: 'keywords', content: '装修案例图片,装修效果图,室内设计实景,装修风格分类,装修灵感库,实景装修案例' }
  ]
})
</script>
