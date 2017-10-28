angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    selectVideo: '<'
  },
  // TODO
  controller: function() {
    // console.log(this.videos);
  },
  
  templateUrl: 'src/templates/videoList.html'
});
