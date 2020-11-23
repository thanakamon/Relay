angular.module('app',[])
.controller('modbusCtrl',['$scope','$http',function($scope,$http){
    $scope.toggleRelay=function(ch){
        $http.get('http://192.168.2.7:3009/modbus/ch/'+ch)
        .then((response)=>{
            console.log(response);
        }).catch((err)=>{
            console.log(err);
        })
    }

    $scope.turnOnRelay=function(ch){
        $http.get('http://192.168.2.7:3009/modbus/on/'+ch)
        .then((response)=>{
            console.log(response);
        }).catch((err)=>{
            console.log(err);
        })
    }

    $scope.turnOffRelay=function(ch){
        $http.get('http://192.168.2.7:3009/modbus/off/'+ch)
        .then((response)=>{
            console.log(response);
        }).catch((err)=>{
            console.log(err);
        })
    }

}])
