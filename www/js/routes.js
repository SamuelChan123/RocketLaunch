angular.module('app.routes', [])

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            .state('startApp', {
                url: '/start',
                templateUrl: 'templates/startPage.html',
                controller: 'startCtrl'
            })

            .state('listoflaunches', {
                url: '/list',
                templateUrl: 'templates/listoflaunches.html',
                controller: 'listoflaunchesCtrl'
            })

            .state('launch', {
                url: '/launches/:id',
                templateUrl: 'templates/launch.html',
                controller: 'launchCtrl'
            })


        ;

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/start');

    });