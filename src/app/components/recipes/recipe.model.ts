//. - Model -
//. Simply a blueprint for an object 
//. We create it using a class so as to instantiate it

//| - Constructor -
//| constructor allows us to instantiate the class with the NEW keyword
//| It's simply a built in function every class has and will be executed once when a new instance is created  
//| Whithin it we then assign the properties of our class to the values passed in. 

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, desc: string, imagePath, string){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}