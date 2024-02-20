<template>
  <div class="login">
    <form @submit.prevent="SignUp">
    <h3>Зарегистрироваться</h3>
    <label>
      ФИО
      <input type="text" placeholder="Фамилия Имя Отчество" v-model="form.fio" required>
    </label>
    <label>
      Email
      <input type="email" placeholder="эл. почта" v-model="form.email" required>
    </label>
    <label>
      Пароль
      <input type="password" placeholder="пароль" v-model="form.password" required >
    </label>
    <div class="actions">
      <button><router-link  to="/" class="rout">ОТМЕНА</router-link></button>
      <button type="submit">ЗАРЕГИСТРИРОВАТЬСЯ</button>
      
    </div>
  </form>
  <p v-if="errors">{{errors}}</p>
</div>
</template>

<script>
export default {
name: 'LoginView',
data() {
  return {
    form: {
      fio: '',
      email: '',
      password: '' 
    },
    errors: ""
  }
},
methods: {
  async SignUp(){
    const res = await fetch('https://jurapro.bhuser.ru/api-shop/signup',{
      method: "POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fio:this.form.fio,
        email:this.form.email,
        password:this.form.password
      })
    })

    const data = await res.json()
    if(res.status==201){
      this.errors =''
      console.log(data.data['user_token'])
      this.$store.dispatch('setToken',data.data['user_token'])
      localStorage.setItem('token',data.data['user_token'])
      this.$router.push('/');
    }
    else if(res.status==422){
      this.errors =''
      this.errors="Ошибка валидации полей"
      
    }
  }
}
}

</script>
<style>
  form{
    display:flex;
    flex-direction: column;
    gap:10px;
    
  }

   button{
        border-radius:20px;
        border:none;
        background-color:rgb(124, 124, 124);
        margin-top:20px;
        color:white;
        padding-left:20px;
        padding-right:20px;
        margin-left:10px
    }
</style>
