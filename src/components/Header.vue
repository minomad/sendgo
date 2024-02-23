<template>
  <header
    :class="[headerClass, textClass]"
    class="flex items-center gap-20 h-20 fixed w-full z-50"
  >
    <router-link to="/" class="ml-64 mr-16">
      <img :src="logoSrc" alt="" width="142px" height="44px" />
    </router-link>
    <router-link to="/message" active-class="active-link" class="py-7 px-16"
      >메시지</router-link
    >
    <router-link to="/credit" active-class="active-link" class="py-7 px-16"
      >크레딧</router-link
    >
  </header>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const headerClass = ref(route.path === "/" ? "bg-black" : "bg-white");
const textClass = ref(route.path === "/" ? "text-white" : "text-black");
const logoSrc = ref(route.path === "/" ? "/logo02.svg" : "/logo.svg");

watch(
  () => route.path,
  (newValue) => {
    headerClass.value = newValue === "/" ? "bg-black" : "bg-white";
    textClass.value = newValue === "/" ? "text-white" : "text-black";
    logoSrc.value = newValue === "/" ? "/logo02.svg" : "/logo.svg";
  }
);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  if (route.path === "/" && window.scrollY > 0) {
    headerClass.value = "bg-white";
    textClass.value = "text-black";
    logoSrc.value = "/logo.svg";
  } else if (route.path === "/" && window.scrollY === 0) {
    headerClass.value = "bg-black";
    textClass.value = "text-white";
    logoSrc.value = "/logo02.svg";
  }
};
</script>

<style scoped>
header {
  border-bottom: 1px solid #343434;
}

.active-link {
  color: #4e43ed;
  border-bottom: 3px solid #4e43ed;
}
</style>
