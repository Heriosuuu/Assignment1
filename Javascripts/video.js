function videoPlay() {

    /* Variables for video and button ID*/
    var video = document.getElementById('theBrave');
    var btn = document.getElementById('videoBtn');

    /* Checks if video is playing*/

    if (video !== null) {
      /* If video is paused, button will start the video and change text from "Play" to "Paused"*/
      if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
      } else {
        /* Other way wrong from the above feature*/
        video.pause();
        btn.innerHTML = "Play";
      }
    } else {
      console.error("Video element not found!");
    }
  }



