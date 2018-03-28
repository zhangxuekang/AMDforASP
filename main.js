//配置引入路径
require.config({
    paths: {
        Vue: './js/lib/vue',
        VueRouter: './js/lib/vue-router',
        route: './js/route',
        $a: './js/a',
        $b: './js/b',
    }
});


require(['Vue','VueRouter','route'], function(Vue,VueRouter,router) {

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
