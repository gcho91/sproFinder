angular.module("sproFinder", ["ui.router"]).config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/")
  $stateProvider.state("about", {
    url: "/",
    templateUrl: "./js/about/aboutTmpl.html"
  })
  .state("nearme", {
    url: "/nearme",
    templateUrl: "./js/nearme/nearmeTmpl.html",
    controller: "nearmeCtrl"
  })
  .state("search", {
    url: "/search",
    templateUrl: "./js/search/searchTmpl.html"
  })
  .state("learn", {
    url: "/learn",
    templateUrl: "./js/learn/learnTmpl.html"
  })

})
