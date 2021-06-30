<!--
 * @Author: mhy
 * @Date: 2021-06-30
 * @LastEditors: mhy
-->
应用层级的状态应该集中到单个 store 对象中。
==============================
├── index.html
├── main.js
├── api
│   └── ... # 抽取出API请求
├── components
│   ├── App.vue
│   └── ...
└── store
    ├── index.js          # 我们组装模块并导出 store 的地方
    ├── actions.js        # 根级别的 action
    ├── mutations.js      # 根级别的 mutation
    └── modules
        ├── mymodules.js       # 我编写的模块
        └── products.js   # 产品模块
===============================
conststore =newVuex.Store({  state: { ... },  mutations: { ... },  actions: { ... },  plugins: [vuexLocal.plugin]})
 
通过以上设置，在各个页面之间跳转，如果刷新某个视图，数据并不会丢失，依然存在，并且不需要在每个 mutations 中手动存取 storage 。
 
vuex-persist 的详细属性：
 
属性类型描述
 
keystring将状态存储在存储中的键。默认: 'vuex'
 
storageStorage (Web API)可传localStorage, sessionStorage, localforage 或者你自定义的存储对象. 接口必须要有get和set.默认是: window.localStorage
 
saveStatefunction (key, state[, storage])如果不使用存储，这个自定义函数将保存状态保存为持久性。
 
restoreStatefunction (key[, storage]) => state如果不使用存储，这个自定义函数处理从存储中检索状态
 
reducerfunction (state) => object将状态减少到只需要保存的值。默认情况下，保存整个状态。
 
filterfunction (mutation) => boolean突变筛选。看mutation.type并返回true，只有那些你想坚持写被触发。所有突变的默认返回值为true。
 

