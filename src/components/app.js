angular.module('video-player')

.component('app', {
  // TODO
  bindings: {
    // all params passed into new instances of 'app'
    // <
    // @
  },
  controller: function ($http) {
    
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
    
    
    this.selectVideo = (index) => {    
      this.currentVideo = this.videos[index];
    };
    
    
    this.searchResults = function (text) {
      console.log(text);
      
      $http({
        url: 'https://www.googleapis.com/youtube/v3/search',
        method: 'GET',
        params: {
          key: 'AIzaSyAxqRfmlsNEgTTfymTt8pgi90ZjghZQ4sI',
          chart: 'mostPopular',
          q: text,
          maxResults: 5,
          part: 'snippet'
        },
      }).then(function successCallback(response) {
        // console.log(response);
        this.videos = response.data.items;
        this.currentVideo = this.videos[0];
      }.bind(this), function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
      });
      
      // $http({
      //   method: 'GET',
      //   url: 'https://www.googleapis.com/youtube/v3/search'
      // }).then(function successCallback(response) {
      //   console.log(response);
      // }, function errorCallback(response) {
      //     // called asynchronously if an error occurs
      //     // or server returns response with an error status.
      // });
      
      
      
    }.bind(this);
  },
  templateUrl: 'src/templates/app.html',
});
