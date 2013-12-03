dlApp.controller('LandscapeController',
    function LandscapeController ($scope) {
            $scope.center = {
                latitude: 0, // initial map center latitude
                longitude: 0 // initial map center longitude
            };

            $scope.markers = []; // an array of markers,
            $scope.zoom = 8; // the zoom level
        });
