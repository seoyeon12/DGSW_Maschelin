<template>
    <v-app-bar
        absolute
        :color="color"
        elevate-on-scroll
        scroll-target="#scrolling-techniques-7"
    >
        <div class="d-flex align-center" id="logoHov" @click="MoveToHome">
            <LittleTitle></LittleTitle>
        </div>

        <v-spacer></v-spacer>

        <Login @loginMove='loginMove'></Login>
    </v-app-bar>
</template>

<script>
import Login from './Login'
import LittleTitle from './LittleTitle'

export default {
  data () {
    return {
      color: 'rgb(243,243,243,0.5)'
    }
  },
  components: {
    Login,
    LittleTitle
  },
  watch: {
    $route (to, from) {
      if (to.name === 'Home') {
        this.color = 'rgb(243,243,243,0.5)'
      } else {
        this.color = '#000000'
      }
    }
  },
  methods: {
    loginMove () {
      this.$router.push('/recommand')
    },
    MoveToHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
#logoHov:hover{
  cursor: pointer;
}
</style>
