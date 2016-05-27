angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,apiMV) {

  apiMV.getComics().then(function(d){
   console.log(d);
 },function(e){
   $scope.alert = e;})


})

.controller('HomeCtrl', function($scope, apiMV) {
  apiMV.getComics().then(function(d){
    $scope.chats = d.data.results;
  },function(e){
   $scope.alert = e;})

  apiMV.searchComics('Mira').then(function(d){
    $scope.searchComics = d;
    console.log(d);
  },function(e){
   $scope.alert = e;})


})

.controller('ChatDetailCtrl', function($scope, $stateParams, apiMV) {



  apiMV.getTheComics($stateParams.comicsId).then(function(d){
    $scope.chat = d.data.results[0];
  },function(e){
    $scope.alert = e;})




})

.controller('buscadorCtrl', function($scope, apiMV) {
  
  apiMV.searchComics('Mira').then(function(d){
    $scope.searchComics = d;
    console.log(d);
  },function(e){
   $scope.alert = e;})

});
