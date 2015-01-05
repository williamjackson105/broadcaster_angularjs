'use strict';
/*
Purpose:
	This is controller for modal when clicked 'earning' button.

*/

var EarningModalController =  function($scope, today, week) {
	$scope.today = today;
	$scope.week = week;
};

EarningModalController.$inject = ['$scope', 'today', 'week'];
