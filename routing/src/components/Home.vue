<template>
    <div>
    <div class="bg-light p-5 rounded-3 mb-4">
        <div class="container">
            <h1 class="fw-bold">Angular 17</h1>
            <p class="col-md-8 fs-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis odio quibusdam 
                reiciendis sed officiis expedita, natus pariatur tenetur aspernatur, ad excepturi 
                aliquid maiores cupiditate soluta facere ipsum reprehenderit error rerum.</p>
                <button class="btn btn-primary" @click="router.push('/articles')">Devamını Oku</button>
        </div>
    </div>
    <div class="container">
    <div class="row">
        <div class="col-md-6 bg-dark text-white p-5 rounded-3">
            <h2 class="">React Router</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolore voluptatum beatae aliquam, accusantium 
                amet porro excepturi possimus distinctio reprehenderit magni fugiat eaque, qui repellat dolor autem molestiae ut temporibus.</p> 
                <button class="btn btn-outline-light">Devamını Oku</button>   
        </div>
        <div class="col-md-6 bg-light p-5 rounded-3">
            <h2 class="">Vue Router</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum dolore voluptatum beatae aliquam, accusantium 
                amet porro excepturi possimus distinctio reprehenderit magni fugiat eaque, qui repellat dolor autem molestiae ut temporibus.</p> 
                <button class="btn btn-secondary" >Devamını Oku</button>   
        </div>
    </div>
</div>
</div>
</template>
<script setup>
import { useRoute, useRouter } from "vue-router";



const router = useRouter();
const route = useRoute();

// console.log(router,"router");
// console.log(route,"router");
</script>