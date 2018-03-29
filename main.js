//配置引入路径
require.config({
	//配置根路径
	baseUrl:'./js',
    paths: {
    	jquery: 'lib/jquery-3.2.1.min',
        Vue: 'lib/vue',
        VueRouter: 'lib/vue-router',
        route: 'route',
        $a: 'a',
        $b: 'b',
    }
});


require(['jquery','Vue','VueRouter','route'], function($,Vue,VueRouter,router) {

    var vm = new Vue({
    	el:"#app",
    	data:{
    		navData:{
    			a:"第一个",
    			b:"第二个",
    		},
    	},
    	router:router,
    });

});
