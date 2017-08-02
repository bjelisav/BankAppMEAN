angular.module("adminEditController",[])
        .controller('adminEditCtrl',function($scope,log,db,$location){
          $scope.users = [];
          log.getLoginData().then(function(result){
            $scope.users = result.data;
          },function(err){
            console.log(err.status);
          })
          $scope.deleteUser = function(user){
            db.delUser(user._id);
          }
        })
