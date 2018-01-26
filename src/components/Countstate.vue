<template>
    <div>
        <h2>{{msg}}</h2>
       <hr/>
        <h3>之前的写法：{{$store.state.count}}</h3>
        <h3>简易写法：{{count}}</h3>

        
        <p>
            <button @click="$store.commit('add')">增加</button>
            <button @click="$store.commit('reduce')">减少</button>
           
        </p>
      
    </div>
</template>

<script>
    import store from '@/vuex/store';
    import { mapState } from 'vuex';
    export default{
        data(){
            return {
                msg:'2、state 状态',
            }
        },
        /* computed:{// 一、通过computed的计算属性直接赋值 
            count(){
                return this.$store.state.count;
            }
        }, */
       /*  computed:mapState({//二、通过mapState的对象来赋值
            count:state=>state.count //function(state){return state.count}
        }), */
        computed:mapState([//三、通过mapState的数组来赋值 
            "count" // 映射 this.count 为 store.state.count
        ]),
        store,
    
    }
</script>