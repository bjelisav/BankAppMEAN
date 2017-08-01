angular.module("adminController",[])
        .controller("adminCtrl", function($scope,log,db){
          log.checkLog();
          $scope.users = [];
          log.getLoginData().then(function(result){
            $scope.users = result.data;
          },function(err){
            console.log(err.status);
          })
        });
