app.directive('film', function() {
    return{
        restrict: 'E',
        template: '<div>This is film directive!!!</film>'

    }
});

app.directive('filma', function() {
    return{
        restrict: 'A',
        template: '<div>This is film-attr directive!!!</film>'

    }
});

app.directive('filmc', function() {
    return{
        restrict: 'C',
        template: '<div>This is film-class directive!!!</film>'

    }
});

app.directive('filmcom', function() {
    return{
        restrict: 'M',
        link: function(){
            alert('Comment directive')
        }
    }
});