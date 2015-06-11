

angular.module('jbossSecurity').controller('EditUserAccountController', function($scope, $routeParams, $location, UserAccountResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.userAccount = new UserAccountResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/UserAccounts");
        };
        UserAccountResource.get({UserAccountId:$routeParams.UserAccountId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.userAccount);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.userAccount.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/UserAccounts");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/UserAccounts");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.userAccount.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});