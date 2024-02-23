<template>
  <section class="pt-20">
    <h2 class="sr-only">크레딧 페이지</h2>
    <div class="flex h-20 items-center justify-end gap-10 pr-72 text-xl">
      <button class="h-[56px] w-[155px] rounded-xl bg-[#E1E7FD] text-[#4F44F0]">크레딧 구매</button>
      <button class="text-[#555555]">크레딧 내역</button>
    </div>

    <article class="bg-[#F2F4F8] pb-40">
      <h3 class="pt-20 text-center text-[38px] font-bold">크레딧 구매</h3>
      <p class="text-center text-[19px] text-[#7B7B7B]">
        메시지 전송을 위해 사용할 크레딧 상품을 선택해 주세요
      </p>
      <div class="flex justify-center gap-6">
        <Credit />
        <Credit
          :price="'10,000'"
          :totalCount="'76,667'"
          :credit="'110,000'"
          :basicCredit="'100,000'"
          :additionalCredit="'10,000'"
        />
        <Credit />
        <Credit
          :price="'10,000'"
          :credit="'110,000'"
          :basicCredit="'100,000'"
          :additionalCredit="'10,000'"
        />
      </div>
    </article>
  </section>
</template>

<script>
import Credit from '../components/Credit.vue';
export default {
  components: {
    Credit,
  },
};
</script>

<style scoped>
.bg-credit {
  background-color: white;
}
</style>
