<template>
  <div id="login">
      <div class="form" v-show="!isActivity">
          <button id="btn" @click="login()">로그인</button>
          <div id="moveBtn">
            <router-link to="/recommand" id="recommand_btn">장소 추천하기</router-link>
          </div>
      </div>
      <div class="form" v-show="isActivity">
          <span>{{ welcomeStr }}</span>
          <button id="btn" @click="logout()">로그아웃</button>
      </div>
  </div>
</template>

<script>
import firebase from 'firebase'

// Sign in using a popup. 팝업창 방식
var provider = new firebase.auth.FacebookAuthProvider()
provider.addScope('public_profile, email')
firebase.auth().useDeviceLanguage()

export default {
  data () {
    return {
      name: '',
      isActivity: false
    }
  },
  created () {
    this.checkingLogin()
  },
  computed: {
    welcomeStr () {
      return name + ' 님, 환영합니다.'
    }
  },
  methods: {
    checkingLogin () {
      var name = sessionStorage.getItem('user_name')
      if (name == null) {
        console.log('It is Null')
      } else {
        this.isActivity = true
        this.name = name
      }
    },
    login () {
      firebase.auth().signInWithPopup(provider).then(result => {
        // This gives you a Facebook Access Token.
        var token = result.credential.accessToken
        // The signed-in user info.
        var user = result.user
        console.log(token)
        console.log(user)
        this.name = user.displayName
        sessionStorage.setItem('user_name', this.name)
        this.isActivity = true
      }).catch(function (error) {
        console.log(error)
        alert('에러 : ' + error.message)
      })
    },
    logout () {
      this.isActivity = false
      firebase.auth().signOut().then(function () {
        console.log('Successful Logout')
        sessionStorage.clear()
      }).catch(function (error) {
        console.log('Failed Logout')
        console.log(error)
      })
    }
  }
}
</script>

<style>
#login{
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  z-index: 1;
}
</style>
