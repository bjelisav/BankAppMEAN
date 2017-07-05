angular.module('mainController',[])
        .controller('mainCtrl',function($scope,db){
          $scope.accounts = [];
          db.getData().then(function(result){
            $scope.accounts = result.data;
          },function(err){
            console.log(err.status);
          })
        })
