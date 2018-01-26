<template>
    <div>
        <h2>{{msg}}</h2>
       <hr/>
        <h3>简易写法：{{count}}</h3>

        
        <p>
            <button @click="$store.commit('add2',10)">增加</button>
            <button @click="reduce2">减少</button>
        
        </p>  
      <span>actions：</span>
       <p>
            <button @click="addAction">增加</button>
            <button @click="reduceAction">减少</button>
        
        </p> 
    </div>
</template>

<script>
    import store from '@/vuex/store';
    import { mapState,mapMutations,mapGetters, mapActions } from 'vuex';
    export default{
        data(){
            return {
                msg:'5、actions异步修改',
            }
        },
        computed:{
            ...mapState(["count"]),/* 扩展运算符 */
            /* count(){
               return this.$store.getters.count;
            } */

           /*  ...mapGetters(['count']) */
        },
        methods:{
            ...mapMutations(['add2','reduce2']),
            ...mapActions(['addAction','reduceAction'])
        },
        store,
    
    }
</script>