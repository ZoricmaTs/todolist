<template>
  <div v-show="isShowNavBar" class="navbar">
    <span class="navbar_text">{{ login }}</span>
    <button @click="exit" class="btn btn-white">Выйти</button>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isShowNavBar: localStorage.token !== '',
      token: localStorage.token,
      login: localStorage.login,
      userId: localStorage.userId
    }
  },
  mounted() {
    if (localStorage.token) {
      this.token = localStorage.token
      this.isShowNavBar = true
    }
    if (localStorage.login) {
      this.login = localStorage.login
    }
    if (localStorage.userId) {
      this.userId = localStorage.userId
    }
  },
  created() {
    this.isShowNavBar = localStorage.token !== ''
  },
  methods: {
    exit() {
      localStorage.token = ''
      localStorage.login = ''
      localStorage.userId = ''
      this.token = ''
      this.login = ''
      this.userId = ''
      this.isShowNavBar = false
      location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50px;
}
.btn-white {
  background: white;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.29);
  border-radius: 6px;
  color: #4e9243;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  padding: 5px 15px;
  cursor: pointer;
  &:hover,
  &:focus {
    background: darkgray;
    box-sizing: border-box;
    color: white;
  }
  &:active {
    background: #6f6f6f;
    box-sizing: border-box;
    color: white;
  }
}
.navbar_text {
  color: white;
}
</style>
