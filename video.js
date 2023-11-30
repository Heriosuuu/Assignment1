function videoPlay() {

    var video = document.getElementById('theBrave');
    var btn = document.getElementById('videoBtn');

    console.log(btn);
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



  function audioPlay() {

    var audio = document.getElementById('running');
    var btn = document.getElementById('audioBtn');

    console.log(btn);
    if (audio !== null) {
      if (audio.paused) {
        audio.play();
        btn.innerHTML = "Pause";
      } else {
        audio.pause();
        btn.innerHTML = "Play";
      }
    } else {
      console.error("Audio element not found!");
    }
  }

