angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('riskyEvents', {
    url: '/page1',
    templateUrl: 'templates/riskyEvents.html',
    controller: 'riskyEventsCtrl'
  })

  .state('symptoms', {
    url: '/page2',
    templateUrl: 'templates/symptoms.html',
    controller: 'symptomsCtrl'
  })

  .state('dietSummary', {
    url: '/page3',
    templateUrl: 'templates/dietSummary.html',
    controller: 'dietSummaryCtrl'
  })

  .state('reportingAdherence', {
    url: '/page8',
    templateUrl: 'templates/reportingAdherence.html',
    controller: 'reportingAdherenceCtrl'
  })

  .state('therapySummary', {
    url: '/page4',
    templateUrl: 'templates/therapySummary.html',
    controller: 'therapySummaryCtrl'
  })

  .state('dailySummary', {
    url: '/page5',
    templateUrl: 'templates/dailySummary.html',
    controller: 'dailySummaryCtrl'
  })

  .state('home', {
    url: '/page6',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('weekReport', {
    url: '/page9',
    templateUrl: 'templates/weekReport.html',
    controller: 'weekReportCtrl'
  })

$urlRouterProvider.otherwise('/page6')


});