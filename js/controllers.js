var myApp = angular.module('myApp',[]);

myApp.controller('MyController',function MyController($scope) {

$scope.author = {
	'name' : 'Raghav Ravishankar',
	'title' : 'Lynda Learner',
	'company' : 'Lynda.com'
}

});