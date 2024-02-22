<template>
  <header
    :class="headerClass"
    class="flex items-center gap-28 text-[#D9D9D9] h-20"
  >
    <router-link to="/" class="ml-64 mr-16">
      <img src="/logo.svg" alt="" width="142px" height="44px" />
    </router-link>
    <router-link to="/message" active-class="active-link" class="py-7 px-16">메시지</router-link>
    <router-link to="/credit" active-class="active-link" class="py-7 px-16">크레딧</router-link>
  </header>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const headerClass = ref(route.path === '/' ? 'bg-black' : 'bg-white');

watch(() => route.path, (newValue) => {
  headerClass.value = newValue === '/' ? 'bg-black' : 'bg-white';
});
</script>

<style scoped>
header {
  border-bottom: 1px solid #343434;
}

.active-link {
  color: #4E43ED; 
  border-bottom: 3px solid #4E43ED;
}
</style>
