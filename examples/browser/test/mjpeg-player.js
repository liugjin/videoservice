const { pipelines } = window.mediaStreamLibrary

const play = host => {
  // Grab a reference to the video element
  const mediaElement = document.querySelector('canvas')

  // Setup a new pipeline
  const pipeline = new pipelines.Html5CanvasPipeline({
    ws: { uri: `ws://${host}:8854/` },
    rtsp: { uri: `rtsp://admin:huayuan666@192.168.2.250/h264/ch1/sub/av_stream` },
    mediaElement,
  })
  pipeline.ready.then(() => {
    pipeline.rtsp.play()
  })
}

play(window.location.hostname)
