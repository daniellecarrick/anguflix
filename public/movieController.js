app.controller('movieController', function($scope, movieFactory) {
  $scope.movies = movieFactory.movies;
});