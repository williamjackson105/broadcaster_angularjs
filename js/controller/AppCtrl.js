'use strict';
/*
Purpose:
	This is controller about index page.

*/

var AppCtrl = function ($scope, $http, createDialogService) {
  $scope.topnav = './partials/Topnav.html'

  $scope.cost = 350;

  //when click 'Earning' button
  $scope.openEarning = function() {
	 
			createDialogService('./partials/earnings.html', {
              id: 'earnDialog',
              title: '',
              backdrop: true,
              controller: 'EarningModalController',
              success: {label: 'Success', fn: function() {console.log('Complex modal closed');}}
            }, {
			  today: {
        	  	hours: '4:00',
        	  	minutes: '37',
				videos: '2',
				avg: '25'
        	  },
  			  week: {
        	  	hours: '14:25',
        	  	minutes: '47',
				videos: '14',
				avg: '23'
        	  },
        	});
		};

  //when click 'setting' button
  $scope.openSetting = function() {
	 
			createDialogService('./partials/settings.html', {
              id: 'settingDialog',
              title: '',
              backdrop: true,
              controller: 'SettingModalController',
              success: {label: 'Success', fn: function() {console.log('');}}
            }, {
			  config: {
        	  	brightness: 50,
        	  	contrast: 40,
				      hue: 60,
				      saturation: 20,
				      fontsize:50				
        	  }
        	});
		};	

  //when click 'Tips' button
  $scope.openTips = function() {
	 
			createDialogService('./partials/Tips.html', {
              id: 'tisDialog',
              title: '',
              backdrop: true,
              controller: 'TipsModalController',
              success: {label: 'Success', fn: function() {console.log('Complex modal closed');}}
            }, {});
		};


   //when click 'Admin messages' button
   $scope.openAdminMessages = function() {	 
			createDialogService('./partials/AdminMessages.html', {
              id: 'adminmessageDialog',
              title: 'Administrative Message',
              backdrop: true,
              controller: 'AdminMessageModalController',
              success: {label: 'Success', fn: function() {console.log('');}}
            }, {
			  config: {
        	  	brightness: 50,
        	  	contrast: 40,
				hue: 60,
				saturation: 20,
				fontsize:15				
        	  }
        	});
		};	

}
AppCtrl.$inject = ['$scope', '$http', 'createDialog'];