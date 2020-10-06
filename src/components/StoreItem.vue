<template>
  <!-- <div>{{ storeName }}</div>
  <div>{{ storeAddress }}</div> -->
  <v-card
    class="my-12"
    max-width="350"
  >
    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
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
          {{ rating }}
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
  props: ['store', 'detail'],
  data () {
    return {
      storItem: [],
      isActive: false,
      rating: 0
    }
  },
  created () {
    if (typeof this.store !== 'undefined') {
      this.storItem = JSON.parse(this.store)
      this.isActive = this.detail

      var num = this.storItem.starTotal / this.storItem.starCounter
      this.rating = parseFloat(num.toFixed(1))
      // console.log(this.rating + '  ==>  ' + this.storItem.starTotal + ' :: ' + this.storItem.starCounter)
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
