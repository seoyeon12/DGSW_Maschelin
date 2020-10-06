<template>
  <div class="reviews">
    <div v-for="(review, index) in reviewList" :key="index">
      <reviewItem v-bind:review="review"></reviewItem>
    </div>
 </div>
</template>

<script>
import firebaseInit from '../firebaseInit'
import reviewItem from './ReviewItem'

export default {
  props: ['placeId'],
  components: {
    reviewItem
  },
  data () {
    return {
      reviewList: []
    }
  },
  created () {
    console.log('LoadReview Created Start')
    this.loadReview()
  },
  methods: {
    loadReview () {
      var docRef = firebaseInit.collection('store').doc(this.placeId)

      docRef.collection('review').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        // console.log(doc.id + '  =>  ' + JSON.stringify(doc.data()))
          this.reviewList.push(JSON.stringify(doc.data()))
        })
      })

      console.log(this.reviewList)
    }
  }
}
</script>

<style>
.reviews{
  width: 100%;
}
</style>
