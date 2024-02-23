<template>
  <div class="mt-14 flex h-[459px] w-[347px] flex-col rounded-lg bg-white p-8 shadow-lg">
    <p class="text-[30px] font-bold">{{ price }}원</p>
    <p class="text-[#7B7B7B]">{{ totalCount }}건 발송가능합니다</p>
    <p class="text-[#7B7B7B]">1건당 15원에 결제가능합니다</p>

    <div class="flex items-center justify-between pb-6 pt-9">
      <p class="text-2xl font-bold">{{ credit }} 크레딧</p>
      <p class="rounded-2xl bg-[#E0EDFF] p-1 px-2 text-[#2116BF]">+ 10%</p>
    </div>

    <div class="rounded-lg bg-[#F4F5F6] p-4">
      <div class="flex justify-between">
        <p>기본 크레딧</p>
        <p>{{ basicCredit }}</p>
      </div>
      <div class="flex justify-between">
        <p>추가 크레딧</p>
        <p>+{{ additionalCredit }}</p>
      </div>
    </div>
    <button class="mt-10 h-[61px] w-[283px] rounded-lg bg-[#5146F0] text-center text-xl text-white">
      구매하기
    </button>
  </div>
</template>

<script>
export default {
  props: {
    price: {
      type: String,
      default: '30,000',
    },
    totalCount: {
      type: String,
      default: '66.667',
    },
    credit: {
      type: String,
      default: '330,000',
    },
    basicCredit: {
      type: String,
      default: '300,000',
    },
    additionalCredit: {
      type: String,
      default: '30,000',
    },
  },
};
</script>
<style scoped></style>
