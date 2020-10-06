<template>
  <!-- <h2>{{ review }}</h2> -->
  <div>
    <v-card
      class="my-12 mx-auto"
      max-width="450"
    >
      <v-card-title></v-card-title>

      <v-card-text>
        <div class="my-2 subtitle-1 address">
          {{ name }}
        </div>

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

        <div class="my-2 subtitle-1 address">
          {{ menu }}
        </div>

        <div class="address">{{ context }}</div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ['review'],
  data () {
    return {
      item: [],
      rating: 0,
      menu: '',
      context: '',
      name: ''
    }
  },
  created () {
    this.readyToData()
  },
  methods: {
    readyToData () {
      this.item = JSON.parse(this.review)
      this.rating = Number(this.item.star)
      this.menu = this.item.menu
      this.context = this.item.context
      this.name = this.item.name
    }
  }
}
</script>

<style>

</style>
