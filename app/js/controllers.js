app.controller('MyFirstCtrl', function($scope, FirstService){
   $scope.film = FirstService;
});

app.controller('SecondCtrl', function($scope, FirstService){
    $scope.film = FirstService;
    
    $scope.reverse = function(string){
        return string.split("").reverse().join("");
    }
});