var app = angular.module('dachshundApp', ['ngRoute', 'ngSanitize']);

app.config(function($httpProvider,
                    $routeProvider,
                    $locationProvider,
                    $qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
    $httpProvider.interceptors.push('TokenInterceptor');
    $locationProvider.hashPrefix('!');
    
    $routeProvider
        .when('/', {
            templateUrl: 'partials/main.html',
            access: {
                requiredLogin: false 
            }
        })
        .when('/main', {
            templateUrl: 'partials/main.html',
            access: {
                requiredLogin: false 
            }
        })
/*
        .when('/read/:seqno', {
            templateUrl: 'partials/read.html',
            access: {
                requiredLogin: true 
            }
        })
*/
        .when('/login', {
            templateUrl: 'partials/login.html',
            access: {
                requiredLogin: false
            }
        })
        .when('/board', {
            templateUrl: 'partials/board.html',
            access: {
                requiredLogin: true
            }
        })
        .when('/content', {
            templateUrl: 'partials/content.html',
            access: {
                requiredLogin: true
            }
        })
        .when('/rotation', {
            templateUrl: 'partials/rotation.html',
            access: {
                requiredLogin: true
            }
        })
        .when('/addcontent', {
            templateUrl: 'partials/addContent.html',
            access: {
                requiredLogin: true
            }
        })
        .when('/managecontent', {
            templateUrl: 'partials/manageContent.html',
            access: {
                requiredLogin: true
            }
        })
        .when('/resetPassword', {
            templateUrl: 'partials/resetPassword.html',
            access: {
                requiredLogin: false
            }
        })
        .otherwise({
            redirectTo: '/main'
        });
});

app.run(function($rootScope, $window, $location, AuthenticationFactory) {

    $rootScope.$on("$routeChangeStart", function(event, 
                                                 nextRoute, 
                                                 currentRoute) {
        if ((nextRoute.access && nextRoute.access.requiredLogin) && 
            !AuthenticationFactory.isAuthenticated()) {
            if ($location.path() !== '/login' || $location.path !== '/signup' ||
                $location.path() !== '/logout') {
                AuthenticationFactory.savePreviousUrl($location.path());
            }

            $location.path('/login');
        } 
        else {
            // check if user object exists else fetch it. 
            // This is incase of a page refresh

            AuthenticationFactory.resaveAuthentication();
        }
    });



    $rootScope.$on('$routeChangeSuccess', function(event, nextRoute, currentRoute) {
        $rootScope.showMenu = AuthenticationFactory.isAuthenticated();
        // if the user is already logged in, take him to the home page
        if (AuthenticationFactory.isLogged == true && $location.path() == '/login') {
            $location.path('/');
        }
    });
});
