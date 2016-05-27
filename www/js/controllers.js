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
    console.log($scope.chats);
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
  var busqueda = [];
  search = 'Mira'

  apiMV.searchComics().then(function(d){
    angular.forEach(d.data.results, function(value, key){
                var str = value.title;
                var res = str.split(search);
                if(res.length>1){
                  busqueda.push({title: value.title,id: value.id, images: value.images});
                }
              });
    $scope.searchComics = busqueda;
    console.log($scope.searchComics);
  },function(e){
   $scope.alert = e;})

});
