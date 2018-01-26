<template>
    <div>
        <h2>{{msg}}</h2>
       <hr/>
        <h3>简易写法：{{count}}</h3>

        
        <p>
            <button @click="$store.commit('add2',10)">增加</button>
            <button @click="reduce2">减少</button>
           
        </p>  
      
    </div>
</template>

<script>
    import store from '@/vuex/store';
    import { mapState,mapMutations,mapGetters } from 'vuex';
    export default{
        data(){
            return {
                msg:'4、getters过滤和加工',
            }
        },
        computed:{
            ...mapState(["count"]),/* 扩展运算符 */
            /* count(){
               return this.$store.getters.count;
            } */
            ...mapGetters(['count'])
        },
        methods:mapMutations(['add2','reduce2']),
        store,
    
    }
</script>