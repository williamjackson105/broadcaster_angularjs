'use strict';
/*
Purpose:
	This is controller for direct chat.

*/
function DirectChatCtrl($scope, $http, IncomingSv, OutcomingSv) {
	
	$scope.directmessages = [];
	$scope.directText = '';
	
	var data = IncomingSv.GetDirectMessage($scope);		

	$scope.sendDirectMessage = function() {

		 var ms = {
					  "MemberUri": "1:TESTUSER:42", //for example
					  "Messages": [
							$scope.directText
					  ]
		          };

		 $scope.directmessages.push($scope.directText);		 
		 $scope.directText = "";		 

		 OutcomingSv.SendDirectMessage($scope, ms);		 

		 $scope.$apply();		 
    };

}

DirectChatCtrl.$inject = ['$scope', '$http', 'IncomingService', 'OutcomingService'];