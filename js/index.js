var weixin=angular.module('weixin',['ngAnimate','ngRoute','ngTouch'])
weixin.controller('main',['$scope',function($scope){
$scope.title="微信";
}])
weixin.factory('$y',[function(){
var list=[
      {
        id:1,
        keys:'A',
        people:[
          {id:10001,scr:"../jpg/1.jpg",name:'安一',beizhu:'朋友',weixinhao:'ay0123451'},
          {id:10002,scr:"./jpg/2.jpg",name:'安二',beizhu:'亲人',weixinhao:'ae0123452'},
          {id:10003,scr:"./jpg/3.jpg",name:'安三',beizhu:'同事',weixinhao:'as0123453'}
        ]
      },
      {
        id:2,
        keys:'B',
        people:[
          {id:10001,scr:"./jpg/4.jpg",name:'笨一',beizhu:'朋友',weixinhao:'ay0123457'},
          {id:10002,scr:"./jpg/5.jpg",name:'笨二',beizhu:'亲人',weixinhao:'ae0123458'},
          {id:10003,scr:"./jpg/7.jpg",name:'笨三',beizhu:'同事',weixinhao:'as0123459'}
        ]
      },
      {
        id:3,
        keys:'S',
        people:[
          {id:10001,scr:"./jpg/8.jpg",name:'苏一',beizhu:'朋友',weixinhao:'ay0123454'},
          {id:10002,scr:"./jpg/9.jpg",name:'苏二',beizhu:'亲人',weixinhao:'ae0123455'},
          {id:10003,scr:"./jpg/a1 (1).jpg",name:'苏三',beizhu:'同事',weixinhao:'as0123456'}
        ]
      },
        {      
        id:5,
        keys:'Y',
        people:[
          {id:10001,scr:"./jpg/8.jpg",name:'杨一',beizhu:'朋友',weixinhao:'ay0123454'},
          {id:10002,scr:"./jpg/9.jpg",name:'杨二',beizhu:'亲人',weixinhao:'ae0123455'},
          {id:10003,scr:"./jpg/a1 (1).jpg",name:'杨三',beizhu:'同事',weixinhao:'as0123456'}
        ]
      }
     ]
    var y={
       getAllChat:function(){
    return list;
    }   }
 
return y;
}])

weixin.factory('$x',[function(){
var laast=[
      {
        image:"../jpg/1.jpg",
        name:"老鼠",
        shuo:"在吗",
        liaotian:[
        {xinxi:'在吗',isme:false},
        {xinxi:'在',isme:true},
        {xinxi:'在吗',isme:false},
        {xinxi:'在吗',isme:true},
        ]
      },
      {
        image:"../jpg/2.jpg",
        name:"老牛",
        shuo:"在吗",
        liaotian:[
        {xinxi:'在吗',isme:false},
        {xinxi:'在',isme:false},
        {xinxi:'在吗',isme:true},
        {xinxi:'在吗',isme:true},
        ]
      },
      {
        image:"../jpg/3.jpg",
        name:"老虎",
        shuo:"在吗",
        liaotian:[
        {xinxi:'在吗',isme:false},
        {xinxi:'在',isme:false},
        {xinxi:'在吗',isme:true},
        {xinxi:'在吗',isme:true},
        ]
      },
      {
        image:"../jpg/4.jpg",
        name:"老土",
        shuo:"在吗",
        liaotian:[
        {xinxi:'在吗',isme:false},
        {xinxi:'在',isme:false},
        {xinxi:'在吗',isme:true},
        {xinxi:'在吗',isme:true},
        ]
      },
      {
        image:"../jpg/5.jpg",
        name:"老哦",
        shuo:"在吗",
        liaotian:[
        {xinxi:'在吗',isme:false},
        {xinxi:'在',isme:false},
        {xinxi:'在吗',isme:true},
        {xinxi:'在吗',isme:true},
        ]
      },
      {
        image:"../jpg/6.jpg",
        name:"老魔",
        shuo:"在吗",
        liaotian:[
        {xinxi:'在吗',isme:false},
        {xinxi:'在',isme:false},
        {xinxi:'在吗',isme:true},
        {xinxi:'在吗',isme:true},
        ]
      }];

  var x={
    getAllChat:function(){
    return laast;
    }}
    return x;
}]).controller('koong',function($scope){

}).controller('faxian',function($scope){

}).controller('wo',function($scope){

}).controller('nglist',function($scope){

}).controller('weixinCtrl',['$scope','$x',function($scope,$x){
$scope.laast=$x.getAllChat();
$scope.del=function(id){
          var news=this.laast.filter(function(v,i){
        return i !== id;
      })
    $scope.laast=news;
}
}]).controller('tongxunluCtrl',['$scope','$y',function($scope,$y){
$scope.list=$y.getAllChat();
}]).controller('liaotianCtrl',['$scope','$routeParams','$x',function($scope,$routeParams,$x){
  var id=$routeParams.aaa;
 
 var laast=$x.getAllChat();
   console.log(laast)
 $scope.duifang =laast[id].image;
$scope.laast =laast[id].liaotian;

}]).directive('nlList',[function(){

    return{
    replace:true,
    restrict:'EAC',
    templateUrl:'html/nlList.html',
    link:function($scope,elem){
      $('.nav-list').on('click','span',function(){
        console.log(12)
        var arr = [198,234,334,500]
        var self=this;
        $.each($scope.list,function(i,v){

          if($(self).text()===v.keys){
            console.log(arr[i])
            $('#tongxunlu').scrollTop(arr[i])
          }
        })
      })
    }
  }
    // return {
    //     replace:true,
    //     restrict:'AEC',
    //     templateUrl:'html/nlList.html',
   
    // }
}]).directive('wqTitle',[function(){
    return {
        replace:true,
        restrict:'AEC',
        templateUrl:'html/wq-title.html',
   
    }
}]).directive('wqFooter',[function(){
    return {
      restrict:'AEC',
      templateUrl:'html/wq-footer.html'
    }
}]).config(['$routeProvider',function($routeProvider){
      $routeProvider.when('/',{
        controller:'weixinCtrl',
        templateUrl:'html/weixin.html'
      }).when('/tongxunlu/:aaa',{
        controller:'liaotianCtrl',
        templateUrl:'html/liaotian.html'
      }).when('/tongxunlu/:aaa',{
        controller:'liaotianCtrl',
        templateUrl:'html/liaotian.html'
      }).when('/weixin',{
        controller:'weixinCtrl',
        templateUrl:'html/weixin.html'
      }).when('/tongxunlu',{
        controller:'tongxunluCtrl',
        templateUrl:'html/tongxunlu.html'
      }).when('/koong',{
        controller:'koong',
        templateUrl:'html/kong.html'
      }).when('/faxian',{
        controller:'faxian',
        templateUrl:'html/faxian.html'
      }).when('/wo',{
        controller:'wo',
        templateUrl:'html/wo.html'
      }).otherwise({
          redirectTo:'/'
      });
}])




