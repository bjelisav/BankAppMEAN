angular.module("editSelectedController",[])
        .controller('editSelectedCtrl',function($scope,db,$location){
          $scope.account = db.getActiveAccount();
          $scope.editUser = function(account) {
            db.editUser(account);
            db.getData().then(function(){
              $location.path("/");
            })
          }
        })
