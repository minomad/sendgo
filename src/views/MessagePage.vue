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
      <div class="mx-auto w-[1223px] rounded-3xl bg-white px-24 pb-10">
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

        <div class="relative pt-8">
          <p class="text-[22px] font-bold">수신번호</p>
          <input
            type="text"
            class="my-3 h-[61px] w-[439px] rounded-lg bg-[#F4F5F6] p-5"
            placeholder="휴대폰번호 (숫자만 입력)"
          />
          <button class="ml-2 h-[61px] w-[114px] rounded-lg bg-[#4F44F0] p-4 text-xl text-white">
            +추가
          </button>

          <div class="relative h-[238px] w-[562px] rounded-lg border border-[#CECECE] p-5">
            <p>번호를 입력하거나 후 엔터 혹은 추가하기를 클릭해 주세요.</p>
            <p>최대 1만 건까지 붙여넣기 가능합니다.</p>
            <div class="absolute bottom-5 flex w-[520px] justify-between">
              <p>총 <span class="text-[#4F44F0]">0</span>명</p>
              <p>모두 삭제</p>
            </div>
          </div>

          <div class="flex w-[562px] gap-2 border-b py-8 text-[#7B7B7B]">
            <button
              class="flex h-[61px] w-[182px] items-center rounded-lg border border-[#CECECE] p-5"
            >
              <img src="/person.svg" alt="" />
              주소록 불러오기
            </button>

            <button
              class="flex h-[61px] w-[182px] items-center rounded-lg border border-[#CECECE] p-5"
            >
              <img src="/file.svg" alt="" />
              파일 불러오기
            </button>

            <button
              class="flex h-[61px] w-[182px] items-center rounded-lg border border-[#CECECE] p-5"
            >
              <img src="/time.svg" alt="" />
              최근 전송 내역
            </button>
          </div>
          <div
            class="absolute right-0 top-5 h-[775px] w-[401px] rounded-[22px] border-4 border-[#4D4D4D] bg-[#EAF8FF] p-5"
          >
            <img src="/back.svg" alt="" />
          </div>
        </div>

        <div class="flex w-[562px] flex-col gap-2 border-b py-8">
          <p class="text-[22px] font-bold">발신번호</p>
          <select class="my-3 h-[61px] w-[562px] rounded-lg bg-[#F4F5F6] p-2 text-[#7B7B7B]">
            <option value="select">전송할 발신번호 선택</option>
          </select>
        </div>

        <div class="flex w-[562px] flex-col py-8">
          <p class="text-[22px] font-bold">메시지입력</p>
          <div class="mt-4 rounded-lg border border-[#E1E3E5] bg-[#F6F6F6] p-6">
            <input
              type="text"
              class="h-[61px] w-[513px] rounded-lg border border-[#CECECE] p-5 text-lg text-[#7B7B7B]"
              placeholder="제목을 입력해주세요. (단문 SMS는 제외, 최대 30byte)"
            />
            <div class="flex items-center justify-between py-4">
              <p class="h-[35px] w-[101px] rounded-full bg-[#5E2BFF] pt-1.5 text-center text-white">
                단문 SMS
              </p>

              <div class="flex items-center">
                <div class="pr-4">
                  <span class="text-[#5E2BFF]">0</span>
                  <span class="text-[#8D8D8D]">/ 90byte</span>
                </div>
                <img src="/reset.svg" alt="" />
              </div>
            </div>
            <div
              class="relative h-[295px] w-[513px] rounded-lg border border-[#CECECE] bg-white p-5 text-[#7B7B7B]"
            >
              <p>내용을 입력해 주세요. 90byte 초과 시 장문 문자로,</p>
              <p>이미지 추가 시 포토 문자로 자동 전환 됩니다.</p>
              <div class="absolute bottom-5 right-5 flex w-[520px] justify-end gap-3">
                <div class="h-[43px] w-[107px] rounded-[22px] bg-[#F5F5F5] pt-2.5 text-center">
                  치환코드
                </div>
                <div class="h-[43px] w-[107px] rounded-[22px] bg-[#F5F5F5] pt-2.5 text-center">
                  템플릿
                </div>
                <div class="h-[43px] w-[107px] rounded-[22px] bg-[#F5F5F5] pt-2.5 text-center">
                  문자도구
                </div>
              </div>
            </div>
            <div class="my-8 flex justify-between border-y py-8 text-lg font-bold">
              <p>광고성 문자(080 수신거부번호 포함)</p>
              <img src="/toggle.svg" alt="" />
            </div>
            <div>
              <p class="text-lg font-bold">이미지추가</p>
              <img
                src="/plus.svg"
                alt=""
                class="my-4 h-[100px] w-[100px] rounded-lg border border-[#CECECE] bg-white"
              />
              <div class="text-[#797979]">
                <p>&middot; 이미지는 최대 3장까지 첨부 가능합니다.</p>
                <p>&middot; 이미지 파일 형식은 JPG, PNG, GIF만 가능합니다.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col border-y py-8">
          <p class="text-[22px] font-bold">발송설정</p>
          <div class="mt-4 flex gap-4 text-[22px]">
            <button
              class="flex h-[66px] w-[274px] items-center justify-center rounded-lg border border-[#4F44F0] text-[#4F44F0]"
            >
              <img src="/checked.svg" alt="" />
              즉시 발송
            </button>
            <button
              class="flex h-[66px] w-[274px] items-center justify-center rounded-lg bg-[#F2F5F9] text-[#747B84]"
            >
              <img src="/check.svg" alt="" />
              예약 발송
            </button>
          </div>
        </div>
        <button
          class="mt-10 flex h-[66px] w-[1031px] items-center justify-center rounded-lg bg-[#4F44F0] text-[22px] text-white"
        >
          발송하기
        </button>
      </div>
    </article>
  </section>
</template>

<script></script>

<style scoped></style>
