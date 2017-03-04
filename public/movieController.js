app.controller('movieController', function($scope, movieFactory) {
  $scope.movies = movieFactory.movies;
  $scope.collection = movieFactory.collection;
  $scope.addToCollection = function(movie) {
    //console.log($scope.movies[index]);
    $scope.collection.push(movie);                //Adds the selected movie to the collections array
    var index = $scope.movies.indexOf(movie);
    $scope.movies.splice(index,1);                //Removes selected movie from movies array
   // console.log($scope.collection);
  }

  $scope.removeFromCollection = function(movie) { //Adds the selected movie to the movies array
    $scope.movies.push(movie); //Removes selected movie from collections array
    var index = $scope.collection.indexOf(movie);
    $scope.collection.splice(index,1);
  }
});