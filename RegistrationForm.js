/**
 * Created by madhan on 5/25/17.
 */
var app = angular.module("myApp",[]);
app.controller("myCtrl",function ($scope) {
    $scope.firstName = "";
    $scope.lastName = "";
    $scope.fullName = function () {
        return $scope.user.firstName + " " + $scope.user.lastName;
    };
    $scope.emailM="";
    $scope.pass="";
    $scope.conPass="";
    $scope.dateDob="";

    $scope.actualAge = function () {
        var today = new Date();
        return Math.abs($scope.user.dateDob.getUTCFullYear() - today.getUTCFullYear());
    }

   $scope.resetForm = function () {
        var defaultForm = {
            firstName: "",
            lastName: "",
            emailM: "",
            pass: "",
            conPass: "",
            dateDob: ""
        }
        $scope.user = angular.copy(defaultForm);
        $scope.registerForm.$setPristine();
        $scope.registerForm.$setUntouched();

    }
    $scope.submitRequest = function () {
        $scope.results = {
        }
    }

});
app.directive("descriptionArea",function () {
    return{
        template: "<textarea rows='10' cols='50'>Add your interests</textarea>"
    };
});


