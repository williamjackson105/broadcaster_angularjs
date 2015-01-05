/*

 Services */

//angular.module('myApp.services', [])
myservice.factory('IncomingService',['Mainhost','$http', function(Mainhost, $http) {
	   return {
			GetMemberList: function($scope) {

				return $http({method: 'GET', url: Mainhost + '/api/broadcast/GetMemberList' })
					.success(function(data, status, headers, config) {			
						//$scope.entries = data;
			
						$scope.members = data.members;
						$scope.membercount = data.memberCount;	

						console.log(data);
						return data;
					})
					.error(function(data, status, headers, config) {
						//	$scope.name = 'Error!'
						return null;
					});				
			},
			SpriteSheet: function($scope) {

				return $http({method: 'GET', url: Mainhost + '/api/broadcast/SpriteSheet' })
					.success(function(data, status, headers, config) {			
						//$scope.entries = data;
			
						$scope.sheet = 'data:image/png;base64,' + data;
						//console.log('spritesheet :' + $scope.sheet);

						return data;
					})
					.error(function(data, status, headers, config) {
						//	$scope.name = 'Error!'
						return null;
					});				
			},		
			GetRoomMessages: function($scope) {

				return $http({method: 'GET', url: Mainhost + '/api/broadcast/GetRoomMessages' })
					.success(function(data, status, headers, config) {			
						
						for (var i=0; i<data.messages.length; i++ )
						{
							$scope.freemessages.push(data.messages[i]);
						}

						console.log(data);
						return data;
					})
					.error(function(data, status, headers, config) {
						//	$scope.name = 'Error!'
						return null;
					});				
			},
			GetDirectMessage: function($scope) {

				return $http({method: 'GET', url: Mainhost + '/api/broadcast/GetDirectMessage' })
					.success(function(data, status, headers, config) {			
						
						for (var i=0; i<data.messages.length; i++ )
						{
							$scope.directmessages.push(data.messages[i]);
						}

						console.log(data);
						return data;
					})
					.error(function(data, status, headers, config) {
						//	$scope.name = 'Error!'
						return null;
					});				
			},
			GetBroadcastStatus: function($scope) {

				return $http({method: 'GET', url: Mainhost + '/api/broadcast/GetBroadcastStatus' })
					.success(function(data, status, headers, config) {			
						
						$scope.broadcastStatus = data.status;

						return data;
					})
					.error(function(data, status, headers, config) {
						//	$scope.name = 'Error!'
						return null;
					});				
			},
			GetVodStatus: function($scope) {

				return $http({method: 'GET', url: Mainhost + '/api/broadcast/GetVodStatus' })
					.success(function(data, status, headers, config) {			
						
						$scope.vodStatus = data.vodInProgress;

						return data;
					})
					.error(function(data, status, headers, config) {
						//	$scope.name = 'Error!'
						return null;
					});				
			},
			GetNakedStatus: function($scope) {

				return $http({method: 'GET', url: Mainhost + '/api/broadcast/GetNakedStatus' })
					.success(function(data, status, headers, config) {			
						
						$scope.nakedStatus = data.nakedStatus;

						return data;
					})
					.error(function(data, status, headers, config) {
						//	$scope.name = 'Error!'
						return null;
					});				
			},
			GetPayRateTimeRemaining: function($scope) {

				return $http({method: 'GET', url: Mainhost + '/api/broadcast/GetPayRateTimeRemaining' })
					.success(function(data, status, headers, config) {			
						
						$scope.hoursRemaining = data.hoursRemaining;

						return data;
					})
					.error(function(data, status, headers, config) {
						//	$scope.name = 'Error!'
						return null;
					});				
			}
 

	   }
  }]);
