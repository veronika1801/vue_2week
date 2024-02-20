<template>
<ul>
    <li class="prod" v-for="(prod, index) in prods" :key="prod.id"><b>ID:</b> {{ prod.id }} <br> <b>НАЗВАНИЕ:</b> {{ prod.name }} <br> <b>ОПИСАНИЕ:</b> {{ prod.description }} <br> <b>ЦЕНА:</b> {{ prod.price }}<br>
    <button v-if="token" @click="addProd(prod.id)"> ДОБАВИТЬ В КОРЗИНУ</button>
    
    </li>
</ul>
</template>


<script scoped>
export default {
    name: "Products",
    computed: {
    prods(){
        return this.$store.getters.getProducts.data
    },
    token(){
        return this.$store.getters.getToken
    }
  },
  methods:{
    async addProd(index){
        if(this.token){
          const res = await fetch(`https://jurapro.bhuser.ru/api-shop/cart/${index}`,{
        method: "POST",
        headers:{
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${this.token}`
        }
      })
      const data = await res.json()
        this.$store.dispatch('getCart',this.token)
        }
    },    
  },


}

</script>

<style scoped>
ul{
    list-style-type: none;
    gap:70px;
    display: flex;
    flex-wrap: wrap;
    
    padding:20px;
    
}
li{
    
    padding: 20px;
    text-align: justify;
    color: white;
    background-color: rgb(239, 239, 239);
    color:black;
    width:400px;
    border-radius: 20px;
    
}
.prod{
    margin-top:50px;
    padding: 20px;
    color: black;
    background-color:rgb(239, 239, 239);
    border-radius:20px;
    text-align: start;
}
button{
  border-radius:20px;
  border:none;
  background-color:rgb(124, 124, 124);
  margin-top:20px;
  color:white;
  padding:7px
}
</style>