<template>
<div>
    <p class="nav">
    <router-link to="/"> 首页</router-link>
    <router-link to="/channel"> 频道列表</router-link>
    <router-link to="/my"> 个人中心</router-link>
    <router-link to="/player"> 播放器</router-link>
    <router-link to="/player/6666?user=admin"> 播放器某视频</router-link>
    <router-link to="/player/88666?type=baidu"> 播放器某视频</router-link>
    </p>
  
  <router-view></router-view>
</div>
</template>

<script>
export default {
    
}
</script>


<style lang="scss">
.nav{
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  background-color: #2c3e50;
  line-height: 50px;
  margin: 0px;
  a{
    color: white;
    text-decoration: none;
  }
}
</style>