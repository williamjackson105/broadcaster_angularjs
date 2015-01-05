/*

 Services */

//angular.module('myApp.services', [])
myservice.factory('OutcomingService',['Mainhost','$http', function(Mainhost, $http) {
	   return {
			Initialize: function($scope) {

				return $http({method: 'POST', url: Mainhost + '/api/broadcast/Initialize' })
					.success(function(data, status, headers, config) {			
						//$scope.entries = data;
			
						$scope.wowzaUrl = data.wowzaUrl;
						$scope.displayStats = data.displayStats;	

						console.log(data);
						return data;
					})
					.error(function(data, status, headers, config) {
						//	$scope.name = 'Error!'
						return null;
					});				
			},
			SendDirectMessage: function($scope, postData) {

				return  $http({
							url: Mainhost + '/api/broadcast/SendDirectMessage',
							method: "POST",
							data: postData,
							headers: {'Content-Type': 'application/x-www-form-urlencoded'}
						})
						.success(function (data, status, headers, config) {
								// ?  data.memberUri
								console.log('SendDirectmessages  :  ' + data.messages.length);

								for (var i=0; i<data.messages.length; i++ )
								{
									$scope.directmessages.push(data.messages[i]);
									console.log(data.messages[i]);
								}
								
						})
						.error(function (data, status, headers, config) {
								
						});

			},
			SendMessage: function($scope, postData) {

				return  $http({
							url: Mainhost + '/api/broadcast/SendMessage',
							method: "POST",
							data: postData,
							headers: {'Content-Type': 'application/x-www-form-urlencoded'}
						})
						.success(function (data, status, headers, config) {
								// ?  data.memberUri
								console.log('Sendmessages  :  ' + data.MessageText + "," + data.MemberUri);
								
								$scope.freemessages.push({
									"memberUri":  data.MemberUri,
									"messageText": data.MessageText
								});
						})
						.error(function (data, status, headers, config) {
								
						});

			},
			StartBroadcast: function($scope) {

				return  $http({
							url: Mainhost + '/api/broadcast/StartBroadcast',
							method: "POST",
							//data: postData,
							headers: {'Content-Type': 'application/x-www-form-urlencoded'}
						})
						.success(function (data, status, headers, config) {
								// ?  data.memberUri
								console.log('Startbroadcast  :  ' + status );
																
						})
						.error(function (data, status, headers, config) {
								
						});
			},
			StopBroadcast: function($scope, postData) {

				return  $http({
							url: Mainhost + '/api/broadcast/StopBroadcast',
							method: "POST",
							data: postData,
							headers: {'Content-Type': 'application/x-www-form-urlencoded'}
						})
						.success(function (data, status, headers, config) {
								// ?  data.memberUri
								console.log('Stopbroadcast  :  ' + status );
																
						})
						.error(function (data, status, headers, config) {
								
						});
			},
			UpdateNakedStatus: function($scope, postData) {

				return  $http({
							url: Mainhost + '/api/broadcast/UpdateNakedStatus',
							method: "POST",
							data: postData,
							headers: {'Content-Type': 'application/x-www-form-urlencoded'}
						})
						.success(function (data, status, headers, config) {
								
								/*
								202 – Accepted – Request to update naked status has been accepted
								400 – Bad Request – No or invalid session key provided
								401 – Not Authorized – Model is not authenticated or lacks permission to broadcast
								*/
								console.log('UpdateNakedStatus  :  ' + status );
																
						})
						.error(function (data, status, headers, config) {
								
						});
			},
			StartVod: function($scope) {

				return  $http({
							url: Mainhost + '/api/broadcast/StartVod',
							method: "POST",
							//data: postData,
							headers: {'Content-Type': 'application/x-www-form-urlencoded'}
						})
						.success(function (data, status, headers, config) {
								
								/*
								202 – "Accepted" – Request to start VOD has been accepted
								400 – "Bad Request" – No, not active or invalid session key provided
								401 – "Not Authorized" – Model is not authenticated or lacks permission to broadcast
								*/
								console.log('StartVod  :  ' + status );
																
						})
						.error(function (data, status, headers, config) {
								
						});
			},
			StopVod: function($scope) {

				return  $http({
							url: Mainhost + '/api/broadcast/StopVod',
							method: "POST",
							//data: postData,
							headers: {'Content-Type': 'application/x-www-form-urlencoded'}
						})
						.success(function (data, status, headers, config) {
								
								/*
								202 – Accepted – Request to end VOD has been accepted
								400 – Bad Request – Invalid session key or VOD not in progress.
								401 – Not Authorized – Model is not authenticated or lacks permission to broadcast
								*/
								console.log('StopVod  :  ' + status );
																
						})
						.error(function (data, status, headers, config) {
								
						});
			}
 
			 
	   }
  }]);