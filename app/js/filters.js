'use strict';

app.filter('reverse', function() {
    return function(string) {
        return string.split('').reverse().join('');
    }
});

app.filter('range', function() {
    return function(input, total) {
        total = parseInt(total);
        for (var i = 1; i <= total; i++) {
            input.push(i);
        }
        return input;
    }
});