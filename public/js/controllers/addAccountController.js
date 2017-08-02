angular.module('addUserController',[])
      .controller('addUserCtrl',function($scope,db,$location,log){
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
        $scope.logOut = function(){
          log.logOut();
        }
      })
