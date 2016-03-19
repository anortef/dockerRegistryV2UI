var app = angular.module('myApp', []);

function escapeRegExp(string){
  return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

app.controller('listAll', function($scope, $http) {
  var registry_url = "%REGISTRY_URL%";
  $scope.filterBySearch = function(name) {
    if (!$scope.search) return true;
    var regex = new RegExp('\\b' + escapeRegExp($scope.search), 'i');
    return regex.test(name);
  };

  $scope.reloadImages = function() {
    $http.get(registry_url + "/v2/_catalog?n=300").success(function(response){
      $scope.data = response.repositories;
    });
  };

  $scope.showTags = function (id) {
    $http.get(registry_url + "/v2/" + id + "/tags/list").success(function(response){
      $scope.data = response.tags;
    });
  };

  $scope.reloadImages();
});

