const recorderContainer = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordtBtn");
const videoPreview = document.getElementById("jsVideoPreview");

let streamObject;

const handleVideoData = event => {};

const startRecording = () => {
  const videoRecorder = new MediaRecorder(streamObject);
  videoRecorder.start();
  videoRecorder.addEventListener("dataavailable", handleVideoData);
};

async function getVideo() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: { width: 1280, height: 720 }
    });
    videoPreview.srcObject = stream;
    videoPreview.muted = true;
    videoPreview.play();
    recordBtn.innerHTML = "Stop recording";
    streamObject = stream;
    startRecording();
  } catch (error) {
    console.log(error);
    recordBtn.innerHTML = "☹️ Cant record";
    recordBtn.removeEventListener("click", getVideo);
  } finally {
    recordBtn.removeEventListener("click", getVideo);
  }
}

function init() {
  recordBtn.addEventListener("click", getVideo);
}

if (recorderContainer) {
  init();
}
