<template>
    <div>
        <h2>{{msg}}</h2>
       <hr/>
        <h3>{{$store.state.count}}</h3>

        
        <p>
            <button @click="$store.commit('add')">增加</button>
            <button @click="$store.commit('reduce')">减少</button>
            <button @click="show">打印</button>
        </p>
      
    </div>
</template>

<script>
    import store from '@/vuex/store';
    export default{
        data(){
            return {
                msg:'1、Countvue',
            }
        },
        store,
        methods:{
            show(){
                console.log(this.$store)
                console.log(this)
            }
        }
    }
</script>