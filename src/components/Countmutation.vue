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
    import { mapState,mapMutations } from 'vuex';
    export default{
        data(){
            return {
                msg:'3、mutations 状态',
            }
        },
        computed:mapState(["count"]),
        methods:mapMutations(['add2','reduce2']),
        store,
    
    }
</script>