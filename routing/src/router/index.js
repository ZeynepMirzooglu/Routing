import Article from '@/components/articles/Article.vue'
import Articles from '@/components/articles/Articles.vue'
import Contact from '@/components/contact/Contact.vue'
import Home from '@/components/Home.vue'
import NotFound from '@/components/404.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Alert from '@/components/Alert.vue'
import Login from '@/components/Login.vue'

const checkAuth =()=>{
  const isAuth =true;
  if(!isAuth){
    return '/login'
  }
}
const isAdmin =()=>{
  const isAdmin =true;
  if(!isAdmin){
    return '/'
  }
}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/articles/:articleId',
      component: Article,
     // beforeEnter: [checkAuth,isAdmin]
      
    },
    {
      path: '/articles',
      component: Articles
    },
    ,
    {
      path: '/contact',
      name:'contact',
      components: {
        default:Contact, 
        warning: Alert
      },
    },
    {
      path:'/:notfound(.*)',
      component:NotFound
    },
    {
      path:'/login',
      component:Login
    }
    
  ],
  linkActiveClass:'active'
})

//Global kontrol
// router.beforeEach( (to,from) => {
//   const isAuth =true;
//   if(to.path!=='/login' && !isAuth){
//     return '/login';
//   }
//   if(to.path ==='/login' && isAuth){
//     return '/';
//   }
//   return true;
// });



export default router
