# vuex

### 1、Countvue.vue中 简单的vuex状态管理

    1.首先在store.js中定义好变量和方法：
    const state = {
        count:1 /* 共用的数据 */
    }

    const mutations = {
        add(state){
            state.count++;
        },
        reduce(state){
            state.count--;
        }
    }

    export default new Vuex.Store({ //导出变量和方法
        state,
        mutations
    });

    2.然后在Countvue.vue中引入并使用：

        模板里调用：
            <h3>{{$store.state.count}}</h3>
            <button @click="$store.commit('add')">增加</button>

        引入：
        import store from '@/vuex/store';
        export default{
            data(){
                return {
                    msg:'hello vuex',
                }
            },
            store,
        }


### 2、Countstate.vue中 读取state
#### state赋值给我们模板里data中的值的三种方式

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
### 3、Countmutation.vue中 修改状态

    Vuex提供了commit方法来修改状态，


    store.js:

    const mutations = {
        add2(state,n){/* state:默认的，n:参数 */
            state.count += n;
        },
    }     


    template:

    <button @click="$store.commit('add2',10)">增加</button> 
    <button @click="reduce2">减少</button>//可以直接写reduce2
    export default{
       ...
        methods:mapMutations(['add2','reduce2']),
        store,
        ...
    }  
### 4、getters过滤和加工，Countgetters.vue。 

    扩展运算符：
        computed:{
            ...mapState(["count"]),/* 扩展运算符 */
            /* count(){
               return this.$store.getters.count;
            } */
            ...mapGetters(['count'])
        },
### 5、actions异步修改状态,Countactions.vue。 

    store.js:
    const actions = {
        addAction(context){
            context.commit('add3',20);
            setTimeout(()=>{context.commit('reduce3')},5000);
            console.log('action异步');
        },
        reduceAction({commit}){
            commit('reduce3')
        }
    }

    Countactions.vue:
        <p>
            <button @click="addAction">增加</button>
            <button @click="reduceAction">减少</button>
        </p> 
        
        methods:{
                ...mapMutations(['add2','reduce2']),
                ...mapActions(['addAction','reduceAction'])
        },
        
### 6、actions异步修改状态,Countmodule.vue,项目不够大不建议用。 

