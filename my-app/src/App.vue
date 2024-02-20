<template>
  <nav>
    <router-link to="/">Каталог</router-link> |
    <span v-show="!userAuthed" >
      <router-link   to="/login">Авторизация</router-link> |
      <router-link  to="/register">Регистрация</router-link> |
    </span>
    <span v-show="userAuthed">
      <router-link to="/cart">Корзина</router-link> |
      <router-link >Заказы</router-link> |
      <button  @click="LogOut"><b>ВЫЙТИ</b></button>
    </span>

    
  </nav>
  <router-view/>
</template>
<script>
export default {
name: 'LoginView',
data() {
  return {
    form: {
      fio: '',
      email: '',
      password: '' ,
      token:null
    },
    errors: ""
  }
},
computed: {
        userAuthed() {
            return this.$store.getters.isAuthenticated
        }
    },
methods: {
  LogOut() {
    this.$store.dispatch('deleteToken').then(() => {
      this.$router.push('/')
    }
    ).catch((error) => {
                console.error('Logout failed:', error);
    });
  },
},

created(){
  this.$store.dispatch('getProducts')
if (localStorage.getItem('token')) {
      try {
        this.token = localStorage.getItem('token');
        this.$store.dispatch('setToken',this.token)
      } catch(e) {
        localStorage.removeItem('token');
      }
}
  console.log(this.token)
  this.$store.dispatch('getCart',this.token)
  this.$store.dispatch('getOrders',this.token)
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
