<template>
  <div class="home">
    <img id="bg_img" src="@/assets/main.jpg" alt="Main Background Picturs">
    <div class="main_section">
      <MainTitle></MainTitle>
    </div>
    <div class="notice_section">
      <Notice @send-checkig="isActiveList"></Notice>
    </div>
    <StoreList class="StoreList" v-if="isListActivity" v-bind:propStoreList="storeList"></StoreList>
  </div>
</template>

<script>
// @ is an alias to /src
import MainTitle from '@/components/MainTitle.vue'
import Notice from '@/components/Notice.vue'
import StoreList from '@/components/StoreList.vue'

// watch()로 router 감시를 통해 상세보기에서 넘어온다면 메인의 목록 보여주기는 활성화시킨다.
// 만약 상세보기가 아닌 새로 페이지를 로드했을 경우 버튼을 누르면 목록을 보여준다.

// 컴포넌트가 재사용되는 거라서 once 속성이 먹히면 once를 이용해서 한 세션에서는 계속 메인의 목록을 보여준다.
export default {
  name: 'Home',
  data () {
    return {
      isListActivity: false,
      storeList: []
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
/* #bg_white{
  position: absolute;
  width: 100%;
  height: 50vh;
  background-color: #efefef;
  left: 0;
  bottom: 0;
} */
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
