angular
    .module('ngCribs')
    .controller('cribsController', function($scope, cribsFactory) {

        $scope.cribs;
        $scope.priceInfo = {
            min: 0,
            max: 1000000
        }

        $scope.newListing = {};

        $scope.addCrib = function(newListing) {
            newListing.image = 'default-crib';
            $scope.cribs.push(newListing);
            $scope.newListing = {};
        }


        $scope.editCrib = function(crib) {
            $scope.editListing = true;
            $scope.existingListing = crib;
        }


        $scope.saveCribEdit = function() {
            $scope.editListing = false;
            $scope.existingListing = {};
        }

        $scope.deleteCrib = function(listing) {
            var index = $scope.cribs.indexOf(listing);
            $scope.cribs.splice(index, 1);
            $scope.existingListing = {};
            $scope.editListing = false;
        }

        cribsFactory.getCribs().then(function(data) {
            $scope.cribs = data.data;
        }).catch(function(error) {
            console.log(error);
        });


    });