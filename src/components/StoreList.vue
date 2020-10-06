<template>
  <div id="storeList">
      <!-- <TopLine></TopLine> -->
      <div class="sectionUl">
        <div class="sectionCen">
          <div v-for="(store, index) in propStoreList" :key="store" class="item" @click="moveToDetail(store)">
            <!-- {{ store }} ::::  -->
            <!-- 인덱스 값을 /details에 넘겨주면 localstorage에서 해당 인덱스 값으 검색 -->
            <Item v-bind:store="store" v-bind:detail=false v-bind:class="index"></Item>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Item from '@/components/StoreItem.vue'

export default {
  props: ['propStoreList'],
  components: {
    Item
  },
  methods: {
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
