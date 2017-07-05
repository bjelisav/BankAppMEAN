angular.module('main',[
        "ngRoute",
        "mainController",
        "dbServices",
        "addUserController",
        "editUserController",
        "editSelectedController",
        "timeController",
        "logService",
        "loginController"
      ])
      .config(function($routeProvider,$locationProvider){
        $locationProvider.hashPrefix("");
        $routeProvider
        .when("/",{
          templateUrl : "pages/login.html",
          controller : "logCtrl"
        })
        .when("/accounts",{
          templateUrl : "pages/accounts.html",
          controller : "mainCtrl"
        })
        .when("/addUser",{
          templateUrl : "pages/addUser.html",
          controller : "addUserCtrl"
        })
        .when("/editUser",{
          templateUrl : "pages/editAccounts.html",
          controller : "editUserCtrl"
        })
        .when("/editSelected",{
          templateUrl : "pages/editUser.html",
          controller : "editSelectedCtrl"
        })

      })
