<template>
<div>
    <div>个人中心</div>
    <p>
        <button @click="onlogin">转到登陆界面</button>
    </p>
</div>
</template>

<script>
export default {
    data(){
        return{

        }
    },

    methods:{
        onlogin(){
            console.log("转到登陆界面", this.$router)
            this.$router.push({
                path:'/login',
                query:{
                    from:"个人中心",
                    text:"检查到没有登陆"
                }
            })
        }
    },
}
</script>


<style lang="scss">

</style>