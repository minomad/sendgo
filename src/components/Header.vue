<script setup></script>

<template>
  <header class="flex items-center gap-28 text-[#D9D9D9] bg-black h-20">
    <router-link to="/" class="ml-64 mr-16">
      <img src="/logo.svg" alt="" width="142px" height="44px" />
    </router-link>
    <router-link to="/message">메시지</router-link>
    <router-link to="/credit">크레딧</router-link>
  </header>
</template>

<style scoped>
header {
  border-bottom: 1px solid #343434;
}
</style>
