window.onload = () => {
    setupVideoCapture();
};

function setupVideoCapture() {
    // Prefer camera resolution nearest to 1280x720.
    var mediaConstraints = { audio: true, video: true };

    navigator.mediaDevices.getUserMedia(mediaConstraints)
        .then(function (mediaStream) {
            var video = document.querySelector('video');
            video.srcObject = mediaStream;
            video.onloadedmetadata = function (e) {
                video.play();
            };
        })
        .catch(function (err) { console.log(err.name + ": " + err.message); });
}