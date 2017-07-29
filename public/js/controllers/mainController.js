angular.module('mainController',[])
        .controller('mainCtrl',function($scope,db,log){
          log.checkLog();
          $scope.accounts = [];
          db.getData().then(function(result){
            $scope.accounts = result.data;
          },function(err){
            console.log(err.status);
          })
          $scope.logOut = function(){
            log.logOut();
          }
        })
