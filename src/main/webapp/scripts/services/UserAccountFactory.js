angular.module('jbossSecurity').factory('UserAccountResource', function($resource){
    var resource = $resource('rest/useraccounts/:UserAccountId',{UserAccountId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});