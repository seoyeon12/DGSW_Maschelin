<template>
  <div class="details">
    <h1>This is an details page</h1>
    <!-- <h2>{{ $route.params.store }}</h2> -->
    <!-- <h2>{{ store }}</h2> -->
    <Item v-bind:store="item"></Item>
    <router-link to="/">HOME으로 돌아가기</router-link>
  </div>
</template>

<script>
import Item from '@/components/StoreItem.vue'

export default {
  name: 'Details',
  props: ['store'],
  data () {
    return {
      // num: 10000,
      item: []
    }
  },
  components: {
    Item
  },
  created () {
    // 만약 잘못된 접근일 시 메인화면으로 돌아가기
    if (this.store === undefined) {
      this.backToMain()
    }
    this.getInfo()
  },
  methods: {
    backToMain () {
      this.$router.push('/')
    },
    getInfo () {
      this.item = this.store
      // console.log(this.item.name)
    }
  }
}
</script>
