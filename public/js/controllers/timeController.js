angular.module('timeController',[])
      .controller('timeCtrl',function($scope,log,$interval){

          $interval(function(){
            $scope.today = new Date();
          },1000)

          
      })
