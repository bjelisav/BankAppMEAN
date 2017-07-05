angular.module('editUserController',[])
        .controller('editUserCtrl',function($scope,db,log,$location){
          log.checkLog();
          $scope.accounts = [];
          db.getData().then(function(result){
            $scope.accounts = result.data;
          },function(err){
            console.log(err.status);
          })
          $scope.deleteUser = function(account){
            console.log(account);
            db.deleteUserData(account._id).then(function(result){
              $location.path('/accounts');
            });
          }
          $scope.selectUser = function(account){
            db.setActiveAccount(account);
          }
        })
