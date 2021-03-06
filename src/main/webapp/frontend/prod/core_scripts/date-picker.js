angular.module('upraiseLabsApp').controller('Datepicker', function($scope) {
  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
  };

  $scope.toggleMin = function() {
    $scope.minDate = new Date("January 01, 1970");
  };
  $scope.toggleMin();
  $scope.maxDate = new Date();

  $scope.open = function($event) {
    $scope.status.opened = true;
  };

  $scope.dateOptions = {
    formatYear : 'yy',
    startingDay : 1
  };

  $scope.status = {
    opened : false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 2);
  $scope.events = [ {
    date : tomorrow,
    status : 'full'
  }, {
    date : afterTomorrow,
    status : 'partially'
  } ];

  $scope.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  };
});