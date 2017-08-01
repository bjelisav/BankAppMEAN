angular.module("adminLogController",[])
        .controller("adminLogCtrl",function($scope,log){
          $scope.switchTab = function(){
            log.checkUser();
            var tab = document.querySelectorAll('li>a');
            for (var i = 0; i < tab.length; i++) {
              tab[i].removeClass('active');
            }
            this.addClass('active');
          }
        })
