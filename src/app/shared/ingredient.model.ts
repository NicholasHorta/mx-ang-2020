//? If our class properties are being named the same in our constructor 
//? We can use a shortcut and simply supply the properties in the constructor 

export class Ingredient {
    /// public name: string;
    /// public amount: number;
    constructor(public name: string, public amount: number){
        /// this.name = name;
        /// this.amount = amt;
    }
}