export class Log {
    id: string
    starDate: string
    logEntry: string

    constructor(data: Log) {
        this.id = data.id;
        this.starDate = data.starDate;
        this.logEntry = data.logEntry;
    }
}