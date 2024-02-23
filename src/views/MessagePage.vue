<template>
  <section class="pt-20">
    <h2 class="sr-only">메시지 페이지</h2>
    <div class="flex h-20 items-center justify-end gap-10 pr-96 text-xl">
      <button class="h-[56px] w-[155px] rounded-xl bg-[#E1E7FD] text-[#4F44F0]">메세지 전송</button>
      <button class="text-[#555555]">발신번호 관리</button>
      <button class="text-[#555555]">주소록 관리</button>
      <button class="text-[#555555]">발송결과</button>
    </div>

    <article class="bg-[#F2F4F8] pb-40 pt-14">
      <div class="mx-auto h-[2212px] w-[1223px] rounded-3xl bg-white px-24">
        <h3 class="py-14 text-center text-[38px] font-bold">메시지 전송</h3>
        <div class="flex justify-center gap-4 pb-8">
          <button class="h-[66px] w-[333px] rounded-lg bg-[#4F44F0] text-white">문자 메시지</button>
          <button class="h-[66px] w-[333px] rounded-lg bg-[#F5F6FA] text-[#555555]">
            알림톡 (카카오)
          </button>
          <button class="h-[66px] w-[333px] rounded-lg bg-[#F5F6FA] text-[#555555]">
            친구톡 (카카오)
          </button>
        </div>
        <div class="border-b pb-8 text-[#525252]">
          <p>&middot; 간편하게 한 화면에서 단문, 장문 포토메세지를 발송할 수 있습니다.</p>
          <p>
            &middot; 90byte 초과 시 장문문자로 자동 전환되며, 최대 2,000byte까지 작성이 가능합니다.
          </p>
        </div>

        <div class="pt-8">
          <p class="text-[22px] font-bold">수신번호</p>
          <input
            type=""
            class="my-3 h-[61px] w-[439px] rounded-lg bg-[#F4F5F6] p-5"
            placeholder="휴대폰번호 (숫자만 입력)"
          />
          <button class="ml-2 h-[61px] w-[114px] rounded-lg bg-[#4F44F0] p-4 text-xl text-white">
            +추가
          </button>
        </div>
      </div>
    </article>
  </section>
</template>
<script setup></script>

<style scoped></style>
