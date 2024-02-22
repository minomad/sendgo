<template>
  <section class="bg-black">
    <h2 class="hidden">회원가입/로그인</h2>
    <article class="px-64 h-[996px]">
      <div class="pt-72 pb-12">
        <p class="text-[#FCFCFC] text-2xl">인터넷 문자 메세지 전송의 모든 것</p>
        <p class="mainColor">가장 빠르고 안정적인</p>
        <p class="mainColor">문자 서비스 SENDGO</p>
      </div>
      <Button variant="primary" class="mr-5">회원가입</Button>
      <Button variant="secondary">로그인</Button>
      <!-- <div class="absolute top-24 right-[-20px]">
        <div class="flex">
          <img src="/1.png" alt="" class="w-64 h-[443px]" />
          <img src="/2.png" alt="" class="w-64 h-[443px]"/>
          <img src="/3.png" alt="" class="w-64 h-[443px]"/>
        </div>
        <div class="flex">
          <img src="/4.png" alt="" class="w-64 h-[443px]"/>
          <img src="/5.png" alt="" class="w-64 h-[443px]"/>
          <img src="/6.png" alt="" class="w-64 h-[443px]"/>
        </div>
      </div> -->
    </article>
  </section>

  <section>
    <h2 class="hidden">서비스안내</h2>
    <article class="pt-52 flex flex-col items-center">
      <figure class="pb-11">
        <img src="/icon01.png" alt="" class="" />
      </figure>
      <div class="text-center pb-24">
        <p class="text-[56px]">복잡한 인터넷 문자 서비스를</p>
        <p class="text-[56px]">간편하게 만나보세요.</p>
        <p class="text-[26px] text-secondary">
          모든 종류의 인터넷 SMS를 편리하게.
        </p>
      </div>
      <div class="flex gap-11">
        <Card>
          <img src="/icon02.png" alt="" class="pt-14 pb-[10px]" />
          <p class="text-[26px] font-bold">메시지 용량에</p>
          <p class="text-[26px] font-bold pb-5">제한 받지 않고 전송</p>
          <p class="text-xl text-[#6E7583]">
            메시지 용량 걱정없이 단문 메시지는
          </p>
          <p class="text-xl text-[#6E7583]">
            물론 장문, 사진까지 전송이 가능합니다.
          </p>
        </Card>

        <Card>
          <img src="/icon03.png" alt="" class="pt-14 pb-[10px]" />
          <p class="text-[26px] font-bold">모든 종류의</p>
          <p class="text-[26px] font-bold pb-5">문자 메시지를 한번에</p>
          <p class="text-xl text-[#6E7583]">
            메시지 용량 걱정없이 단문 메시지는
          </p>
          <p class="text-xl text-[#6E7583]">
            물론 장문, 사진까지 전송이 가능합니다.
          </p>
        </Card>

        <Card>
          <img src="/icon04.png" alt="" class="pt-14 pb-[10px]" />
          <p class="text-[26px] font-bold">간편한 광고</p>
          <p class="text-[26px] font-bold pb-5">문자 메시지 설정</p>
          <p class="text-xl text-[#6E7583]">광고 설정 버튼 클릭 한번으로</p>
          <p class="text-xl text-[#6E7583]">080 수신 거부 번호가 적용됩니다.</p>
        </Card>
      </div>
    </article>

    <article class="pt-[250px] flex flex-col items-center">
      <figure class="">
        <img src="/icon05.png" alt="" class="" />
      </figure>
      <div class="text-center pb-24">
        <p class="text-[56px]">샌드고의 다양한</p>
        <p class="text-[56px]">기능들을 살펴보세요</p>
        <p class="text-[26px] text-secondary">
          고객님들의 입장에서 고민하였습니다.
        </p>
      </div>
    </article>

    <article class="pt-[250px] flex flex-col items-center">
      <figure class="">
        <img src="/icon06.png" alt="" class="" />
      </figure>
      <div class="text-center pb-24">
        <p class="text-[56px]">정확도와 다양함은 물론</p>
        <p class="text-[56px]">신뢰할 수 있는 보안까지</p>
        <p class="text-[26px] text-secondary">
          고객님들의 간편함을 고민하였습니다
        </p>
      </div>
    </article>
  </section>

  <section class="">
    <h2 class="hidden">메시지 바로가기</h2>
    <p>비지니스 광고의 시작</p>
    <p>이제 샌드고와 함께 하세요</p>
  </section>
</template>

<script>
import Button from "../components/Button.vue";
import Card from "../components/Card.vue";

export default {
  components: {
    Button,
    Card,
  },
};
</script>

<style scoped>
.mainColor {
  font-size: 56px;
  font-weight: bold;
  letter-spacing: 0px;
  background-image: linear-gradient(90deg, #9fbafd 0%, #4e81ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
</style>
