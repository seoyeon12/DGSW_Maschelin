<template>
  <div id="login">
      <div class="form" v-show="!isActivity">
        <v-btn @click="login()" depressed color="primary">
          페이스북 로그인
        </v-btn>
      </div>
      <div class="form" v-show="isActivity">
        <span style="margin-right:20px">{{ welcomeStr }}</span>
        <v-btn v-show="ReActivity" @click="recommandBtn()" depressed outlined color="white">
          맛슐랭 추천하기
        </v-btn>
        <v-btn class="ml-3" @click="logout()" depressed outlined color="white">
          로그아웃
        </v-btn>
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
      isActivity: false,
      ReActivity: true
    }
  },
  created () {
    this.checkingLogin()
  },
  computed: {
    welcomeStr () {
      return this.name + ' 님, 환영합니다.'
    }
  },
  watch: {
    $route (to, from) {
      if (to.name === 'Recommand') {
        this.ReActivity = false
      } else {
        this.ReActivity = true
      }
    }
  },
  methods: {
    checkingLogin () {
      var name = sessionStorage.getItem('user_name')
      if (name == null) {
        alert('로그인 후 이용가능합니다.')
        this.moveToPage()
      } else {
        this.isActivity = true
        this.name = name
      }
    },
    login () {
      firebase.auth().signInWithPopup(provider).then(result => {
        // This gives you a Facebook Access Token.
        // var token = result.credential.accessToken
        // The signed-in user info.
        var user = result.user
        // console.log(token)
        this.name = user.displayName
        sessionStorage.setItem('user_name', this.name)
        sessionStorage.setItem('user_id', user.uid)
        this.isActivity = true
      }).catch(function (error) {
        console.log(error)
        alert('로그인 실패 에러 : ' + error.message)
      })
    },
    logout () {
      if (this.checkLogout()) {
        this.isActivity = false
        firebase.auth().signOut().then(function () {
          // console.log('Successful Logout')
          // alert('로그아웃하였습니다.')
          alert('로그아웃되었습니다. 홈 화면으로 돌아갑니다.')
          sessionStorage.clear()
        }).catch(function (error) {
          // console.log('Failed Logout')
          alert('로그아웃에 실패했습니다. 홈 화면으로 돌아갑니다.')
          console.log(error)
        })
        this.moveToPage()
      }
    },
    checkLogout () {
      var ckeck = confirm('로그아웃 하시겠습니까?')
      console.log(ckeck)
      return ckeck
    },
    recommandBtn () {
      this.$emit('loginMove')
      // this.$router.push('/recommand')
    },
    moveToPage () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
#login{
  color: #ffffff;
}
</style>
