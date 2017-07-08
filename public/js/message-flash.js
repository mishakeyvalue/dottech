const NEW_MESSAGE_EVENT_NAME = "NEW_MESSAGE";

angular.module('message-flash', [])
    .service('flashMessageService', function($rootScope){
        let message = '';
        this.getMessage = function(){
            return message;
        };
        this.setMessage = function(newMessage){
            message = newMessage;
            $rootScope.$broadcast(NEW_MESSAGE_EVENT_NAME);
        };
    })
    .directive('messageFlash', function(){
        let directive = {};

        directive.controller = function($scope, flashMessageService, $timeout){
            $scope.$on(NEW_MESSAGE_EVENT_NAME, function(){
                $scope.message = flashMessageService.getMessage();
                $scope.isVisible = true;
                return $timeout(function(){
                    $scope.isVisible = false;
                    return $scope.message = '';
                }, 2500);
            })
        };

        directive.template = '<p ng-if="isVisible" class="alert alert-info">{{message}}</p>';


        return directive;
    })