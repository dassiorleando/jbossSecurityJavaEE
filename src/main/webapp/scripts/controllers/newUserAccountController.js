
angular.module('jbossSecurity').controller('NewUserAccountController', function ($scope, $location, locationParser, UserAccountResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.userAccount = $scope.userAccount || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/UserAccounts/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        UserAccountResource.save($scope.userAccount, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/UserAccounts");
    };
});