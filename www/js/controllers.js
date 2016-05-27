angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,apiMV) {

  apiMV.getComics().then(function(d){
   console.log(d);
 },function(e){
   $scope.alert = e;})

})

.controller('HomeCtrl', function($scope, apiMV) {
  apiMV.getComics().then(function(d){
    $scope.comics = d.data.results;
    //console.log($scope.chats);
  },function(e){
   $scope.alert = e;})

})

.controller('ChatDetailCtrl', function($scope, $stateParams, apiMV) {

  apiMV.getTheComics($stateParams.comicsId).then(function(d){
    $scope.comic = d.data.results[0];
  },function(e){
    $scope.alert = e;})

});
