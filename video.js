function videoPlay() {

    var video = document.getElementById('theBrave');
    var btn = document.getElementById('videoBtn');
  
    if (video !== null) {
      if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
      } else {
        video.pause();
        btn.innerHTML = "Play";
      }
    } else {
      console.error("Video element not found!");
    }
  }