angular.module('main',[
        "ngRoute",
        "mainController",
        "dbServices",
        "addUserController",
        "editUserController",
        "editSelectedController",
        "timeController",
        "logService",
        "loginController",
        "adminController",
        "adminLogController",
        "adminAddController"
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
        .when("/addAccount",{
          templateUrl : "pages/addAccount.html",
          controller : "addUserCtrl"
        })
        .when("/editAccounts",{
          templateUrl : "pages/editAccounts.html",
          controller : "editUserCtrl"
        })
        .when("/editSelected",{
          templateUrl : "pages/editAccount.html",
          controller : "editSelectedCtrl"
        })
        .when("/admin",{
          templateUrl: "pages/adminPages/adminpanel.html",
          controller: "adminCtrl"
        })
        .when("/adminLog",{
          templateUrl: "pages/adminPages/adminLog.html",
          controller: "adminLogCtrl"
        })
        .when("/addUser",{
          templateUrl: "pages/adminPages/adminAddUser.html",
          controller: "adminAddCtrl"
        })

      })
