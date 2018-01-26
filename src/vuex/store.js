import Vue from 'vue';
import Vuex from 'vuex';
import { resolve } from 'path';
import { setTimeout } from 'timers';
Vue.use(Vuex);

const state = {
    count:1/* 共用的数据 */
}

const mutations = {
    add(state){
        state.count++;
    },
    reduce(state){
        state.count--;
    },
    add2(state,n){
        state.count += n;
    },
    reduce2(state){
        state.count--;
    },
    add3(state,n){
        /* state:默认的，n:参数*/
        state.count += n;
    },
    reduce3(state){
        state.count--;
    },
}

const getters = {
    count:function(state){
      return   state.count += 100;//先执行上面的增加或减少再通过过滤器；
    }/* state => state.count += 100 */
}

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

const moduleA = {
    state,mutations,getters,actions
}
const moduleB = {
    state,mutations,getters,actions
}

/* export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
}); */

/* 模块组 */
export default new Vuex.Store({
    modules:{a:moduleA}
});