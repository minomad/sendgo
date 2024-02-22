<template>
  <section>
    <h2 class="hidden">크레딧 페이지</h2>
    <div class="h-20 flex items-center gap-10 justify-end pr-48 text-xl">
      <button class="text-[#4F44F0] bg-[#E1E7FD] rounded-xl w-[155px] h-[56px]">
        크레딧 구매
      </button>
      <button>크레딧 내역</button>
    </div>

    <article class="bg-[#F2F4F8] pb-40">
      <h3 class="text-[38px] font-bold pt-20 text-center">크레딧 구매</h3>
      <p class="text-[19px] text-[#7B7B7B] text-center">
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
import Credit from "../components/Credit.vue";
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
