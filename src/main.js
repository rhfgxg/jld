import { createApp, nextTick } from 'vue'
import App from './App.vue'


import routes from './route'

import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

const router=createRouter({
  'history':createWebHashHistory(),
  'routes': routes,
})

const session_id =true;

router.beforeEach((to,from,next)=>{
  console.log(to)
  if(! session_id && to.name != 'login'){
    console.log("跳转到登录页面")
      next({
        name:"login"
      })
  }
  next()
});

const app = createApp(App)

app.use(router);


app.mount('#app')
