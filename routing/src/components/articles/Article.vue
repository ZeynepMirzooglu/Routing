<template>
    <div>
        <router-link to="/articles/5">5 numaralı yazıya git</router-link>
    <div class="row bg-dark text-white p-4 rounded-3 mb-4">
        <div class="col-md-6">
            <h1 class="fst-italic display-4">Lorem</h1>
            <p class="my-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Harum ut ea expedita adipisci nostrum. Enim autem illo debitis amet iure tenetur! 
                Quasi culpa voluptate modi itaque nulla ipsum dolore quam.</p>
        </div>
       
    </div>
    <div class="row" v-if="article">
        <div class="col-md-8">
            <h3 class="fst-italic border-bottom pb-4 mb-4">{{article.title}}</h3>
            <div>
                <p>{{ article.date }} <strong>{{article.author}}</strong></p>
                <p>{{article.summary}}</p>
                 
            </div>

        </div>
        <div class="col-md-4">
            <div class="bg-light p-4 rounded-3">
            <h4 class="fst-italic">Lorem</h4>
            <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi dignissimos, atque consequatur molestias commodi 
                nesciunt ullam culpa labore maiores accusantium! Numquam beatae ex expedita nulla consequuntur facere nam fuga voluptas?</p>
            </div>
        </div>
    </div>
</div>
</template>
<script setup>
import axios from "axios";
import { useRoute,onBeforeRouteUpdate } from "vue-router";
import{onMounted, ref,watch} from 'vue'

const route = useRoute();
//console.log(route.params.articleId);

const article = ref({})
const loadArticle =(articleId)=>{

    axios.get(`http://localhost:3001/articles/${articleId}`).then(res=>{
        article.value = res.data
       
    })
}

onMounted(() => {
  loadArticle(route.params.articleId)
});

// watch(
//   () => route.params.articleId,
//   async (newId) => {
//     loadArticle(newId);
//   },);
onBeforeRouteUpdate(async(to,form)=>{
    loadArticle(to.params.articleId)
})

</script>