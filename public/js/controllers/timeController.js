angular.module('timeController',[])
      .controller('timeCtrl',function($scope,log,$interval){

          $interval(function(){
            $scope.today = new Date();
            console.log($scope.today);
          },1000)

          $scope.logOut = function(){
            log.logOut();
          }
      })
