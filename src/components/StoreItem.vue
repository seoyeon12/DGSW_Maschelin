<template>
<!-- <StoreItem.vue> 각각의 가게 정보를 담는 카드 컴포넌트 -->
<!-- StoreList.vue, Details.vue에서 호출됨. props : store, detail -->
  <v-card
    class="my-12"
    width="330"
  >
    <v-img
      height="250"
      :src="link"
    ></v-img>

    <v-card-title>{{ storeName }}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="rating"
          color="yellow darken-3"
          background-color="grey darken-1"
          dense
          half-increments
          readonly
          size="20"
        ></v-rating>

        <div class="grey--text ml-4">
          {{ storeRating }}
        </div>
      </v-row>

      <div class="my-2 subtitle-1 address" v-show="!isActive">
        {{ storeReson }}
      </div>
      <div class="my-2 subtitle-1" v-show="isActive">
        {{ storeReson }}
      </div>

      <div class="address" v-show="!isActive">{{ storeAddress }}</div>
      <div v-show="isActive">{{ storeAddress }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  // 한 가게의 정보, 정보 생략 여부( /StoreList, /details 어디서 불렸는지에 따라 다름. )
  props: ['store', 'detail'],
  data () {
    return {
      // 가게 정보
      storItem: [],
      // 정보 생략 여부 (ex. 주소, 추천이유 등)
      isActive: false,
      // 가게 별점
      rating: 0,
      // 가게 사진 링크
      link: ''
    }
  },
  created () {
    // 만약 props된 데이터, store가 undefined가 아니라면
    if (typeof this.store !== 'undefined') {
      this.storItem = JSON.parse(this.store)
      this.isActive = this.detail

      // 가게정보 안에 있는 별점의 총 합계 / 가게정보 안에 있는 별점의 개수
      var num = this.storItem.starTotal / this.storItem.starCounter
      // float로 저장 단, 소수 첫째자리까지.
      this.rating = parseFloat(num.toFixed(1))
      // console.log(this.rating + '  ==>  ' + this.storItem.starTotal + ' :: ' + this.storItem.starCounter)
      if (this.storItem.thumbnail === '') {
        this.link = 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
      } else {
        this.link = this.storItem.thumbnail
      }
    }
  },
  computed: {
    storeName () {
      return this.storItem.name
    },
    storeAddress () {
      return this.storItem.address
    },
    storeReson () {
      return this.storItem.reson
    },
    storeRating () {
      // 리뷰 즉, 별점이 0점이라면 0을 리턴한다.(Nan으로 값이 넘어오기 때문)
      if (!this.rating) {
        return '0'
      } else {
        return this.rating
      }
    }
  }
}
</script>

<style>
.address{
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
