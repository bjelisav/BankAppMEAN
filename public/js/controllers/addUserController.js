angular.module('addUserController',[])
      .controller('addUserCtrl',function($scope,db,$location,log){
        var logBtn = document.getElementById('logOut');
        logBtn.style.display = "inline-block";
        log.checkLog();
        $scope.addUser = function(){
          db.sendData({
            name : $scope.name,
            deposit : $scope.deposit,
            card : $scope.card
          }).then(function() {
            $location.path("/accounts");
          })
        }
      })
