(function(){
            'use strict'
            angular.module('LunchCheck', [])
            .controller('LunchCheckController', LunchCheckController);

            LunchCheckController.$inject = ['$scope'];
            function LunchCheckController($scope) {
                        $scope.lunch="";
                        $scope.messageLunch = "";
                        $scope.itemsLunch = function () {
                                    var items = itemsForLunch($scope.lunch);
                                    $scope.messageLunch = items;
                        }

                        function itemsForLunch(string) {
                                    var message = "";
                                    var luncharray = string.split(",");
                                    if(luncharray.length  <= 3 && luncharray != ''){
                                                message = "Enjoy!"
                                    } else if (luncharray.length > 3) {
                                                message = "Too much!";
                                    } else if (luncharray == ''){
                                                message = "Please enter your lunch";
                                    }

                                    return message;
                                    
                        }
            }
            
})();