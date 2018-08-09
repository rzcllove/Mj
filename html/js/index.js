var vue = new Vue({
  el: '#app',
  data: {
    message: '111',
    points: [],
    tables: [],
    pointStyle,
    menu1Lists,
    menu2Lists: [],
    menu1Pos: {
      top: '',
      left: ''
    },
    menu2Pos: {
      top: '',
      left: ''
    },
    hoverId: -1,
    menu1Show: false,
    menu2Show: false,
    selectMenu2: -1,
    selectPoint: null,
    pointTimer: null,
    pointCount: 0
  },
  watch: {
    tables: {
      handler: function(nv) {
        localStorage.tables = JSON.stringify(nv)
      },
      deep: true
    }
  },
  created: function () {
	
    var spoints = localStorage.points && JSON.parse(localStorage.points)
    var stables = localStorage.tables && JSON.parse(localStorage.tables)
	var menu2List = localStorage.menu2Lists && JSON.parse(localStorage.menu2Lists);
    this.points = spoints || points
    this.tables = stables || tables
    this.menu2Lists = menu2List || menu2Lists
  },
  methods: {
    pointDown: function (pindex) {
      event.stopPropagation()
      event.preventDefault()
      if (event.target.className === 'point-delete'){
        this.removePoint(pindex)
        return
      }
      this.pointTimer = setTimeout(function(){
        this.pointCount++
      }.bind(this), 500)
    },
    pointUp: function (id) {
      event.stopPropagation()
      event.preventDefault()
      clearTimeout(this.pointTimer)
      this.pointTimer = null
      if (this.pointCount === 1) {
        this.hoverId = id
      }
      this.pointCount = 0
    },
    clearTimer: function () {
      this.pointCount = 0
      if (this.pointTimer) {
        clearTimeout(this.pointTimer)
        this.pointTimer = null
      }
    },
    removePoint: function (id) {
      event.stopPropagation()
      var point = this.points.find(point => point.id === this.hoverId)
	  var arr = new Array();
	  if(id == 1){
		  arr[0] = point.points[0];
	  }else{
		  if(point.points.length > 1){
			  arr[0] =  point.points[1];
		  }
	  }
	  point.points = arr;
	  if( point.points.length >0){point.points[0].classa = ''}
	  
      localStorage.points = JSON.stringify(this.points)
      this.hoverId = -1
      this.hideMenu()
    },
    menuShow: function (point, index) {
      
      event.stopPropagation()
	  
      this.selectPoint = JSON.parse(JSON.stringify(point))
      this.menu1Pos.top = point.location.top + 'rem'
      this.menu1Pos.left = point.location.left - 0.45 + 'rem'
	  var LEFT = point.location.left;
	  if(LEFT < 0.45){
		 this.menu1Pos.left =  '0rem'
	  }
      if (index ===11 || index === 20) {
        this.menu1Pos.left = point.location.left - 1.55 + 'rem'
      }
      this.menu1Show = true
    },
    menu1Click: function (index) {
      event.stopPropagation()
      var ract = event.target.getBoundingClientRect()
      this.menu2Pos.top = ract.top + 'px'
      this.menu2Pos.left = ract.left + 25 + 'px'
      this.selectMenu2 = index
    },
    menu2Click: function (name, index) {
      event.stopPropagation()
      var point = this.points.find(point => point.id === this.selectPoint.id)
	  var img = "";
	  var points = point.points;
	  if(this.selectMenu2 === 0){
		  img = menu2Lists[this.selectMenu2][index].img;
	  }else  if(this.selectMenu2 === 1){
		  img = menu2Lists[this.selectMenu2][index].img;
	  }else  if(this.selectMenu2 === 2){
		  img = menu2Lists[this.selectMenu2][index].img;
	  }
	  
	  if(points.length>1){ 
	  //底部提示
		  layer.open({
			content: '最大标志上限2 先删除后再试！'
			,skin: 'footer'
		  });
  
	  }else if(points.length==0){
		  var pjson ={};
		  pjson.type = pointStyle[this.selectMenu2]
		  pjson.classa = ''
		  pjson.content = name
		  pjson.img = img;
          points[points.length] = pjson;
          this.hideMenu()
          localStorage.points = JSON.stringify(this.points)  
	  }else if(points.length==1){//添加第二个
	      //改变第一个的位置
		  //添加第二个  margin-left:0.2rem;
		  var ps = points[0]
		  ps.classa = 'zy'
		  var pjson ={};
		  pjson.type = pointStyle[this.selectMenu2]
		  pjson.classa ='yy'
		  pjson.content = name
		  pjson.img = img;
		  points[points.length] = pjson;
          this.hideMenu()
          localStorage.points = JSON.stringify(this.points)  
	  }
      
    },
	menu2add: function (indx) {
	        var menu2list = this.menu2Lists;
			var btl = false;
			 //询问框
			layer.open({
				content: '<div><span>名称：</span><input id="MenuName" type="text"></div>'
				,btn: ['确定', '取消']
				,yes: function(index){
				  var MenuName = $("#MenuName").val();
				
				   if (menu2list.length > indx){
					   var list = menu2list[indx];
					   var pjson ={};
					   pjson.name = MenuName
					   pjson.img = '';
					   list[list.length] = pjson;
					   localStorage.menu2Lists = JSON.stringify(menu2list)
					   btl = true
					   layer.close(index);
				   }
				}
			});
			
		
	},
	Deletemenu2Click: function (menu2Index,index){
		event.stopPropagation()
		var menu2Iist = this.menu2Lists[menu2Index]
		var arr = new Array();
		
		if(menu2Iist.length > 1){
			for (var i=0; i< menu2Iist.length; i++){
				if (i != index){
					arr[arr.length] = menu2Iist[i];
				}
			}
		}
	    this.menu2Lists[menu2Index] = arr;
		localStorage.menu2Lists = JSON.stringify(this.menu2Lists)
		this.hoverId = -1
		this.hideMenu()
		
	},
    hideMenu: function () {
      this.menu1Show = false
      this.selectMenu2 = -1
      this.selectPoint = null
      this.hoverId = -1
    }
  }
})



var index;
function fornvalue(index){
}
function focusCar (index){
	this.index = index;
	document.getElementById("cd").style.display="";//显
}


function js (value) {
		var stables = localStorage.tables && JSON.parse(localStorage.tables)
		this.tables = stables || tables
		var v = $("#car"+index).val();
		value = v+value+";"
	    $("#car"+index).val(value);
		document.getElementById("cd").style.display="none";//隐 
		this.tables[index].car =value;
	    localStorage.tables = JSON.stringify(this.tables);
		this.stables = localStorage.tables && JSON.parse(localStorage.tables)
}
