<template>
<!-- <AddReview.vue> 리뷰 작성하기 컴포넌트입니다. -->
<!-- Details.vue에서 호출됨. props : placeId -->
  <v-card
    class="my-12 ml-8"
    width="350"
  >
    <v-card-title class="mx-auto">리뷰작성하기</v-card-title>

    <v-text-field
      class="mx-3 my-2 pt-2"
      label="추천메뉴"
      :rules="rules"
      hide-details="auto"
      v-model="menu"
    ></v-text-field>
    <v-textarea
      class="mx-3 my-2 pt-2"
      clearable
      clear-icon="mdi-close-circle"
      label="추천하는 이유"
      :rules="rules"
      hide-details="auto"
      v-model="context"
    ></v-textarea>

    <v-row class="mx-2 my-3" align="center">
      <v-card-subtitle> 별점 </v-card-subtitle>
      <v-rating
        v-model="rating"
        color="yellow darken-3"
        background-color="grey darken-1"
        empty-icon="$ratingFull"
        dense
        hover
        size="35"
      ></v-rating>
      <v-card-subtitle>{{ ratingNum }}</v-card-subtitle>
    </v-row>

    <v-row class="mx-2 float-right">
      <v-btn color="dark" dark rounded @click="Insert">
        추천하기
      </v-btn>
    </v-row>
  </v-card>
</template>

<script>
import firebaseInit from '../firebaseInit'

export default {
  props: ['placeId'],
  data: () => ({
    rules: [
      value => !!value || '필수 입력입니다. 입력해주세요.'
    ],
    rating: 0,
    menu: '',
    context: '',
    store: []
  }),
  computed: {
    ratingNum () {
      return this.rating + ' 점'
    }
  },
  created () {
    this.store = JSON.parse(localStorage.getItem(this.placeId))
    console.log(this.store)
  },
  methods: {
    updateRating () {
      this.store.starCounter += 1
      this.store.starTotal += this.rating
    },
    Insert () {
      var docRef = firebaseInit.collection('store').doc(this.placeId)
      var name = sessionStorage.getItem('user_name')
      var userid = sessionStorage.getItem('user_id')

      // // console.log(this.rating + ' : ' + this.menu + ' : ' + this.context)
      if (this.menu === '' || this.context === '' || this.rating === 0) {
        alert('작성부탁드립니다.')
      } else {
        this.updateRating()

        docRef.collection('review').add({
          menu: this.menu,
          context: this.context,
          star: this.rating,
          name: name,
          owner: userid,
          img: null
        }).then(function (Ref) {
          console.log('Document written with ID: ' + Ref.id)
        }).catch(function (error) {
          console.log('Error adding document: ' + error)
        })

        this.changeRating(docRef)
        this.menu = ''
        this.context = ''
        this.rating = 0
        this.$emit('reviewDone')
      }
    },
    changeRating (docRef) {
      this.updatelocal()

      return docRef.update({
        starCounter: this.store.starCounter,
        starTotal: this.store.starTotal
      }).then(function () {
        console.log('Document successfully written!')
      }).catch(function (error) {
        console.log('Error writing document: ' + error)
      })
    },
    updatelocal () {
      localStorage.setItem(this.placeId, JSON.stringify(this.store))
    }
  }
}
</script>

<style>

</style>
