<template>
  <div id="storeList">
      <TopLine></TopLine>
      <div class="sectionUl">
        <div class="sectionCen">
          <div v-for="(store, index) in propStoreList" :key="store" class="item" @click="moveToDetail(store)">
            <!-- {{ store }} ::::  -->
            {{ index }}
            <!-- 인덱스 값을 /details에 넘겨주면 localstorage에서 해당 인덱스 값으 검색 -->
            <Item v-bind:store="store"></Item>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import TopLine from '@/components/TopLine.vue'
import Item from '@/components/StoreItem.vue'

export default {
  props: ['propStoreList'],
  components: {
    TopLine,
    Item
  },
  methods: {
    moveToDetail (store) {
      console.log(store)
      this.$router.push({ name: 'Details', params: { store: store } })
    }
  }
}
</script>

<style>
.sectionUl{
  background-color: #3E3E3E;
  min-height: 400px;
}
.sectionCen{
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-content: space-around;
  flex-wrap: wrap;
}
.item{
  width: 300px;
  height: 300px;
  margin: 80px 30px;
  background-color: aliceblue;
}
</style>
