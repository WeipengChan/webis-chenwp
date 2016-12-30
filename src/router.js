import VueRouter from 'vue-router';
import Vue from 'vue';
// 引入组件
import admin from './pages/admin/admin';
import login from './pages/login/login';
import index from './pages/index/index';
import redisServerManager from './pages/redis-server-manager/redis-server-manager';

Vue.use(VueRouter);

// 创建一个路由器实例
// 并且配置路由规则
export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/login',
    component: login
  }, {
    path: '/admin',
    component: admin
  }, {
    path: '/index',
    component: index
  }, {
    path: '/redis-server-manager',
    component: redisServerManager
  }]
})
