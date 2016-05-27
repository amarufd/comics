angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,apiMV) {
            
            apiMV.getComics().then(function(d){
                                   console.log(d);
                                   },function(e){
                                   $scope.alert = e;})

            
            })

.controller('HomeCtrl', function($scope, apiMV, $rootScope) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
            apiMV.getComics().then(function(d){
                                   console.log(d.data.results);
                                   $scope.chats = d.data.results;
                                   },function(e){
                                   $scope.alert = e;})
            
            $scope.getTheComics=function(id){
                apiMV.getTheComics(id).then(function(d){
                      console.log(d.data.results);
                      $rootScope.chat = d.data.results[0];
                      },function(e){
                      $scope.alert = e;})
            }

  /*$scope.chats = Chats.all();
  $scope.remove = function(chat) {
    apiMV.remove(chat);
  };*/
})

.controller('ChatDetailCtrl', function($scope, $stateParams, apiMV, $timeout, $rootScope) {
            
            $scope.chat = $rootScope.chat;
            console.log($scope.chat);
            
                     apiMV.getTheComics($stateParams.comicsId).then(function(d){
                                        console.log(d.data.results);
                                                                    $rootScope.chat = d.data.results[0];
                                },function(e){
                                        $scope.alert = e;})
                     $timeout(function(){console.log($rootScope.chat.title)},500)
            
            
            
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
