<template>
  <Suspense>
    <div class="home">

      {{data}}
    </div>
  </Suspense>
  </template>
  
<script setup>
// @ is an alias to /src

import { reactive, computed } from 'vue'

import axios from "axios"
const url = "https://jurapro.bhuser.ru/api-shop/products"


const data = reactive( await axios.get(url))




  </script>