
var video;
var hidden_ctx;
var showBgImg = false;
var showVideo = false;

document.addEventListener("DOMContentLoaded", function() {
  hidden_ctx = createHiddenCanvas("hidden_canvas");
  video = document.createElement('video');
  document.body.appendChild(video);

  video.autoplay  = true;
  video.loop  = true;
  video.setAttribute("id", "gum-local");
  //video.setAttribute("style", "display:none;");
  video.width = 320;
  video.height = 240;


  /*
   *  Copyright (c) 2015 The WebRTC project authors. All Rights Reserved.
   *
   *  Use of this source code is governed by a BSD-style license
   *  that can be found in the LICENSE file in the root of the source
   *  tree.
   */

  'use strict';

  var errorElement = document.querySelector('#errorMsg');
  video = document.querySelector('video');

  // Put variables in global scope to make them available to the browser console.
  var constraints = window.constraints = {
    audio: false,
    video: true
  };

  function handleSuccess(stream) {
    var videoTracks = stream.getVideoTracks();
    console.log('videoTracks', videoTracks);
    console.log('Got stream with constraints:', constraints);
    console.log('Using video device: ' + videoTracks[0].label);
    stream.oninactive = function() {
      console.log('Stream inactive');
    };
    window.stream = stream; // make variable available to browser console
    video.srcObject = stream;
  }

  function handleError(error) {
    if (error.name === 'ConstraintNotSatisfiedError') {
      errorMsg('The resolution ' + constraints.video.width.exact + 'x' +
          constraints.video.width.exact + ' px is not supported by your device.');
    } else if (error.name === 'PermissionDeniedError') {
      errorMsg('Permissions have not been granted to use your camera and ' +
        'microphone, you need to allow the page access to your devices in ' +
        'order for the demo to work.');
    }
    errorMsg('getUserMedia error: ' + error.name, error);
  }

  function errorMsg(msg, error) {
    errorElement.innerHTML += '<p>' + msg + '</p>';
    if (typeof error !== 'undefined') {
      console.error(error);
    }
  }

  if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
  console.log("enumerateDevices() not supported.");
  return;
}

// List cameras and microphones.

navigator.mediaDevices.enumerateDevices()
  .then(function(devices) {
    var msg = "";
    devices.forEach(function(device) {
      console.log(device);
      if(device.kind == "videoinput")
      msg += device.kind + ": " + device.label +
        " id = " + device.deviceId +  "<br>";
    });
    errorElement.innerHTML += '<p>' + msg + '</p>';
  })
  .catch(function(err) {
    console.log(err.name + ": " + err.message);
  });


  navigator.mediaDevices.getUserMedia(constraints).
      then(handleSuccess).catch(handleError);

    })
