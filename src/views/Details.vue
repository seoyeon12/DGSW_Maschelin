<template>
<!-- <Details.vue> VSheet가 부모, path가 '/details'인 라우터 -->
<!-- <App.vue>에서 router-view로 호출된다. 형제 컴포넌트 : VBtn, VContainer -->
<!-- 화면의 구성을(자식 컴포넌트 : StoreItem, AddReview, LoadReview) 컨트롤하는 컴포넌트 -->
  <div class="details">
    <!-- <h2>{{ $route.params.store }}</h2> == <h2>{{ store }}</h2> -->
    <v-row justify="center">
      <!-- 가게 정보와 생략여부(true)를 item(StoreItem)에 넘겨준다. -->
      <Item v-bind:store="item" v-bind:detail=true></Item>
      <AddReview v-show="loginState" v-bind:placeId="placeId" @reviewDone="addReviewDone"></AddReview>
    </v-row>

    <v-row justify="center">
      <v-btn text color="primary">
        <router-link to="/">HOME으로 돌아가기</router-link>
      </v-btn>
      <v-btn text color="primary" @click="clickLoadBtn()">
        리뷰보기
      </v-btn>
      <v-btn text color="primary" @click="checkingLogin()">
        리뷰작성하기
      </v-btn>
    </v-row>

    <v-row>
      <LoadReview v-if="isActive" v-bind:placeId="placeId"></LoadReview>
    </v-row>
  </div>
</template>

<script>
import Item from '@/components/StoreItem.vue'
import LoadReview from '@/components/LoadReview.vue'
import AddReview from '@/components/AddReview.vue'

export default {
  name: 'Details',
  props: ['store'],
  data () {
    return {
      item: [],
      placeId: '0',
      isActive: false,
      loginState: false
    }
  },
  components: {
    Item,
    LoadReview,
    AddReview
  },
  created () {
    // 만약 잘못된 접근일 시 메인화면으로 돌아가기
    if (this.store === undefined) {
      this.backToMain()
    }
    this.getInfo()
    // console.log(JSON.parse(this.item).starTotal)
  },
  methods: {
    backToMain () {
      this.$router.push('/')
    },
    getInfo () {
      this.item = this.store
      this.placeId = JSON.parse(this.item).placeId
    },
    clickLoadBtn () {
      this.isActive = true
    },
    checkingLogin () {
      var name = sessionStorage.getItem('user_name')
      // console.log(name)
      if (name == null) {
        console.log('It is Null')
        alert('로그인 후 작성가능합니다. 로그인 부탁드립니다.')
      } else {
        this.loginState = true
      }
    },
    addReviewDone () {
      this.loginState = false
      this.$nextTick(function () {
        console.log(this.loginState)
      })
    }
  }
}
</script>

<style scoped>
.details{
  margin-top: 100px;
}
</style>
