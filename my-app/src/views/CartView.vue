<template>
<div class="home">

    <Cart/>

    <h1 v-if="text">{{ text }}</h1>
</div>
</template>

<script>
import Cart from "../components/Cart.vue"

export default {
name: 'CartView',
computed: {
    token(){
        return this.$store.getters.getToken
    }
},
components: {
    Cart
},
data() {
  return {
    text: ""
  }
},
methods:{
 
}
}
</script>
