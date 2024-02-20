<template >
    <div v-if="prods">
    
    <ul class="orders" v-if="prods.length!=0">
        <li class="order" v-for="(prod, index) in prods">
            <ul>
                <p>ЗАКАЗ № <b>{{ index+1 }}</b></p>
               
                <li>ID ТОВАРОВ: <ul class="products">
                    <li v-for="i in  prod.products">Id товара:<b> {{ i }}</b></li>
                </ul>
                    
                </li>
                <li>ЦЕНА ЗАКАЗА:<b> {{ prod.order_price }}</b></li>
            </ul>
        </li>
    </ul>
    <h1 v-else>Нет заказов</h1>
     <button><router-link  to="/" class="rout">НАЗАД</router-link></button>
</div>
    </template>
    
    
    <script>
    export default {
        name: "Orders",
        computed: {
        prods(){
            return this.$store.getters.getOrders.data
        },
        token(){
            return this.$store.getters.getToken
        }
      },
      methods:{ 
      },
    
    
    }
    
    </script>
    
    <style scoped> 
    #app{
        color: black;
         
    }
    .orders{
        list-style-type: none;
        
        padding: 20px; 
        display: flex;
        flex-wrap: wrap;
        gap:60px;
        color: black;
        
    }
    .order{
        display: flex;
        
        margin-top:50px;
        padding: 10px;
        border-radius: 20px;
        color: rgb(64, 64, 64);
        background-color: rgb(239, 239, 239);
        width:200px;
        
    }
    .products{
        padding-bottom: 10px;
        color: black;
        background-color: rgb(239, 239, 239);
    }
    li{
        margin-top:10px;
        padding: 0;
        width: auto;
        height: auto;
        text-align: start;
        list-style-type: none;
        
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