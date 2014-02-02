app.directive('film', function() {
    return{
        restrict: 'E',
        template: '<div>This is film directive!!!</film>'

    }
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