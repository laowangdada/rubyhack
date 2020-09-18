export class JobVO {
    id: number;
    name: string;
    desc: string;
    rId: number;
    pId: number;
    wId: number;
    reader: Reader;
    writer: Writer;
    processor: Processor;
    processer: Processor;
}


export class Reader {
    id: number;
    type: string;
    url: string;
    delimiter: string;
    name: string;
    Reader() {
        this.type = 'FILE_PDF';
        this.url = 'localhost';
        this.delimiter = ":";

    }
}
export class Writer {
    id: number;
    name:string;
    url: string;
    type: string;
    delimiter: string;
}
export class Processor {
    id: number;
    name:string;
    type: string;
}