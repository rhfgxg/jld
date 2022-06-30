
// const Home = { template: '<div>Home</div>' }
// const About = { template: '<div>About</div>' }
import home from './pages/home.vue' 
import channel from './pages/channel.vue'
import my from './pages/my.vue'
import player from './pages/player.vue'
import login from './pages/login.vue'


const routes = [
    { path: '/', component: home },
    { path: '/channel', component: channel },
    { path: '/my', component: my },
    { path: '/player', component: player },
    { path: '/player/:movie_id', component: player},
    { path: '/login',component: login, name:"login"},
  ]


  export default routes;