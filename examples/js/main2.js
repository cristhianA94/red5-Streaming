(function (red5prosdk) {

  // Create a new instance of the WebRTC publisher.
  var publisher = new red5prosdk.RTMPPublisher();

  // Initialize
  publisher.init({
      protocol: 'rtmp',
      port: 5080,
      host: 'localhost',
      app: 'live',
      streamName: 'prueba',
      swf: 'lib/red5pro/red5pro-publisher.swf',
      productInstallURL: 'lib/swfobject/playerProductInstall.swf',
      minFlashVersion: '10.0.0',
      streamMode: 'live',
      mediaElementId: 'red5pro-publisher',
      embedWidth: '100%',
      embedHeight: '100%',
      mediaConstraints: {
        audio: true,
        video: {
          width: 640,
          height: 480,
          framerate: 15,
          bandwidth: 50000,
          quality: 80,
          profile: 'baseline',
          level: '3.1'
        }
      }
    })
    .then(function() {
      // Invoke the publish action.
      return publisher.publish();
    })
    .catch(function(error) {
      // A fault occurred while trying to initialize and publish the stream.
      console.error(error);
    });

})(window.red5prosdk);
