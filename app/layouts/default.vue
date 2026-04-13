<template>
  <div class="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-20 items-center">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <div class="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
              <span class="text-white font-bold text-xl">Z</span>
            </div>
            <span class="text-xl md:text-2xl font-bold tracking-tight text-gray-900">至臻装饰</span>
          </NuxtLink>
          
          <!-- Desktop Menu -->
          <div class="hidden md:flex space-x-10 text-sm font-medium">
            <NuxtLink to="/" class="transition-colors hover:text-blue-600" active-class="text-blue-600 border-b-2 border-blue-600 pb-1">首页</NuxtLink>
            <NuxtLink to="/cases" class="text-gray-500 hover:text-blue-600 transition-colors" active-class="text-blue-600 border-b-2 border-blue-600 pb-1">设计案例</NuxtLink>
            <NuxtLink to="/strategy" class="text-gray-500 hover:text-blue-600 transition-colors" active-class="text-blue-600 border-b-2 border-blue-600 pb-1">装修攻略</NuxtLink>
            <NuxtLink to="/about" class="text-gray-500 hover:text-blue-600 transition-colors" active-class="text-blue-600 border-b-2 border-blue-600 pb-1">关于我们</NuxtLink>
          </div>

          <!-- Mobile Menu Button -->
          <div class="md:hidden flex items-center">
            <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="text-gray-600 hover:text-blue-600 focus:outline-none">
              <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div class="hidden md:flex items-center">
            <button class="px-6 py-2.5 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-95">
              立即预约
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu Content -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-if="isMobileMenuOpen" class="md:hidden bg-white border-b border-gray-100 py-4 px-6 space-y-4 shadow-xl">
          <NuxtLink to="/" @click="isMobileMenuOpen = false" class="block text-lg font-medium text-gray-900">首页</NuxtLink>
          <NuxtLink to="/cases" @click="isMobileMenuOpen = false" class="block text-lg font-medium text-gray-900">设计案例</NuxtLink>
          <NuxtLink to="/strategy" @click="isMobileMenuOpen = false" class="block text-lg font-medium text-gray-900">装修攻略</NuxtLink>
          <NuxtLink to="/about" @click="isMobileMenuOpen = false" class="block text-lg font-medium text-gray-900">关于我们</NuxtLink>
          <button class="w-full py-3 bg-blue-600 text-white rounded-xl font-bold">立即预约</button>
        </div>
      </Transition>
    </nav>

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="py-12 md:py-20 bg-gray-50 border-t border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="flex items-center justify-center space-x-2 mb-6 md:mb-8">
          <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-sm">Z</span>
          </div>
          <span class="text-xl font-bold tracking-tight text-gray-900">至臻装饰</span>
        </div>
        <p class="text-gray-400 text-xs md:text-sm">© 2026 至臻装饰 版权所有 | 沪ICP备12345678号</p>
        <div class="mt-6 md:mt-8 flex flex-wrap justify-center gap-4 md:gap-8">
          <a href="#" class="text-gray-400 hover:text-blue-600 text-sm">微信公众号</a>
          <a href="#" class="text-gray-400 hover:text-blue-600 text-sm">官方微博</a>
          <a href="#" class="text-gray-400 hover:text-blue-600 text-sm">联系我们</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const isMobileMenuOpen = ref(false)
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply antialiased;
}
</style>
