//Holds a TS class to represent a information

export class Information {
    constructor(
        public id: number,
        public timeOPen: string,
        public timeClosed: String,
        public description: string,
        public location: string,
        public contact: string
    ) {}
}