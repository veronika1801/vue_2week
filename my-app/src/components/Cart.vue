<template >
<div v-if="cart">


<ul v-if="cart.length">
    <li v-for="(prod, index) in cart" :key="prod.id" > <b>НАЗВАНИЕ:</b> {{ prod.name }} <br> <b>ОПИСАНИЕ:</b> {{ prod.description }} <br> <b>ID ТОВАРА:</b> {{ prod.product_id }} <br> <b>ЦЕНА:</b> {{ prod.price }}<br>
        <button @click="addProd(prod.product_id)">+</button>
        <button @click="removeProd(prod.id)">-</button>
    </li>
   
</ul>


<h1 v-else>Нет товаров в корзине</h1>
 <button><router-link  to="/" class="rout">НАЗАД</router-link></button>

<button v-if="cart.length" @click="Order()"><router-link  to="/orders" class="rout">ЗАКАЗАТЬ</router-link></button>
</div>
</template>





<script>
export default {
    name: "Cart",
    computed: {
    cart(){
        const cart = this.$store.getters.getCart.data
        return cart
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
    async removeProd(index){
        if(this.token){
          const res = await fetch(`https://jurapro.bhuser.ru/api-shop/cart/${index}`,{
        method: "DELETE",
        headers:{
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${this.token}`
        }
      })
      const data = await res.json()
        this.$store.dispatch('getCart',this.token)
        }
    }, 
    async Order(){
        console.log(typeof this.token)
        if(this.token){
          const res = await fetch(`https://jurapro.bhuser.ru/api-shop/order`,{
        method: "POST",
        headers:{
          'Content-Type': 'application/json',
          'Authorization' : `Bearer ${this.token}`
        }
      })
      const data = await res.json()
        this.$store.dispatch('getOrders',this.token)
        this.$store.dispatch('getCart',this.token)
        if(res.status==422){
          this.text="Ошибка, Корзина пуста"
          setTimeout(() => this.text="", 2000);
        }
        else if(res.status==201){
          this.text="Заказ совершён"
          setTimeout(() => this.text="", 2000);
        }
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
    padding: 20px;
    
    
}
li{
    
    margin-top:50px;
    padding: 20px;
    text-align: justify;
    color: white;
    background-color: rgb(239, 239, 239);
    color:black;
    width:400px;
    border-radius: 20px;
    
}
.rout{
  color: white;
  text-decoration:none;
   
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