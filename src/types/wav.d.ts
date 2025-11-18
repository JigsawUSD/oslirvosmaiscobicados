declare module 'wav' {
    import { Transform } from 'stream';

    export interface WriterOptions {
        channels?: number;
        sampleRate?: number;
        bitDepth?: number;
    }

    export class Writer extends Transform {
        constructor(options?: WriterOptions);
    }

    // You can add other exports from the 'wav' module if needed
}
