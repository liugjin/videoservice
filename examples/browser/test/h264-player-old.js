const { pipelines } = window.mediaStreamLibrary

const play = host => {
  // Grab a reference to the video element
  const mediaElement = document.querySelector('video')
  console.log(`ws://${host}:8854/`);
  // Setup a new pipeline1
  // const pipeline1 = new pipelines.Html5VideoPipeline({
  //   ws: { uri: `ws://${host}:8854/` },
  //   rtsp: { uri: `rtsp://admin:Huayuan666@192.168.0.201/h264/ch1/sub/av_stream` },
  //   mediaElement:mediaElementa,
  // })
  // pipeline1.ready.then(() => {
  //   pipeline1.rtsp.play()
  // })
  const pipeline2=new pipelines.Html5VideoPipeline(
      {
          ws: { uri: `ws://${host}:8854/` },
          rtsp: { uri: `rtsp://admin:huayuan666@192.168.2.250/Streaming/Channels/101?transportmode=unicast` },
          auth: { username: 'admin', password: 'huayuan666'},
          mediaElement:mediaElement,
      }

  )
  pipeline2.ready.then(() => {
        pipeline2.rtsp.play()
  })
}

play("127.0.0.1")
