var app = angular.module('myApp', []);

function escapeRegExp(string){
  return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

app.controller('listAll', function($scope, $http) {
  $http.get("http://localhost:8000/dockers.json").success(function (response) {
    $scope.data = response.repositories;
    $scope.filterBySearch = function(name) {
      if (!$scope.search) return true;
      var regex = new RegExp('\\b' + escapeRegExp($scope.search), 'i');
      return regex.test(name);
    };
  });
});

