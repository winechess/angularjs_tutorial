app.controller('TopFilmsCtrl', function($scope, TopFilms){
   $scope.imdb = TopFilms;
   $scope.filter = {sortBy: '+', orderBy: 'place', limitTo: 10};
});