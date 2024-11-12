<template>
    <div>
        <div class="row g-4">
            <div class="col-lg-3 col-md-6 col-12" v-for="article in data.articles" :key="article.id">
                <div class="card shadow-sm">
                    <img :src="article.img + '?' +article.id" class="card-img-top">
                    <div class="card-body">
                      <h5 class="card-title">{{article.title}}</h5>
                      <p class="card-text summary">{{article.summary}}</p>
                      <router-link :to="'/articles/' + article.id">
                       <button class="btn btn-outline-secondary">Devamını Oku</button>
                      </router-link>
                    </div>
                  </div>
            </div>
        </div>
       
    </div>
    
</template>
<script setup>
import axios from 'axios'
import {onMounted,reactive} from 'vue';

const data = reactive({
  articles:[]
})

onMounted(() => {
  axios.get('http://localhost:3001/articles').then(response =>{
    data.articles=response.data
    //console.log(response)
  }).catch((err)=>{console.error(err)});
});

</script>
<style scoped>
.summary{
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>