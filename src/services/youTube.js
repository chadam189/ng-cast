angular.module('video-player')
.service('youTube', function($http) {
  // TODO
  this.search = function (context, query) {
    $http({
      url: 'https://www.googleapis.com/youtube/v3/search',
      method: 'GET',
      params: {
        key: 'AIzaSyAxqRfmlsNEgTTfymTt8pgi90ZjghZQ4sI',
        chart: 'mostPopular',
        q: query,
        maxResults: 5,
        part: 'snippet'
      },
    }).then(function successCallback(response) {
      // console.log(response);
      this.videos = response.data.items;
      this.currentVideo = this.videos[0];
    }.bind(context), function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
  };
  
});
