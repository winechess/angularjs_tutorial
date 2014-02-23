app.directive('film', function() {
    return{
        restrict: 'E',
        scope: {
            film: "=value",
            genres: "@genre",
            action: "&"
        },
        templateUrl: "partials/film.html",
        replace: true,
        link: function(scope, element){
            element.bind('mouseenter', function(){
                console.log(scope.genres);
            });
        }
    };
});

app.directive('mouseenter', function(){
   return function(scope, element){
       element.bind('mouseenter', function(){
           element.addClass('active-row');
       });
   } 
});

app.directive('mouseleave', function(){
   return function(scope, element){
       element.bind('mouseleave', function(){
           element.removeClass('active-row');
       });
   } 
});

app.directive('load', function(){
    return function(scope, element, attrs){
       element.bind("click", function(){
          scope.$apply(attrs.load);
       });
    };
});