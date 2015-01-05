'use strict';
/*
Purpose:
	This is controller for main screen.


*/

function MainController($scope, $http, IncomingSv) {

	var memberdata = IncomingSv.GetMemberList($scope);
	var spritesheet = IncomingSv.SpriteSheet($scope);
	
	$scope.dirctmessage = './partials/DirectMessages.html'
	$scope.video = './partials/Video.html'
	$scope.roommessage = './partials/RoomMessages.html'

	$scope.signin = function() {
		alert("signin");
/*		$( "#sign-in-form" ).dialog({
		  autoOpen: false,
		  height: 300,
		  width: 350,
		  modal: true,
		  buttons: {
			"Sign In": function() {
	  
			   $( this ).dialog( "close" );
	 
			},
			"Not registered?": function() {

			   $( this ).dialog( "close" );
			}
		  },
		  close: function() {
		   
		  }
		});

		$( "#sign-in-form" ).dialog( "open" );		*/
	};
	
/*	$scope.addContact = function() {
		this.contacts.push({type:'email', value:'yourname@example.org'});
	};
	 
	$scope.removeContact = function(contactToRemove) {
		var index = this.contacts.indexOf(contactToRemove);
		this.contacts.splice(index, 1);
	};
	 
	$scope.clearContact = function(contact) {
		contact.type = 'phone';
		contact.value = '';
	};*/
}
MainController.$inject = ['$scope', '$http', 'IncomingService'];

/*
function ForgotController($scope, $http) {

	$scope.telephone = "+47 90909090";
	$scope.bill_number = "AD90909";

	$scope.sendsms = function() {
	$http({method: 'GET', url: '/api/results' }).success(function(data, status, headers, config) {			
			$scope.entries = data;

			console.log(data);
		})
		.error(function(data, status, headers, config) {
	    		$scope.name = 'Error!'
	  		});
	}
}
ForgotController.$inject = ['$scope', '$http'];

function SoSController($scope, $http) {

	$scope.telephone = "+47 90909090";
	$scope.coordinator = "N 59 10, 360 E 58 32, 140";
	$scope.message = "Jeg trenger hjelp umiddelbart fort. Gir kassa er brukt.";

	$scope.sendsos = function() {
	$http({method: 'GET', url: '/api/results' }).success(function(data, status, headers, config) {			
			$scope.entries = data;

			console.log(data);
		})
		.error(function(data, status, headers, config) {
	    		$scope.name = 'Error!'
	  		});
	}
}
SoSController.$inject = ['$scope', '$http'];*/