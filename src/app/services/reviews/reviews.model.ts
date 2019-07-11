//Holds a TS class to represent a review object

export class Review {
    constructor(
        public id: number,
        public review: string,
        public rating: number,
        public posted: String,
        public restaaurant: String,
        public user: string    
        ) {}
}