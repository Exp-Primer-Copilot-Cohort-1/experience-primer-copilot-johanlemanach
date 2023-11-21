function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'views/member.html',
    scope: {
      member: '='
    },
    controller: function($scope) {
      $scope.formatDate = function(date) {
        return moment(date).format("MMMM YYYY");
      };
    }
  };
}