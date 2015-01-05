'use strict';
/*
Purpose:
	This is controller for free chat.

*/
function FreeChatCtrl($scope, $http, IncomingSv, OutcomingSv /*, socket*/) {

	$scope.freemessages = [];
	$scope.inputText = '';

	var data = IncomingSv.GetRoomMessages($scope);		
	

   // Listening to an event
    /*socket.on('messageReceived', function(data) {
           //$scope.data = data;
    });*/

    // Raising an event
    /*$scope.raise = function(message) {            
        
        //socket.emit('otherEvent', message);
    };*/


	$scope.sendFreeMessage = function() {

		 var ms = {
					"MessageText": $scope.inputText,
					"MemberUri" : "1:TESTUSER:41" //for example 
				 };

		 $scope.freemessages.push({
				"memberUri": "1:TESTUSER:42",
				"messageText": $scope.inputText
			});		 
		 $scope.inputText = "";		 

		 OutcomingSv.SendMessage($scope, ms);		

		 $scope.$apply();
    };

}

FreeChatCtrl.$inject = ['$scope', '$http', 'IncomingService', 'OutcomingService'];