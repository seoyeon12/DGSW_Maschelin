<template>
<!-- <MainTitle.vue> Home이 부모이며 <Home.vue>에서 호출된다. -->
<!-- 메인화면의 큰 제목 -->
  <div id="mainTitle">
      <div class="font_black">WELCOME TO</div>
      <div class="font_bold">대소고 맛슐랭</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#mainTitle{
    display: flex;
    flex-direction: column;
    text-align: center;
}
#mainTitle > .font_black{
    font-size: 60px;
    color: #ffffff;
}
#mainTitle > .font_bold{
    font-size: 90px;
    color: #ffffff;
}
</style>
