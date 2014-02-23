app.controller('TopFilmsCtrl', function($scope, TopFilms) {
    $scope.imdb = TopFilms;
    $scope.filter = {sortBy: '+', orderBy: 'place', limitTo: null, query: null};

    $scope.loadMoreFilms = function() {
        $scope.imdb.films.push(
            {title: 'Властелин колец: Братство кольца', year: '2001', rating: 8.8, place: 11},
            {title: 'Звёздные войны. Эпизод 5: Империя наносит ответный удар', year: '1980', rating: 8.8, place: 12}
        );
    };
    
    $scope.showGenres = function(values){
      alert(values);  
    };
});