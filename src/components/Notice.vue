<template>
  <div id="notice">
    <v-card elevation="2" shaped class="font_bold">
        <span class="noticeTitle">주의</span>
        <v-card-text>
            개인 정보 도용 및 익명이용은 사용에 제한이 걸리며 절대 금지합니다.
        </v-card-text>
        <v-card-text>
            대구소프트웨어 고등학교(이하 대소고) 학생 혹은 예비 신입생을 위한 서비스입니다. 악의적인 사용은 제제를 당할 수 있으며 금지합니다.
        </v-card-text>
        <v-card-text>
            대소고 학생 및 가게에 대한 고의적인 욕설 및 비판, 저격등 부적절한 행위가 발각될 경우 제제를 당할 수 있으며 심할 경우 법적 대응이 가능합니다. 이용에 주의 바랍니다.
        </v-card-text>
        <v-card-text>
            <span class="font_bold">위의 내용 모두 숙지하셨나요?</span>
        </v-card-text>
        <v-btn color="black lighten-2" outlined text x-large block @click.once="checkingNotice()">
            예
        </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  methods: {
    checkingNotice () {
      sessionStorage.setItem('isChecking', true)
      this.$emit('send-checkig')
    }
  }
}
</script>

<style>
#notice{
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: space-around;
    text-align: center;
}
.noticeTitle{
    font-size: 50px;
}
.checking > .title{
    height: 10vh;
    line-height: 10vh;
    font-size: 25px;
}
</style>
