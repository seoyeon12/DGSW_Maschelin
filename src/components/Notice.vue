<template>
  <div id="notice">
      <div class="font_bold title">주의</div>
      <div class="font_right context">
          개인 정보 도용 및 익명이용은 사용에 제한이 걸리며 절대 금지합니다.
      </div>
      <div class="font_right context">
          대구소프트웨어 고등학교(이하 대소고) 학생 혹은 예비 신입생을 위한 서비스입니다. 악의적인 사용은 제제를 당할 수 있으며 금지합니다.
        </div>
      <div class="font_right context">
          대소고 학생 및 가게에 대한 고의적인 욕설 및 비판, 저격등 부적절한 행위가 발각될 경우 제제를 당할 수 있으며 심할 경우 법적 대응이 가능합니다. 이용에 주의 바랍니다.
      </div>
      <div class="checking">
          <div class="font_medium title">위의 내용 모두 숙지하셨나요?</div>
          <div id="checking_btn" class="font_medium" @click.once="checkingNotice()">예</div>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    checkingNotice () {
      sessionStorage.setItem('isChecking', true)
      this.$emit('send-checkig', true)
    }
  }
}
</script>

<style>
#notice{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: space-around;
    text-align: center;
    background-color: #ffffff;
}
#notice > .title{
    height: 12vh;
    line-height: 12vh;
    /* background-color: #628B15;
    color: #ffffff; */
    color: #000000;
    font-size: 60px;
    margin-bottom: 10px;
}
#notice > .context{
    width: 80%;
    font-size: 20px;
    margin: 20px auto;
}
.checking > .title{
    height: 10vh;
    line-height: 10vh;
    font-size: 25px;
}
#checking_btn{
    width: 250px;
    margin: 0 auto;
    color: #000000;
    background-color: #efefef;
    line-height: 6vh;
    cursor: pointer;
    border-radius: 8px;
    font-size: 20px;
    /* 버튼 그림자 값 */
}
#checking_btn:hover, #checking_btn:active{
    color: #ffffff;
    background-color: #628b15;
    /* background-color: #FFBF00; */
}
</style>
