function mainController($scope) {

	$scope.search = function() {
		$("#logindiv").css("display", "block");
	};

	$scope.closePopUp = function() {
		$("#logindiv").css("display", "none");
	};
}

function aboutController($scope) {

}

