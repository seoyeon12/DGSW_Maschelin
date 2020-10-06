<template>
  <div class="recommand">
    <v-card
    class="mx-auto mt-15"
    max-width="700"
    >
      <v-card-title class="text-h2 font-weight-bold">맛슐랭 추천하기</v-card-title>

      <v-card-text>
        <v-text-field
          class="mx-3 my-3 pt-2"
          label="가게이름"
          :rules="rules"
          hide-details="auto"
          v-model="name"
        ></v-text-field>
        <v-text-field
          class="mx-3 my-3 pt-2"
          label="주소"
          :rules="rules"
          hide-details="auto"
          v-model="address"
        ></v-text-field>
        <v-text-field
          class="mx-3 my-3 pt-2"
          label="장소 ID"
          :rules="rules"
          hide-details="auto"
          v-model="placeId"
        ></v-text-field>
        <v-textarea
          class="mx-3 my-3 pt-2"
          clearable
          clear-icon="mdi-close-circle"
          label="추천하는 이유"
          :rules="rules"
          hide-details="auto"
          v-model="reson"
        ></v-textarea>
        <v-row class="float-right mr-10">
          <v-btn color="dark" dark rounded @click="addStore">
            추천하기
          </v-btn>
        </v-row>
      </v-card-text>
    </v-card>

    <v-btn class="mx-lg-auto" text color="primary">
      <router-link to="/">HOME으로 돌아가기</router-link>
    </v-btn>
  </div>
</template>

<script>
import firebaseInit from '../firebaseInit'

export default {
  data: () => ({
    rules: [
      value => !!value || '필수 입력입니다. 입력해주세요.'
    ],
    rating: 0,
    name: '',
    reson: '',
    address: '',
    placeId: ''
  }),
  methods: {
    checkEmpty () {
      if (this.name === '' || this.reson === '' || this.address === '' || this.placeId === '') {
        return false
      } else {
        return true
      }
    },
    checkAgree () {
      return confirm('추천하시겠습니까?')
    },
    addStore () {
      this.checkEmpty()

      var data = {
        address: this.address,
        name: this.name,
        placeId: this.placeId,
        reson: this.reson,
        starCounter: 0,
        starTotal: 0
      }

      if (this.checkEmpty && this.checkAgree()) {
        var storeRef = firebaseInit.collection('store').doc(this.placeId).set(data)

        storeRef.then(function () {
          console.log('Document successfully written!')
        }).catch(function (error) {
          console.error('Error writing document: ', error)
        })
        this.moveToPage()
      } else {
        alert('취소되었습니다. 또는 필수항목을 전부 입력해주세요.')
      }
    },
    moveToPage () {
      alert('등록되었습니다. 반영까지 일부 시간이 소모됩니다.')
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
