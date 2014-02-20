app.directive('film', function() {
    return{
        restrict: 'E',
        controller: function($scope){
            $scope.genres = [];
            
            this.addGenres = function(genres){
                $scope.genres = $scope.genres.concat(genres);
            };
        },
        link: function(scope, element){
            element.addClass('info');
            element.bind('mouseenter', function(){
                console.log(scope.genres);
            });
        }
    };
});

app.directive('genre', function(){
    return {
      require: "film",
      link: function(scope, element, attrs, filmCtrl){
       var genres = attrs.genre.split(" ");
       filmCtrl.addGenres(genres);
      }
    };
});

app.directive('mouseenter', function(){
   return function(scope, element){
       element.bind('mouseenter', function(){
           element.addClass('active');
       });
   } 
});

app.directive('mouseleave', function(){
   return function(scope, element){
       element.bind('mouseleave', function(){
           element.removeClass('active');
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