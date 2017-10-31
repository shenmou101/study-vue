export default {
	//这里的state必须是JSON，是一个对象
  state: {
    count: 0,		//这里就是初始值的罗列
    student: [
      {"name" : "xiao1", "sex" : "男"},
      {"name" : "xiao2", "sex" : "男"},
      {"name" : "xiao3", "sex" : "女"},
      {"name" : "xiao4", "sex" : "女"}
    ]
  },
  //罗列所有可能改变state的方法
  mutations: {
  	//没有所谓的大写字母的Type了，就是一个个函数
    add (state, n) {
      state.count+=n
    },
    minus (state) {
    	state.count--
    }
  },
  getters : {
    nansheng : state => {
      return state.student.filter((item)=>{
        return item.sex == "男"
      })
    }    
  },
  actions : {
    add(context, payload){
      $.get("api.json",function(data){
        context.commit('add', Number(data))
      })
    }
  }
}