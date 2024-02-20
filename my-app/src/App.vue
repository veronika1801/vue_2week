<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <span v-show="!userAuthed" >
      <router-link  >Авторизация</router-link> |
      <router-link  to="/register">Регистрация</router-link> |
    </span>
    <span v-show="userAuthed">
      <router-link >Корзина</router-link> |
      <router-link >Заказы</router-link> |
      <button  ><b>ВЫЙТИ</b></button>
    </span>

    
  </nav>
  <router-view/>
</template>

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
