/// <reference types="node" />
export declare const version: (buffer: Buffer) => number;
export declare const padding: (buffer: Buffer) => boolean;
export declare const extension: (buffer: Buffer) => boolean;
export declare const cSrcCount: (buffer: Buffer) => number;
export declare const marker: (buffer: Buffer) => boolean;
export declare const payloadType: (buffer: Buffer) => number;
export declare const sequenceNumber: (buffer: Buffer) => number;
export declare const timestamp: (buffer: Buffer) => number;
export declare const sSrc: (buffer: Buffer) => number;
export declare const cSrc: (buffer: Buffer, rank?: number) => number;
export declare const extHeaderLength: (buffer: Buffer) => number;
export declare const extHeader: (buffer: Buffer) => Buffer;
export declare const payload: (buffer: Buffer) => Buffer;
