import Vue from 'vue';
import Router from 'vue-router';
// FIXME 增加路由懒加载 配置路由分组打包

// import Home from './views/Home.vue';
// import About from './views/About.vue';
// import Login from './views/Login.vue';
// import Slot from './views/Slot.vue';
// import Bubble from './views/Bubble.vue';
// import Patch from './views/Patch.vue';

Vue.use(Router);
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: ()=>import('./views/Home.vue'),
            showMenu: true,
            redirect: '/index',
            meta: {
                icon: 'el-icon-location',
            },
            children: [
                {
                    path: '/index',
                    name: '首页',
                    component: ()=>import('@/components/admin/home/Index.vue'),
                    showMenu: true,
                    meta: {
                        icon: 'el-icon-s-grid',
                        keepAlive: false,
                    },
                },
                {
                    path: '/funmenu',
                    name: '功能菜单',
                    component: ()=>import('./views/Patch.vue'),
                    showMenu: true,
                    meta: {
                        icon: 'el-icon-remove',
                    },
                    children: [
                        {
                            path: '/funmenu/table',
                            name: '表格组件',
                            showMenu: true,
                            meta: {
                                icon: 'el-icon-s-marketing',
                            },
                            component: ()=>import('./views/Patch.vue'),
                            children: [
                                {
                                    path: '/funmenu/table/level',
                                    name: '多级表头',
                                    component: ()=>import('@/components/admin/home/TableLevel.vue'),
                                    showMenu: true,
                                    meta: {
                                        icon: 'el-icon-s-data',
                                        keepAlive: true,
                                    },
                                },
                                {
                                    path: '/funmenu/table/customize',
                                    name: '自定义列',
                                    component: ()=>import('@/components/admin/home/TableCustomize.vue'),
                                    showMenu: true,
                                    meta: {
                                        icon: 'el-icon-c-scale-to-original',
                                        keepAlive: false,
                                    },
                                },
                            ],
                        },
                        {
                            path: '/funmenu/charts',
                            name: '图表组件',
                            showMenu: true,
                            component: ()=>import('./views/Patch.vue'),
                            meta: {
                                icon: 'el-icon-pie-chart',
                            },
                            children: [
                                {
                                    path: '/funmenu/charts/trend',
                                    name: '趋势图',
                                    component: ()=>import('@/components/admin/home/TrendChart.vue'),
                                    showMenu: true,
                                    meta: {
                                        icon: 'el-icon-set-up',
                                        keepAlive: false,
                                    },
                                },
                                {
                                    path: '/funmenu/charts/stacked',
                                    name: '堆叠柱状图',
                                    component: ()=>import('@/components/admin/home/StackedChart.vue'),
                                    showMenu: true,
                                    meta: {
                                        icon: 'el-icon-odometer',
                                        keepAlive: true,
                                    },
                                },
                            ],
                        },
                        {
                            path: '/funmenu/form',
                            name: '常用表单',
                            showMenu: true,
                            component: ()=>import('@/components/admin/home/FormCommon.vue'),
                            meta: {
                                icon: 'el-icon-bell',
                                keepAlive: false,
                            },
                        },
                    ],
                },
            ],
        },
        {
            path: '/about',
            name: 'about',
            component: ()=>import('./views/About.vue'),
            showMenu: false,
            // 嵌套路由 一般用法 在views下面的组件中写上 <router-view></router-view>
            children: [
                // 当 /user/:id 匹配成功，
                // UserHome 会被渲染在 User 的 <router-view> 中
                {
                    path: '/about/test',
                    component: ()=>import('@/components/test1.vue'),
                },
                // ...其他子路由
            ],
        },
        {
            path: '/login',
            name: 'login',
            component: ()=>import('./views/Login.vue'),
            showMenu: false,
        },
        // slot插槽
        // {
        //     path: '/slot',
        //     name: 'slot',
        //     component: Slot,
        //     showMenu: true,
        // },
        // vue 事件冒泡捕获机制
        // {
        //     path: '/bubble',
        //     name: 'bubble',
        //     showMenu: true,
        //     component: Bubble,
        // }
    ],
});

// const login = false;

// 全局导航守卫
// router.beforeEach((to, from, next) => {
//     // 判断登录状态,登录的跳转 未登录的跳转到登录页面
//     // 判断登录状态
//     if (!login && to.path !== '/login') {
//         next({ path: '/login' });
//     } else {
//         next();
//     }
// });
export default router;
