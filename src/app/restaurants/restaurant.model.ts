//Holds a TS class to represent a restaurant

export class Restaurant {
    constructor(
        public name: string,
        public category: string,
        public location: string,
        public description: string,
        public information:  any[],
        public foods: any[],
        public reviews:  any[]
    ) {}
}