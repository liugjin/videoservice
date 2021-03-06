/// <reference types="node" />
export declare const rtpBuffers: Buffer[];
export declare const rtpBuffersWithHeaderExt: Buffer[];
export declare const rtcpBuffers: Buffer[];
export declare const sdpResponse: string;
export declare const sdpResponseLive555: string;
export declare const setupResponse: string;
export declare const setupResponseNoTimeout: string;
export declare const teardownResponse: string;
export declare const optionsResponseLowerCase = "RTSP/1.0 200 OK\nServer: H264DVR 1.0\ncseq: 1\nPublic: OPTIONS, DESCRIBE, SETUP, TEARDOWN, GET_PARAMETER, PLAY, PAUSE\n\n";
