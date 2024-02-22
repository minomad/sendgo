<template>
  <div
    class="shadow-lg rounded-lg flex flex-col bg-white w-[347px] h-[459px] p-8 mt-14"
  >
    <p class="text-[30px] font-bold">{{ price }}원</p>
    <p class="text-[#7B7B7B]">{{ totalCount }}건 발송가능합니다</p>
    <p class="text-[#7B7B7B]">1건당 15원에 결제가능합니다</p>

    <div class="flex items-center justify-between pt-9 pb-6">
      <p class="text-2xl font-bold">{{ credit }} 크레딧</p>
      <p class="text-[#2116BF] bg-[#E0EDFF] rounded-2xl p-1 px-2">+ 10%</p>
    </div>

    <div class="p-4 bg-[#F4F5F6] rounded-lg">
      <div class="flex justify-between">
        <p>기본 크레딧</p>
        <p>{{ basicCredit }}</p>
      </div>
      <div class="flex justify-between">
        <p>추가 크레딧</p>
        <p>+{{ additionalCredit }}</p>
      </div>
    </div>
    <button
      class="bg-[#5146F0] text-white text-xl rounded-lg w-[283px] h-[61px] text-center mt-10"
    >
      구매하기
    </button>
  </div>
</template>

<script>
export default {
  props: {
    price: {
      type: String,
      default: "30,000", 
    },
    totalCount: {
      type: String,
      default: "66.667", 
    },
    credit: {
      type: String,
      default: "330,000", 
    },
    basicCredit: {
      type: String,
      default: "300,000", 
    },
    additionalCredit: {
      type: String,
      default: "30,000", 
    },
  },
};
</script>
<style scoped></style>
