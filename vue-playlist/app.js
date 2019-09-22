// 实例化vue对象
new Vue({
    el: "#vue-app",
    data:{
        name: "misitewu",
        website: "https://www.baidu.com/",
        newwebsite: "<a href='https://www.baidu.com/'>newwebsite</a>"
    },
    methods: {
        greet: function(time){
            return 'Good Morning!' + ' ' + time + ' '  + 'GG!' + this.name
        }
    }
});

/**
 * el: element 需要获取的元素，一定是html中的根容器元素
 * data: 用于数据的存储
 */