// var video;
// var hidden_ctx;
// var showBgImg = false;
// var showVideo = false;

 document.addEventListener("DOMContentLoaded", function() {
  hidden_ctx = createHiddenCanvas("hidden_canvas");
  video = document.getElementById('video');
//   document.body.appendChild(video);

//   video.autoplay = true;
//   // video.loop = true;
//   // video.muted = true;
//   // video.setAttribute("id", "gum-local");
//   // //video.setAttribute("style", "display:none;");
  video.width = 160;
  video.height = 120;
  // video.zIndex = 999;

//   // 'use strict';
//   //var videoSelect = document.querySelector('select#videoSource');
//   var errorElement = document.querySelector('#errorMsg');
//   video = document.querySelector('video');

//   // Put variables in global scope to make them available to the browser console.
//   var constraints = window.constraints = {
//     audio: false,
//     video: true,
//     advanced: [{
//       facingMode: "environment"
//     }]
//   };

//   function handleSuccess(stream) {
//     var videoTracks = stream.getVideoTracks();
//     // console.log('videoTracks', videoTracks);
//     // console.log('Got stream with constraints:', constraints);
//     // console.log('Using video device: ' + videoTracks[0].label);
//     stream.oninactive = function() {
//       console.log('Stream inactive');
//     };
//     window.stream = stream; // make variable available to browser console
//     video.srcObject = stream;
//   }

//   function handleError(error) {
//     if (error.name === 'ConstraintNotSatisfiedError') {
//       errorMsg('The resolution ' + constraints.video.width.exact + 'x' +
//         constraints.video.width.exact + ' px is not supported by your device.');
//     } else if (error.name === 'PermissionDeniedError') {
//       errorMsg('Permissions have not been granted to use your camera and ' +
//         'microphone, you need to allow the page access to your devices in ' +
//         'order for the demo to work.');
//     }
//     errorMsg('getUserMedia error: ' + error.name, error);
//   }

//   function errorMsg(msg, error) {
//     errorElement.innerHTML += '<p>' + msg + '</p>';
//     if (typeof error !== 'undefined') {
//       console.error(error);
//     }
//   }

//   if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
//     console.log("enumerateDevices() not supported.");
//     return;
//   }

//   // List cameras and microphones.
//   // var cams = [];
//   // navigator.mediaDevices.enumerateDevices(constraints)
//   //   .then(function(devices) {
//   //     var msg = "";
//   //     var option = document.createElement('option');
//   //     devices.forEach(function(device) {
//   //       if (device.kind == "videoinput") {
//   //         console.log(device);
//   //         msg += device.label+ "<br>"
//   //         // msg += device.kind + ": " + device.label+ "<br>"
//   //           //+ " id = " + device.deviceId + "<br><br>";
//   //           cams.push(device);
//   //           // option.text = device.label || 'camera ' + (videoSelect.length + 1);
//   //           // option.id = device.deviceId;
//   //           // videoSelect.appendChild(option);
//   //       }
//   //     });
//   //     errorElement.innerHTML += '<p>' + msg + '</p>';
//   //     var videoSource = cams[cams.length-1].deviceId;
//   //     //console.log(videoSelect.id);
//   //     //var videoSource = videoSelect.value;
//   //     constraints = {
//   //       audio: false,
//   //       // video: true,
//   //       // advanced: [{
//   //       //   facingMode: "environment"
//   //       // }]
//   //       video: true// {deviceId: videoSource ? {exact: videoSource} : undefined}
//   //     };

//   //     navigator.mediaDevices.getUserMedia(constraints).
//   //     then(handleSuccess).catch(handleError);
//   //   })
//   //   .catch(function(err) {
//   //     console.log(err.name + ": " + err.message);
//   //   });

//     navigator.mediaDevices.getUserMedia(constraints).
//         then(handleSuccess).catch(handleError);



 })


function videoshit() {

  hidden_ctx.drawImage(video, 0, 0, w, h);
  sample = hidden_ctx.getImageData(0, 0, w, h);

  ctx.fillStyle = rgba(255, 0.3);

  for (var i = 0; i < engine.particles.length; i++) {
    var p = engine.particles[i];

    var pos = Math.round(Math.round(p.pos.x) + Math.round(p.pos.y) * w) * 4;
    var r = sample.data[pos];
    var g = sample.data[pos + 1];
    var b = sample.data[pos + 2];
    p.c = rgb(r, g, b);
    p.col = {
      r: r,
      g: g,
      b: b
    }
    p.bright = brightness(r, g, b, 0, 100);
    //chanceLog(p.target.z);

  }
}



'use strict';

// Put variables in global scope to make them available to the browser console.
var video = document.querySelector('video');
var canvas = window.canvas = document.querySelector('canvas');
canvas.width = 480;
canvas.height = 360;

// var button = document.querySelector('button');
// button.onclick = function() {
//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;
//     canvas.getContext('2d').
//         drawImage(video, 0, 0, canvas.width, canvas.height);
// };

var constraints = {
    audio: false,
    video: true
};

function handleSuccess(stream) {
    window.stream = stream; // make stream available to browser console
    video.srcObject = stream;
}

function handleError(error) {
    console.log('navigator.getUserMedia error: ', error);
}

navigator.mediaDevices.getUserMedia(constraints).
    then(handleSuccess).catch(handleError);
