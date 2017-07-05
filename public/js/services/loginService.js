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

        })
