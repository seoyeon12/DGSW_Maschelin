<template>
  <div>
      <div>{{ storeName }}</div>
      <div>{{ storeAddress }}</div>
  </div>
</template>

<script>
export default {
  props: ['store'],
  data () {
    return {
      storItem: []
    }
  },
  created () {
    this.storItem = JSON.parse(this.store)
  },
  computed: {
    storeName () {
      return this.storItem.name
    },
    storeAddress () {
      return this.storItem.address
    }
  }
}
</script>

<style>

</style>
