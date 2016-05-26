angular.module('starter.services', [])

.factory('Chats', function($http,$q) {
         
         var parametros='?ts=1&apikey=f9d383ce301c35dc2ae0e1fdc700bf83&hash=cab7ae1e129b27defde77584d98b369a';
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
         getComics: function() {
         var deferred = $q.defer();
         $http({
               method : 'GET',
               url : 'http://gateway.marvel.com/v1/public/comics'+parametros,
               cache : false
               }).success(function(data) {
                          deferred.resolve(data);
               }).error(function() {
                          deferred.reject('problemas con los datos');
               });
         return deferred.promise;
         },
         all: function() {
            return chats;
         },
         remove: function(chat) {
            chats.splice(chats.indexOf(chat), 1);
         },
         get: function(chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
         }
  };
});
