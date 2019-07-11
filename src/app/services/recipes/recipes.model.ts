//Holds a TS class to represent a recipe object

export class Menu {
    constructor(
        public id: number,
        public recipeName: string,
        public description: string,
        public restaurant: string
    ) {}
}