angular.module('app.services', [])

.factory('LaunchService', ['$http','$q',function($http,$q){

	return {
		getLaunches:function() {
			var deferred = $q.defer();
			
			$http.get("https://api.fieldbook.com/v1/57573878f5d7a40300bcf093/launch_app/").then(function(res) {
				//console.dir(res.data.results);
				/*var results = res.data.results.map(function(result) {
					result.id = result.url;
					return result;
				});*/
				deferred.resolve(res.data);
			});
			return deferred.promise;
		},
		getLaunch:function(id) {
			var deferred = $q.defer();
			
			$http.get("https://api.fieldbook.com/v1/57573878f5d7a40300bcf093/launch_app/" + id).then(function(res) {
				//console.dir(res.data);
				deferred.resolve(res.data);
			});
            ionic.Platform.fullScreen(true, false);    
			return deferred.promise;
			
		}	
	};

}]);

