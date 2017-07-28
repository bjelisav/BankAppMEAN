angular.module("editSelectedController",[])
        .controller('editSelectedCtrl',function($scope,db,$location,log){
          var logBtn = document.getElementById('logOut');
          logBtn.style.display = "inline-block";
          log.checkLog();
          $scope.account = db.getActiveAccount();
          $scope.editUser = function(account) {
            db.editUser(account);
            db.getData().then(function(){
              $location.path("/accounts");
            })
          }
        })
