<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import firebaseInit from './firebaseInit'

export default {
  created () {
    firebaseInit.collection('store').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // `${doc.id} => ${doc.data()}`
        var objName = doc.data().name
        var obj = JSON.stringify(doc.data())
        localStorage.setItem(objName, obj)
      })
    })
    localStorage.removeItem('loglevel:webpack-dev-server')
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

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
