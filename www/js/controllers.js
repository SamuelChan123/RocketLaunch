angular.module('app.controllers', [])

    .controller('startCtrl', function ($ionicNavBarDelegate, $scope, LaunchService, $timeout, $state) {
        $ionicNavBarDelegate.showBackButton(true);
        function activate() {
            $timeout(function () {
                $state.go('listoflaunches')
            }, 2500)
        }
        activate();
    })

    .controller('listoflaunchesCtrl', function ($ionicNavBarDelegate, $scope, LaunchService) {
        $ionicNavBarDelegate.showBackButton(true);
        $scope.launches = [];

        LaunchService.getLaunches().then(function (res) {
            $scope.launches = res;
        });


    })

    .controller('TimingCtrl', function ($scope, $interval, $stateParams, LaunchService) {
        /*$scope.launches = [];

        LaunchService.getLaunches().then(function (res) {
            $scope.launches = res;
        }); */
        
        /*$scope.launch = {};
        LaunchService.getLaunch($stateParams.id).then(function (res) {
            $scope.launch = res;
        }); */

        $scope.CountDown = {
            /*parseDate: function (str) {
                var mdy = str.split('/');
                return new Date(mdy[2], mdy[0] - 1, mdy[1]);
            }, */
            /*
         daydiff: function (first, second) {
             return Math.round((second - first) / (1000 * 60 * 60 * 24));
         }, */
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            getTimeRemaining: function (endtime) {
                var t = Date.parse(endtime) - Date.parse(new Date());
                var seconds = Math.floor((t / 1000) % 60);
                var minutes = Math.floor((t / 1000 / 60) % 60);
                var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
                var days = Math.floor(t / (1000 * 60 * 60 * 24));
                return {
                    'total': t,
                    'days': days,
                    'hours': hours,
                    'minutes': minutes,
                    'seconds': seconds
                };
            },

            initializeClock: function (endtime) {
                function updateClock() {
                    var t = $scope.CountDown.getTimeRemaining(endtime);

                    if (t.total < 86400000) {
                        // Notification that the rocket will launch in 24 hours
                    }
                    
                    if (t.total < 3600000) {
                        // Notification that the rocket will launch in 1 hour
                    }        
                    
                    if (t.total < 600000) {
                        // Notification that the rocket will launch in 10 min
                    }        

                    if (t.total < 0) {
                        // Notification that the rocket has launched
                        // alert("Rocket " + $scope.launch.name + " has launched.");
                        $interval.cancel(timeinterval);
                        return true
                    }
                    $scope.CountDown.days = t.days < 10 ? '0' + t.days : t.days;
                    $scope.CountDown.hours = ('0' + t.hours).slice(-2);
                    $scope.CountDown.minutes = ('0' + t.minutes).slice(-2);
                    $scope.CountDown.seconds = ('0' + t.seconds).slice(-2);
                }

                updateClock();
                var timeinterval = $interval(updateClock, 1000);
            },
        }
        var deadline = new Date(Date.parse($scope.launch.datetime));
        //var deadline = new Date(Date.parse(new Date()) + 5000);
        $scope.CountDown.initializeClock(deadline);
    })

    .controller('launchCtrl', function ($ionicNavBarDelegate, $scope, $stateParams, LaunchService) {
        $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
            viewData.enableBack = true;
        });
        $scope.launch = {};
        LaunchService.getLaunch($stateParams.id).then(function (res) {
            $scope.launch = res;
        });
    })

  /*  .controller('dateCtrl', function ($scope, $stateParams, LaunchService, $ionicNavBarDelegate, $interval) {
        $ionicNavBarDelegate.showBackButton(true);
        $scope.launch = {};
        LaunchService.getLaunch($stateParams.id).then(function (res) {
            $scope.launch = res;
        });

        $scope.date = {
            launch: "",
            getDate: function (input) {
                $scope.date.launch = input.slice(0, 10) + " at " + input.slice(11, 19)
                var t = Date.parse(endtime) - Date.parse(new Date());
                var seconds = Math.floor((t / 1000) % 60);
                var minutes = Math.floor((t / 1000 / 60) % 60);
                var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
                var days = Math.floor(t / (1000 * 60 * 60 * 24));
                return {
                    'total': t,
                    'days': days,
                    'hours': hours,
                    'minutes': minutes,
                    'seconds': seconds
                };
            },
            initializeDate: function (input) {
                function update() {
                    var t = $scope.CountDown.getDate(input);

                }

                update();
                var timeinterval = $interval(update, 1000);
            },
        }

        var datetime = new Date(Date.parse($scope.launch.datetime));
        $scope.date.initializeDate(datetime);
    })
*/