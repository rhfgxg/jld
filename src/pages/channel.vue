<template>
<div> 
    <ul class="channel-list">
        <li v-for="item in channels" class="channel-item" :key="item.id" 
        @click="onOpenChannel(item)"
        :style="{'background-image':'url('+item.url+')'}">
            <span>#{{item.name}}#</span>
        </li>
    </ul>
</div>
</template>

<script>
export default {

    data(){
        return{
            channels:[
                {name:'创意',url:'src/assets/img/创意.jpeg',id:1},
                {name:'励志',url:'src/assets/img/励志.jpeg',id:2},
                {name:'搞笑',url:'src/assets/img/搞笑.jpeg',id:3},
                {name:'运动',url:'src/assets/img/运动.jpeg',id:4},
                {name:'旅行',url:'src/assets/img/旅行.jpeg',id:5},
                {name:'爱情',url:'src/assets/img/爱情.jpeg',id:6},
                {name:'广告',url:'src/assets/img/广告.jpeg',id:7},
                {name:'动画',url:'src/assets/img/动画.jpeg',id:8},
                {name:'剧情',url:'src/assets/img/剧情.jpeg',id:9},
                {name:'音乐',url:'src/assets/img/音乐.jpeg',id:10},
                {name:'科幻',url:'src/assets/img/科幻.jpeg',id:11},
                {name:'纪录',url:'src/assets/img/纪录.jpeg',id:12},
                {name:'预告',url:'src/assets/img/预告.jpeg',id:13},
                {name:'混剪',url:'src/assets/img/混剪.jpeg',id:14},
                {name:'实验',url:'src/assets/img/实验.jpeg',id:15},
                {name:'生活',url:'src/assets/img/生活.jpeg',id:16},
                {name:'时尚',url:'src/assets/img/时尚.jpeg',id:17},
                {name:'汽车',url:'src/assets/img/汽车.jpeg',id:18},
                {name:'游戏',url:'src/assets/img/游戏.jpeg',id:19},
                {name:'美食',url:'src/assets/img/美食.jpeg',id:20},
               
            ]
        }
    },
    methods:{
        onOpenChannel(item){
            console.log("打开指定的频道页。",item)
            this.$router.push({
                path:'/',
                query:{
                    channel_id:item_id,
                    channel_name:item_name,
                }
            })
        }
    },
}
</script>


<style lang="scss">
.channel-list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 0;
    margin-top: 0px;
    .channel-item{
        display: flex;
        width: 50%;
        height: 440px;
        flex-direction: row;
        align-content: center;
        align-items: center;
        justify-content: center;
        font-size: 50px;
        color: white;
    }
}
</style>