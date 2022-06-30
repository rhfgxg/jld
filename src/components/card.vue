<template>
    <div class="card">
            
        <div class="card-info">{{type}}/{{len}}</div>
        <div class="card-name">{{name}}</div>
    </div>
</template>

<script>
export default {
    props:{
        type:String,
        url:String,
        len:String,
        name:String,
    },
    data(){
        return{
           
        }
    }
    
}
</script>

<style lang="scss">
.card{
    height: 300px;
    background-color: #313131;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    color: white;
    padding: 10px;
    .card-info{

    }
    .card-name{
        font-size: 18px;
        font-weight: 800;
    }
}

</style>