
//本地数据持久化插件 并将缓存数据加密
import createPersistedState from "vuex-persistedstate"
import Vue from "vue"
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        // routers:{},
        // components:[],
    },
    modules:{
    },
    mutations: {
    },
    plugins: [createPersistedState({ //存储在本地当中
        // 指定持久化对象，不配置则数据全部持久化
        // reducer (state) {
        //     userInfo: state.userInfo
        //   }
        // }

        storage: window.sessionStorage,
    })]
})
// vuex-persist 的详细属性：
 
// 属性类型描述
 
// keystring将状态存储在存储中的键。默认: 'vuex'
 
// storageStorage (Web API)可传localStorage, sessionStorage, localforage 或者你自定义的存储对象. 接口必须要有get和set.默认是: window.localStorage
 
// saveStatefunction (key, state[, storage])如果不使用存储，这个自定义函数将保存状态保存为持久性。
 
// restoreStatefunction (key[, storage]) => state如果不使用存储，这个自定义函数处理从存储中检索状态
 
// reducerfunction (state) => object将状态减少到只需要保存的值。默认情况下，保存整个状态。
 
// filterfunction (mutation) => boolean突变筛选。看mutation.type并返回true，只有那些你想坚持写被触发。所有突变的默认返回值为true。