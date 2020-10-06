<template>
  <v-app>
    <v-card class="overflow-hidden">
      <TopBar></TopBar>

      <v-sheet
        id="scrolling-techniques-7"
        class="overflow-y-auto"
        max-height="1000"
      >
        <v-btn
          class="mb-15"
          fab
          dark
          large
          color="cyan"
          bottom
          right
          absolute
          @click="clickReload"
        >
          <v-icon>R</v-icon>
        </v-btn>
        <v-container style="height: 1000px;">
          <router-view/>
        </v-container>
      </v-sheet>
    </v-card>
  </v-app>
</template>

<script>
import firebaseInit from './firebaseInit'
import TopBar from './components/TopBar'
import { reloadAc } from './assets/reload.svg'

export default {
  name: 'App',
  data: () => ({
    icons: {
      reloadAc
    }
  }),
  components: {
    TopBar
  },
  created () {
    console.log('Call the Firebase store/doc')
    this.loadList()
  },
  methods: {
    clickReload () {
      location.reload()
    },
    loadList () {
      firebaseInit.collection('store').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // `${doc.id} => ${doc.data()}`
          var objName = doc.data().placeId
          var obj = JSON.stringify(doc.data())
          localStorage.setItem(objName, obj)
        })
      })
      localStorage.removeItem('loglevel:webpack-dev-server')
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  min-width: 1400px;
  color: rgb(39,39,39);
}
a, ul, li {
  text-decoration: none;
  list-style-type: none;
}
.font_black{ font-weight: 900; }
.font_bold{ font-weight: 700; }
.font_medium{ font-weight: 500; }
.font_regular{ font-weight: 400; }
.font_right{ font-weight: 300; }

#app {
  font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
