angular.module('editUserController',[])
        .controller('editUserCtrl',function($scope,db,log,$location){
          log.checkLog();
          $scope.accounts = [];
          db.getData().then(function(result){
            $scope.accounts = result.data;
          },function(err){
            console.log(err.status);
          })
          $scope.deleteAccount = function(account){
            db.deleteAccountData(account._id).then(function(result){
              log.logData("Delete",account.name);
              $location.path('/accounts');
            });
          }
          $scope.selectAccount = function(account){
            db.setActiveAccount(account);
          }
          $scope.logOut = function(){
            log.logOut();
          }
        })
