//Holds a TS class to represent a restaurant

export class Restaurant {
    constructor(
        public id: number,
        public name: string,
        public location: string,
        public image: string
    ) {}
}