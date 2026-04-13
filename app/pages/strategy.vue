<template>
  <div class="pt-20">
    <!-- Header Section -->
    <section class="bg-blue-600 py-12 md:py-20 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">装修攻略</h1>
        <p class="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
          全方位的装修避坑指南，从前期准备到后期入住，为您提供最专业的建议。
        </p>
      </div>
    </section>

    <!-- Strategy Content -->
    <section class="py-16 md:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          <!-- Left Column: Strategy List -->
          <div class="lg:col-span-2 space-y-12">
            <div v-for="i in 3" :key="i" class="flex flex-col md:flex-row gap-8 items-center md:items-start group cursor-pointer border-b border-gray-100 pb-12">
              <div class="w-full md:w-64 h-48 rounded-3xl bg-gray-100 flex-shrink-0 overflow-hidden shadow-sm">
                <div class="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 group-hover:scale-110 transition-transform duration-700"></div>
              </div>
              <div class="flex-grow">
                <div class="flex items-center space-x-4 mb-4">
                  <span class="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full uppercase tracking-wider">前期准备</span>
                  <span class="text-gray-400 text-sm">2026-04-13</span>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  装修第一步：如何选择最适合自己的装修风格？
                </h3>
                <p class="text-gray-500 leading-relaxed mb-6">
                  面对琳琅满目的装修风格，很多人都会陷入选择困难症。本文将从户型、采光、个人喜好等多个维度，带您深入分析不同风格的优缺点，帮您找到最心仪的“家”的样子。
                </p>
                <div class="flex items-center text-blue-600 font-bold group-hover:translate-x-2 transition-transform">
                  阅读全文 
                  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Sidebar -->
          <aside class="space-y-12 sticky top-32">
            <!-- Search -->
            <div class="bg-gray-50 p-8 rounded-3xl">
              <h4 class="text-xl font-bold mb-6">搜攻略</h4>
              <div class="relative">
                <input type="text" placeholder="关键词，如：预算、甲醛..." class="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow">
                <button class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Hot Tags -->
            <div class="bg-gray-50 p-8 rounded-3xl">
              <h4 class="text-xl font-bold mb-6">热门标签</h4>
              <div class="flex flex-wrap gap-3">
                <span v-for="tag in ['预算清单', '隐蔽工程', '材料选购', '收纳技巧', '甲醛治理', '软装搭配']" :key="tag" class="px-4 py-2 bg-white border border-gray-200 text-sm text-gray-600 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all cursor-pointer">
                  #{{ tag }}
                </span>
              </div>
            </div>

            <!-- Newsletter -->
            <div class="bg-blue-600 p-10 rounded-3xl text-white shadow-xl shadow-blue-200">
              <h4 class="text-2xl font-bold mb-4">订阅装修周报</h4>
              <p class="text-blue-100 mb-8">每周一份专业干货，让您装修不踩坑。</p>
              <button class="w-full py-4 bg-white text-blue-600 rounded-2xl font-bold hover:bg-gray-100 transition-colors">
                立即免费订阅
              </button>
            </div>
          </aside>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: '装修攻略 - 至臻装饰 - 专业避坑与预算指南',
  meta: [
    { name: 'description', content: '至臻装饰权威装修攻略大全，包含装修流程、预算控制、材料选购、隐蔽工程、软装搭配及甲醛治理等专业知识。帮您科学装修，轻松避坑不走弯路。' },
    { name: 'keywords', content: '装修流程指南,装修预算表,装修材料清单,装修避坑技巧,装修干货分享,装修常识百科' }
  ]
})
</script>
