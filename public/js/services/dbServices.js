angular.module("dbServices",[])
      .service('db',function($http){
        var self = this;
        this.activeAccount = "";
        this.getData = function(){
          return $http({
            method : "get",
            url : "/getData"
          })
        }
        this.sendData = function(obj){
          return $http({
            method : "post",
            url : "/addAccount",
            data : obj
          })
        }
        this.deleteUserData = function (id){
          return $http({
            method : "post",
            url : "/deleteUser",
            data : {id : id}
          })
        }
        this.setActiveAccount = function(account){
          self.activeAccount = account;
        }
        this.getActiveAccount = function(){
          return self.activeAccount;
        }
        this.editUser = function(account){
          return $http({
            method : "post",
            url : "/editAccount",
            data : account
          })
        }
      })
