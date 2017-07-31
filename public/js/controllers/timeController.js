angular.module('timeController',[])
      .controller('timeCtrl',function($scope,log,$interval){
          $scope.today = new Date();
          $interval(function(){
            $scope.today = new Date();
          },1000)


      })
