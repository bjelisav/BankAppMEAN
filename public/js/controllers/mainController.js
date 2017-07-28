angular.module('mainController',[])
        .controller('mainCtrl',function($scope,db,log){
          var logBtn = document.getElementById('logOut');
          logBtn.style.display = "inline-block";
          log.checkLog();
          $scope.accounts = [];
          db.getData().then(function(result){
            $scope.accounts = result.data;
          },function(err){
            console.log(err.status);
          })
        })
