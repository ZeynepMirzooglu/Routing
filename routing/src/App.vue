<template>
  <div>
<app-header/>
<div class="container"> 
<RouterView></RouterView>
<RouterView name="warning"></RouterView>
</div>
</div>
</template>
<script setup>
import {RouterLink,RouterView} from 'vue-router';
</script>
<style scoped>

</style>
