angular.module('video-player')

.component('app', {
  // TODO
  bindings: {
    // all params passed into new instances of 'app'
    // <
    // @
  },
  controller: function (youTube) {
    
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
    youTube.search(this, '');
    
    this.selectVideo = (index) => {    
      this.currentVideo = this.videos[index];
    };
    
    
    this.searchResults = function (text) {
    
      youTube.search(this, text);
      
    }.bind(this);
    
    this.keyEnter = function (event, text) {
    
      if (event.key === 'Enter') {
        youTube.search(this, text);
      }
      
    }.bind(this);
  },
  templateUrl: 'src/templates/app.html',
});
