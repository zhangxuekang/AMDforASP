//配置路由
define('route',['Vue','VueRouter','$a','$b'],function(Vue,VueRouter,$a,$b){

    //模块化引入必须明确使用use方法！
    Vue.use(VueRouter);
    //配置路由地址
    routes = [{
    	path:"/a",
    	component:$a
    },{
    	path:"/b",
    	component:$b
    }];

    //创建路由实例，导入配置的路由地址
    var router = new VueRouter({routes});
    return router;














});