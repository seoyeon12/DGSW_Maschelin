<template>
<!-- <StoreList.vue> 가게 정보 리스트 + 가게 클릭 이벤트 -->
<!-- Home.vue에서 호출됨. props : propStoreList -->
  <div id="storeList">
      <div class="sectionUl">
        <div class="sectionCen">
          <div v-for="(store, index) in propStoreList" :key="store" class="item" @click="moveToDetail(store)">
            <!-- 가게 정보와 생략여부(false)를 item(StoreItem)에 넘겨준다. -->
            <Item v-bind:store="store" v-bind:detail=false v-bind:class="index"></Item>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Item from '@/components/StoreItem.vue'

export default {
  // 가게들의 정보
  props: ['propStoreList'],
  components: {
    Item
  },
  methods: {
    // 각 가게마다 클릭하면 상세보기 페이지로 이동. + 클릭된 가게 정보 전달
    moveToDetail (store) {
      // console.log(store)
      this.$router.push({ name: 'Details', params: { store: store } })
    }
  }
}
</script>

<style>
.sectionUl{
  /* background-color: #3E3E3E; */
  min-height: 400px;
}
.sectionCen{
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: stretch;
}
.item{
  margin: 0 10px;
}
</style>
