angular.module("editSelectedController",[])
        .controller('editSelectedCtrl',function($scope,db,$location,log){
          log.checkLog();
          $scope.account = db.getActiveAccount();
          $scope.editUser = function(account) {
            db.editUser(account);
            db.getData().then(function(){
              $location.path("/accounts");
            })
          }
          $scope.logOut = function(){
            log.logOut();
          }
        })
