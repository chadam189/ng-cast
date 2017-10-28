angular.module('video-player')
.service('youTube', function($http) {
  // TODO
  
  $http({
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: 'GET',
    data: {
      key: 'AIzaSyAxqRfmlsNEgTTfymTt8pgi90ZjghZQ4sI',
      chart: 'mostPopular',
      q: query,
      maxResults: 5,
      part: 'snippet'
    },
    success: function(data) {
      console.log(data);
    }.bind(this),
    error: function(data) {
      console.log('ERROR');
    }
  });
});
