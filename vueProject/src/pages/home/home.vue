<!--
 * @Author: mhy
 * @LastEditors: mhy
 * @Description: 主页面面
-->
<template>
<div>
    1
    <router-view></router-view>
    2
    <el-container>
        <el-aside>
            <el-menu ref="bigmenu" :default-active="$route.path" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" unique-opened router>
                <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
                    {{ item.navItem }}
                </el-menu-item>
            </el-menu>
        </el-aside>
3
        <el-container>4
            <el-header>5
            </el-header>
6
            <el-main>
7
            </el-main>
        </el-container>
    </el-container>
</div>
</template>

<script>
export default {
    //import引入的组件需要注入到对象中才能使用
    name: 'home',
    data() {
        return {
           navList:[
			   {name:'/findProject',navItem:'发现项目'},
			   {name:'/communityActivity',navItem:'社区动态'},
			   {name:'/publishProject',navItem:'发布项目'},
			   {name:'/personalCenter',navItem:'个人中心'},
			   {name:'/manageCenter',navItem:'管理员中心'},
		  ]
        }
    },
};
</script>
<style lang="scss" scoped>
.el-container {
  height: 100%;
  .el-aside-container {
    height: 100%;
    .el-menu-container {
      height: 100%;
    }
  }
  .header-container {
    text-align: right;
    font-size: 12px;
    background-color: #545c64;
  }
}
</style>