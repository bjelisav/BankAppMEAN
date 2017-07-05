angular.module("loginController",[])
        .controller("logCtrl",function($scope,db,log,$location){
          $scope.username = "";
          $scope.password = "";
          var loginData = "";
          log.getLoginData().then(function(result){
            loginData = result.data;
          },function(err){
            console.log(err);
          });
          $scope.checkUser = function(){
            for (var i = 0; i < loginData.length; i++) {
              if ($scope.username===loginData[i].username && $scope.password===loginData[i].password) {
                log.activeUser = loginData[i]._id;
                $location.path('/accounts');
              }
            }
          }
        })
