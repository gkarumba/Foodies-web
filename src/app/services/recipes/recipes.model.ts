//Holds a TS class to represent a recipe object

export class Recipe {
    constructor(
        public id: number,
        public recipeName: string,
        public description: string,
    ) {}
}