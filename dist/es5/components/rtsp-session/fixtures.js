export var responsesRaw = [
    "RTSP/1.0 200 OK\nCSeq: 1\nPublic: OPTIONS, DESCRIBE, GET_PARAMETER, PAUSE, PLAY, SETUP, SET_PARAMETER, TEARDOWN\nServer: GStreamer RTSP server\nDate: Wed, 03 Jun 2015 14:23:41 GMT\n\n",
    "RTSP/1.0 200 OK\nCSeq: 2\nContent-Type: application/sdp\nContent-Base: rtsp://192.168.0.3/axis-media/media.amp/\nServer: GStreamer RTSP server\nDate: Wed, 03 Jun 2015 14:23:42 GMT\nContent-Length: 623\n\nv=0\no=- 1188340656180883 1 IN IP4 192.168.0.3\ns=Session streamed with GStreamer\ni=rtsp-server\nt=0 0\na=tool:GStreamer\na=type:broadcast\na=range:npt=now-\na=control:rtsp://192.168.0.3/axis-media/media.amp?resolution=176x144&fps=1\nm=video 0 RTP/AVP 96\nc=IN IP4 0.0.0.0\nb=AS:50000\na=rtpmap:96 H264/90000\na=fmtp:96 packetization-mode=1;profile-level-id=4d0029;sprop-parameter-sets=Z00AKeKQWJ2AtwEBAaQeJEVA,aO48gA==\na=control:rtsp://192.168.0.3/axis-media/media.amp/stream=0?resolution=176x144&fps=1\na=framerate:1.000000\na=transform:0.916667,0.000000,0.000000;0.000000,1.000000,0.000000;0.000000,0.000000,1.000000\n",
    "RTSP/1.0 200 OK\nCSeq: 3\nTransport: RTP/AVP;unicast;client_port=40472-40473;server_port=50000-50001;ssrc=363E6C43;mode=\"PLAY\"\nServer: GStreamer RTSP server\nSession: Bk48Ak7wjcWaAgRD; timeout=60\nDate: Wed, 03 Jun 2015 14:23:42 GMT\n\n",
    "RTSP/1.0 200 OK\nCSeq: 4\nRTP-Info: url=rtsp://192.168.0.3/axis-media/media.amp/stream=0?resolution=176x144&fps=1;seq=10176;rtptime=2419713327\nRange: npt=now-\nServer: GStreamer RTSP server\nSession: Bk48Ak7wjcWaAgRD; timeout=60\nDate: Wed, 03 Jun 2015 14:23:42 GMT\n\n",
    "RTSP/1.0 200 OK\nCSeq: 5\nServer: GStreamer RTSP server\nSession: Bk48Ak7wjcWaAgRD; timeout=60\nDate: Wed, 03 Jun 2015 14:23:48 GMT\n\n",
];
export var responses = responsesRaw.map(function (item) {
    return item.split('\n').join('\r\n');
});
export var setupResponse = "RTSP/1.0 200 OK\nCSeq: 5\nRTP-Info: url=rtsp://192.168.0.3/axis-media/media.amp/stream=0?resolution=176x144&fps=1;seq=10176;rtptime=2419713327\nRange: npt=now-\nServer: GStreamer RTSP server\nSession: Bk48Ak7wjcWaAgRD; timeout=60\nDate: Wed, 03 Jun 2015 14:23:42 GMT\n\n"
    .split('\n')
    .join('\r\n');
export var sdpResponseVideoAudioSVG = "v=0\no=- 1188340656180883 1 IN IP4 192.168.0.96\ns=Session streamed with GStreamer\ni=rtsp-server\nt=0 0\na=tool:GStreamer\na=type:broadcast\na=range:npt=now-\na=control:rtsp://192.168.0.90/axis-media/media.amp?video=1&audio=1&svg=on\nm=video 0 RTP/AVP 96\nc=IN IP4 0.0.0.0\nb=AS:50000\na=rtpmap:96 H264/90000\na=fmtp:96 packetization-mode=1;profile-level-id=4d0032;sprop-parameter-sets=Z00AMuKQBRAevy4C3AQEBpB4kRU=,aO48gA==\na=control:rtsp://192.168.0.90/axis-media/media.amp/stream=0?video=1&audio=1&svg=on\na=framerate:12.000000\na=transform:1.000000,0.000000,0.000000;0.000000,1.000000,0.000000;0.000000,0.000000,1.000000\nm=audio 0 RTP/AVP 97\nc=IN IP4 0.0.0.0\nb=AS:32\na=rtpmap:97 MPEG4-GENERIC/16000/1\na=fmtp:97 streamtype=5;profile-level-id=2;mode=AAC-hbr;config=1408;sizelength=13;indexlength=3;indexdeltalength=3\na=control:rtsp://192.168.0.90/axis-media/media.amp/stream=1?video=1&audio=1&svg=on\nm=application 0 RTP/AVP 99\nc=IN IP4 0.0.0.0\na=rtpmap:99 image.svg.data/90000\na=control:rtsp://192.168.0.90/axis-media/media.amp/stream=2?video=1&audio=1&svg=on\n\n"
    .split('\n')
    .join('\r\n');
//# sourceMappingURL=fixtures.js.map