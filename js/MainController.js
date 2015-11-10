angular.module('sounder')

   .controller('MainController', function($scope, soundService) {
      $scope.getUser = function() {
         soundService.getUser($scope.searchText).then(function(response) {
            console.log(response.data)
         });
      };

      // $scope.getUser();
   });
