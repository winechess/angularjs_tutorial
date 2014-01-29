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
    }
});