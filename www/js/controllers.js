angular.module('starter.controllers', [])



.controller('HomeCtrl', function($scope, apiMV, $timeout) {
  
  apiMV.getComics().then(function(d){
    $scope.comics = d.data.results;
    //console.log($scope.chats);
  },function(e){
   $scope.alert = e;})

  apiMV.getEmolEconomia().then(function(d){
    $scope.emol=d;
    //console.log($scope.emol);

    var arr = $scope.emol.match(/^.+?id=\"cuEconomia_cuDivisasCommodites_ValorDolar\">(.+?)<\/span>/im);
    console.log(arr[1]);
  },function(e){
    $scope.alert = e;})

  /*$timeout(function() {
    console.log($scope.emol);
  });*/



})

.controller('ChatDetailCtrl', function($scope, $stateParams, apiMV) {

  apiMV.getTheComics($stateParams.comicsId).then(function(d){
    $scope.comic = d.data.results[0];
  },function(e){
    $scope.alert = e;})

  
  apiMV.getCharacters($stateParams.comicsId).then(function(d){
    $scope.characters = d.data.results;
    console.log($scope.characters);
  },function(e){
    $scope.alert = e;})

});
