<template>
  <section class="bg-black">
    <h2 class="hidden">회원가입/로그인</h2>

    <div class="relative">
      <img src="/1.png" alt="" class="main01" />
      <img src="/2.png" alt="" class="main02" />
      <img src="/3.png" alt="" class="main03" />
      <img src="/4.png" alt="" class="main04" />
      <img src="/5.png" alt="" class="main05" />
      <img src="/6.png" alt="" class="main06 z-10" />
      <div class="mainBg06"></div>
    </div>

    <article class="px-64 h-[1075px]">
      <div class="pt-[360px] pb-12">
        <p class="text-[#FCFCFC] text-2xl">인터넷 문자 메세지 전송의 모든 것</p>
        <p class="mainColor">가장 빠르고 안정적인</p>
        <p class="mainColor">문자 서비스 SENDGO</p>
      </div>
      <Button variant="primary" class="mr-5">회원가입</Button>
      <Button variant="secondary">로그인</Button>
    </article>
  </section>

  <section class="pb-52">
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

      <div class="flex gap-[54px]">
        <div
          class="w-[626px] h-[597px] rounded-[25px] bg-[#F8F9FA] flex flex-col pl-[54px] text-[34px] font-bold"
        >
          <p class="pt-[72px]">자주 전송하는 내용이 있나요?</p>
          <p class="text-[#727B88]">템플릿으로 메시지 내용을</p>
          <p class="text-[#727B88]">저장하여 간편하게 전송하세요.</p>
          <img src="/feat01.png" alt="" class="pt-16 h-[372px]" />
        </div>

        <div
          class="w-[750px] h-[597px] rounded-[25px] bg-[#E9EBFD] flex flex-col pl-[54px] text-[34px] font-bold"
        >
          <p class="pt-[72px] creditColor">
            크레딧 구매 시, 보너스 크레딧 증정
          </p>
          <p class="text-[#7079CB]">크레딧 상품을 구매하면 상품 별</p>
          <p class="text-[#7079CB]">보너스 크레딧을 증정합니다.</p>
          <img src="/feat02.png" alt="" class="pt-16 w-[644px] h-[372px]" />
        </div>
      </div>

      <div class="flex gap-[54px] pt-[50px]">
        <div
          class="w-[855px] h-[717px] rounded-[25px] bg-[#DBE5FF] flex flex-col pl-[54px] text-[34px] font-bold"
        >
          <p class="pt-[72px] text-[#375984]">전송 후 바로 발송확인 기능</p>
          <p class="text-[#698AB1]">메시지 전송 후 바로 발송현황 창에서</p>
          <p class="text-[#698AB1]">현재 메시지 전송 현황을 알려드립니다</p>
          <img src="/feat03.png" alt="" class="pt-16" />
        </div>

        <div
          class="featColor w-[520px] h-[717px] rounded-[25px] flex flex-col pl-[54px] text-[34px] font-bold"
        >
          <p class="pt-[72px] text-[#6C3111]">누르면 바로 전송완료</p>
          <p class="text-[#6F6F6F]">누르자마자 수신인에게</p>
          <p class="text-[#6F6F6F]">바로 전달됩니다</p>
          <img src="/feat04.png" alt="" class="pt-14 w-[390px]" />
        </div>
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

      <div class="flex gap-[54px] pt-[50px] pb-11">
        <div
          class="w-[688px] h-[597px] rounded-[25px] bg-[#DCEFF4] flex flex-col pl-[54px] text-[34px] font-bold"
        >
          <p class="pt-[72px]">일반 SMS는 기본, 카카오톡까지</p>
          <p class="text-[#516B71]">종류와 상관없이 모두 전송해 드립니다</p>
          <img src="/feat05.png" alt="" class="pt-11 w-[340px] mx-[120px]" />
        </div>

        <div
          class="w-[688px] h-[597px] rounded-[25px] bg-[#FBFBEF] flex flex-col pl-[54px] text-[34px] font-bold"
        >
          <p class="pt-[72px] text-[#6C3111]">강력한 보안을 제공합니다.</p>
          <p class="text-[#6F6F6F]">신뢰할 수 있는 최신의 보안 시스템을</p>
          <p class="text-[#6F6F6F]">적용하여 개인정보를 보호합니다</p>
          <img src="/feat06.png" alt="" class="pt-16 mr-32 w-[250px] mx-auto" />
        </div>
      </div>

      <div
        class="w-[1420px] h-[495px] rounded-[25px] bg-[#F8F9FA] flex flex-col items-center pl-[54px] text-[34px] font-bold"
      >
        <p class="pt-[72px]">놀라운 수신율을 경험해 보세요</p>
        <p class="text-[#727B88]">샌드고의 정확한 수신율은 99.8%에 달합니다</p>
        <img src="/feat07.png" alt="" class="pt-8" />
      </div>
    </article>
  </section>

  <section class="bg-black h-[1080px]">
    <h2 class="hidden">메시지 바로가기</h2>
    <div class="messageColor">
      <p>비지니스 광고의 시작</p>
      <p>이제 샌드고와 함께 하세요</p>
    </div>
    <div class="text-center pt-16">
      <Button>메세지 바로가기</Button>
    </div>
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
.creditColor {
  background-image: linear-gradient(270deg, #6264f6 0%, #7f3add 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.featColor {
  background: transparent linear-gradient(180deg, #fafaee 0%, #fbfbf0 100%) 0%
    0% no-repeat padding-box;
}

.messageColor {
  font-size: 56px;
  font-weight: bold;
  letter-spacing: 0px;
  background-image: linear-gradient(90deg, #b6b7f7 0%, #7fb2fe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  padding-top: 386px;
  color: transparent;
  text-align: center; /* 텍스트 가운데 정렬 */
}

.main01 {
  background: #6250FF;
  border-radius: 25px;
  position: absolute;
  top: 220px;
  left: 1010px;
  width: 254px;
  height: 443px;
}

.main02 {
  background: #37383E;
  border-radius: 25px;
  position: absolute;
  top: 32px;
  left: 1286px;
  width: 254px;
  height: 524px;
}
.main03 {
  background: #6250FF;
  border-radius: 25px;
  position: absolute;
  top: -222px;
  left: 1562px;
  width: 254px;
  height: 524px;
}
.main04 {
  position: absolute;
  top: 687px;
  left: 1010px;
  width: 254px;
  height: 388px;
}
.main05 {
  background: #6250FF;
  border-radius: 25px;
  position: absolute;
  top: 571px;
  left: 1286px;
  width: 254px;
  height: 504px;
}
.main06 {
  position: absolute;
  top: 328px;
  left: 1562px;
  width: 340px;
  height: 609px;
}

.mainBg06 {
  background: #37383E;
  border-radius: 25px;
  position: absolute;
  top: 328px;
  left: 1562px;
  width: 254px;
  height: 609px;
}
</style>
