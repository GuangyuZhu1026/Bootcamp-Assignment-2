angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */


    $scope.addListing = function() {
      $scope.listings.push({code: $scope.listings.newcode, name: $scope.listings.newname,
      coordinates: {latitude: $scope.listings.newlatitude, longitude: $scope.listings.newlongitude},
      address: $scope.listings.newaddress
    });
    };

    $scope.deleteListing = function(index) {
      var removeObject = $scope.listings.indexOf(index);
      $scope.listings.splice (removeObject,1);
    };

    $scope.showDetails = function(object) {
      $scope.details = $scope.listings[$scope.listings.indexOf(object)];


    };
  }
]);
