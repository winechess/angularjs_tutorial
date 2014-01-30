app.directive('film', function() {
    return{
        restrict: 'E',
        template: '<div>This is film directive!!!</film>'

    }
});

app.directive('mouseenter', function(){
   return function(scope, element){
       element.bind('mouseenter', function(){
           console.log("Cursor enter the element.")
       });
   } 
});

app.directive('mouseleave', function(){
   return function(scope, element){
       element.bind('mouseleave', function(){
           console.log('Cursor leave the element.')
       });
   } 
});