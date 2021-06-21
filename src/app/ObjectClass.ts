export class ObjectClass {
    id: number;
    type: string;
    url: string;
    delimiter: string;
    name: string;
    Reader() {
        this.type = 'FILE_PDF';
        this.url = 'localhost';
        this.delimiter = ":";
        this.id = 123;
    }
}