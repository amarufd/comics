  angular.module('starter.services', [])

  .factory('apiMV', function($http,$q) {

   var parametros='?ts=1&apikey=f9d383ce301c35dc2ae0e1fdc700bf83&hash=cab7ae1e129b27defde77584d98b369a&limit=30';

   /*var pubkey    = 'f9d383ce301c35dc2ae0e1fdc700bf83'
   , privkey   = 'ff9855f6e7879270a8ee843303daf6ff115f5cf1'
   , internals = {};*/
  // Might use a resource here that returns a JSON array

  
  
  return {
          getComics: getComics,
          getTheComics: getTheComics,
          getCharacters: getCharacters,
          getEmolEconomia: getEmolEconomia
        }

        function getTheComics(comicsId) {
         var deferred = $q.defer();
         var promise = deferred.promise;
         $http({
           method : 'GET',
               //url : 'http://gateway.marvel.com/v1/public/comics/'+comicsId+parametros,
               url : 'json/42882.json',
               cache : false
             }).success(function(data) {
              deferred.resolve(data);
            }).error(function() {
             deferred.reject('problemas con los datos');
           });
            return promise;
          }

          function getComics() {
             var deferred = $q.defer();
             $http({
               method : 'GET',
               //url : 'http://gateway.marvel.com/v1/public/comics'+parametros,
               url : 'json/comics.json',
               cache : false
             }).success(function(data) {
              deferred.resolve(data);
            }).error(function() {
              deferred.reject('problemas con los datos');
            });
            return deferred.promise;
          }

          function getEmolEconomia() {
             var deferred = $q.defer();
             $http({
               method : 'GET',
               //url : 'http://www.emol.com/economia',
               url : 'json/tmp',
               cache : false
             }).success(function(data) {
              deferred.resolve(data);
            }).error(function() {
              deferred.reject('problemas con los datos');
            });
            return deferred.promise;
          }

          function getCharacters(id) {
     var deferred = $q.defer();
     $http({
       method : 'GET',
               //url : 'http://gateway.marvel.com/v1/public/comics/'+id+'/characters'+parametros,
               url : 'json/comics.json',
               cache : false
             }).success(function(data) {
              deferred.resolve(data);
            }).error(function() {
              deferred.reject('problemas con los datos');
            });
            return deferred.promise;
          }




        });
