angular.module("logService",[])
        .service("log",function($http,$location){
          var self =this;

          this.activeUser = "";
          this.getLoginData = function(){
            return $http({
              method : "get",
              url : "/getLoginData"
            })
          }
          this.checkLog = function(){
            if (!self.activeUser) {
              $location.path("/");
            }
          }
          this.logOut = function(){
            self.activeUser = "";
            $location.path('/');
          }
          this.logData = function(action,account){
            return $http({
              method: "post",
              url : "/logData",
              data :{
                user : self.activeUser,
                account : account,
                action: action,
                time : new Date()
              }
            })
          }
          this.getLogData = function(){
            return $http({
              method : "get",
              url: "/getLogData"
            })
          }
        })
