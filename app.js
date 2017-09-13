angular.module("sproFinder", ["ui.router"]).config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/")
  $stateProvider.state("about", {
    url: "/",
    templateUrl: "./js/about/aboutTmpl.html"
  })
  .state("learn", {
    url: "/learn",
    templateUrl: "./js/learn/learnTmpl.html"
  })

})
