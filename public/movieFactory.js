app.factory('movieFactory', function(){
  var movies = [
  {
    name: "Title 1",
    year: 1990,
    description: "this is a sample description",
    image: "http://lorempixel.com/400/300/cats/"
  },
  {
    name: "Title 2",
    year: 1991,
    description: "this is a sample description",
    image: "http://lorempixel.com/400/300/cats/"
  }
  ];

  var collection = [
  {
    name: "Collection",
    year: 1990,
    description: "this is a sample description",
    image: "http://lorempixel.com/400/300/cats/"
  },
  {
    name: "Collection 2",
    year: 1991,
    description: "this is a sample description",
    image: "http://lorempixel.com/400/300/cats/"
  }
  ];
  return {
    movies: movies,
    collection: collection
  };
});