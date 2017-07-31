angular.module("adminController",[])
        .controller("adminCtrl", function($scope,log){
          log.checkLog();
          $scope.users = [];
          log.getLoginData().then(function(result){
            $scope.users = result.data;
          },function(err){
            console.log(err.status);
          })
          $scope.switchTab = function(){
            var tab = document.querySelectorAll('li>a');
            for (var i = 0; i < tab.length; i++) {
              tab[i].removeClass('active');
            }
            this.addClass('active');
          }

        })
