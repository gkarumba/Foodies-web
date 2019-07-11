//Holds a TS class to represent a menu

export class Menu {
    constructor(
        public id: number,
        public name: string,
        public category: string,
        public description: string,
        public price: number,
    ) {}
}