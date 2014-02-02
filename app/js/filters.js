'use strict';

app.filter('reverse', function() {
    return function(string) {
        return string.split('').reverse().join('');
    }
});

app.filter('range', function() {
    return function(input, from, to) {
        from = parseInt(from);
        to = parseInt(to);
        for (var i = from; i <= to; i++) {
            input.push(i);
        }
        return input;
    };
});

app.filter('filterTable', ['filterFilter','orderByFilter', 'limitToFilter', function(f,o,l){
   return function(films, filter){
       films = f(films, filter.query);
       films = o(films, filter.sortBy + filter.orderBy);
       if(filter.limitTo !== null){
           films = l(films, filter.limitTo);
       }
       return films;
   } 
}]);