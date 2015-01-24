function mainController($scope, $location) {

	$scope.search = function() {
		$("#logindiv").css("display", "block");
	};

	$scope.closePopUp = function() {
		$("#logindiv").css("display", "none");
	};
	$scope.about = function()
	{
		$location.path('/about');
	};
}

function aboutController($scope, $location) {

  $scope.goBack = function()
	{
		$location.path('/');
	};
}

