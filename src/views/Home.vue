<template>
<!-- <Home.vue> VSheet가 부모, path가 '/'인 라우터 -->
<!-- <App.vue>에서 router-view로 호출된다. 형제 컴포넌트 : VBtn, VContainer -->
<!-- 화면의 구성을(자식 컴포넌트 : MainTitle, Notice, StoreList) 컨트롤하는 컴포넌트 -->
  <div class="home">
    <img id="bg_img" src="@/assets/main.jpg" alt="Main Background Picturs">
    <div class="main_section">
      <MainTitle></MainTitle>
    </div>
    <div class="notice_section">
      <!-- send-checkig / 버튼이 클릭되었다는 신호 -->
      <Notice @send-checkig="isActiveList"></Notice>
    </div>
    <!-- v-if / 주의사황 숙지 및 메인 목록 보여주기 활성화 여부 확인  -->
    <!-- v-bind / storeList : 데이터베이스로부터 불러온 "가게들" 정보  -->
    <StoreList class="StoreList" v-if="isListActivity" v-bind:propStoreList="storeList"></StoreList>
  </div>
</template>

<script>
// @ is an alias to /src
import MainTitle from '@/components/MainTitle.vue'
import Notice from '@/components/Notice.vue'
import StoreList from '@/components/StoreList.vue'

export default {
  name: 'Home',
  data () {
    return {
      isListActivity: false, // 주의사항 숙지 여부, 메인 목록 보여주기 활성화 여부
      storeList: [] // 가게들 정보
    }
  },
  components: {
    MainTitle,
    Notice,
    StoreList
  },
  created () {
    this.getStoreList()
  },
  mounted () {
    this.isActiveList()
    // console.log('Home.vue Mounted len :  ' + window.localStorage.length)
  },
  methods: {
    // 임시 개발용 함수
    // localhost로 실행했을 때만 생기는 불필요한 데이터 삭제
    getStoreList () {
      var len = localStorage.length
      if (len > 0) {
        for (var i = 0; i < len; i++) {
          var key = localStorage.key(i)
          if (key === 'loglevel:webpack-dev-server') {
            console.log('Pass')
          } else {
            // console.log('Push')
            this.storeList.push(localStorage[key])
            // this.$set(this.storeList.push(localStorage[key]))
          }
        }
      }
    },
    // 세션 스토리지 참조, 주의사항을 확인했다면 true를 아니라면 flase
    isActiveList () {
      if (sessionStorage.getItem('isChecking')) {
        this.isListActivity = true
      } else {
        this.isListActivity = false
      }
    }
  }
}
</script>

<style>
#bg_img{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  filter: brightness(0.5);
  animation: blackout;
  animation-delay: 5s;
  animation-duration: 10s;
  animation-fill-mode: forwards;
}
.main_section{
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.notice_section{
  position: relative;
  width: 100%;
  margin-bottom: 50px;
}
.StoreList{
  position: relative;
  width: 100%;
}
@-webkit-keyframes blackout {
  from{
    filter: brightness(0.5);
  }
  to{
    filter: brightness(0.2);
  }
}
</style>
