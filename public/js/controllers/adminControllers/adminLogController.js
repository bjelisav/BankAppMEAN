angular.module("adminLogController",[])
        .controller("adminLogCtrl",function($scope,log){
          log.checkLog();
          $scope.logs = [];
          log.getLogData().then(function(result){
            $scope.logs = result.data;
          },function(err){
            console.log(err.status);
          })
        })
