'use strict';
/*
Purpose:
	This is controller for modal when clicked 'Tips' button.

*/

var TipsModalController =  function($scope) {
	
	$scope.todos = [
			'Have fun and be yourself',
			"Dress to impress (like you're going on a date)",
			'Use good lighting',
			'Exude confidence',
			'First smile and tease!',
			'Use the "Naked" button',
			'Set a schedule and stick to it',
			'Use your body language'
	];
	$scope.notodos = [
			'Walk away from the camera',
			'Use your phone or camera',
			'Share your personal information(Twitter, Facebook, etc.)',
			'Refer a member to another site',
			'Have other people or pets on camera',
			'Eat or smoke on camera (unless asked to)',
			'Complain or argue',
			"Mention a member's name publicly"
	];

};

TipsModalController.$inject = ['$scope'];
