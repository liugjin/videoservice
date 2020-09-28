const { pipelines } = window.mediaStreamLibrary

const play = host => {
  // Grab a reference to the video element
  const mediaElementa = document.querySelector('#video-abc1')
  const mediaElementb = document.querySelector('#video-abc2')
    const mediaElementc = document.querySelector('#video-abc3')
    const mediaElementd = document.querySelector('#video-abc4')
  console.log(`ws://${host}:8854/`);
  // Setup a new pipeline1
  const pipeline1 = new pipelines.Html5VideoPipeline({
    ws: { uri: `ws://127.0.0.1:8854/` },
    rtsp: { uri: `rtsp://admin:huayuan666@192.168.2.250/h264/ch1/sub/av_stream` },
    auth: { username: 'admin', password: 'huayuan666'},
    mediaElement:mediaElementa,
  })
  pipeline1.ready.then(() => {
    pipeline1.rtsp.play()
  })
  const pipeline2=new pipelines.Html5VideoPipeline(
      {
          ws: { uri: `ws://127.0.0.1:8854/` },
          rtsp: { uri: `rtsp://admin:huayuan666@192.168.2.250/h264/ch1/main/av_stream` },
		  auth: { username: 'admin', password: 'huayuan666'},
          mediaElement:mediaElementb,
      }
  )
  pipeline2.ready.then(() => {
        pipeline2.rtsp.play()
  })
    const pipeline3 = new pipelines.Html5VideoPipeline({
        ws: { uri: `ws://127.0.0.1:8854/` },
        rtsp: { uri: `rtsp://admin:huayuan666@192.168.2.250/h264/ch1/sub/av_stream` },
        auth: { username: 'admin', password: 'huayuan666'},
        mediaElement:mediaElementc,
    })
    pipeline3.ready.then(() => {
        pipeline3.rtsp.play()
    })
    const pipeline4 = new pipelines.Html5VideoPipeline({
        ws: { uri: `ws://127.0.0.1:8854/` },
        rtsp: { uri: `rtsp://admin:huayuan666@192.168.2.250/h264/ch1/sub/av_stream` },
        auth: { username: 'admin', password: 'huayuan666'},
        mediaElement:mediaElementd,
    })
    pipeline4.ready.then(() => {
        pipeline4.rtsp.play()
    })
}

play("127.0.0.1")
