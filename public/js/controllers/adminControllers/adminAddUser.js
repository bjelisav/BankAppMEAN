angular.module('adminAddController',[])
        .controller("adminAddCtrl",function($scope,log,db,$location){
          log.checkLog();
          $scope.saveUser = function(){
            db.saveAdminUser({
              username: $scope.username,
              password: $scope.password
            }).then(function(){
              $location.path("/admin");
            })
          }
        })
