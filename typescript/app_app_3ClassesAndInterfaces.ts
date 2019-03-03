class Spacecraft {
    /*
        In Typescript, the parameters informmed in constructor automatically creates 
        public properties with the same names
    */
    constructor(public propulsor: string){}

    //Methods don't need 'function' keyword
    jumpIntoHyperspace() {
        console.log(`Entering into hyperspace with ${this.propulsor}`);// 'this' is mandatory to acces class's properties
    }
}

let ship = new Spacecraft("hyperdriver")
//ship.jumpIntoHyperspace()

class MilleniumFalcon extends Spacecraft implements ContainerShip {

    cargoContainers: number //is mandatory, come from ContainerShip interface implementation

    constructor() {
        super("hyperdriver")
        this.cargoContainers = 4
    }

    //Overiding
    jumpIntoHyperspace() {
        if (Math.random() >= 0.5) {
            super.jumpIntoHyperspace()
        } else {
            console.log("Failed to jump into space");            
        }
    }
}

let falcon = new MilleniumFalcon()
falcon.jumpIntoHyperspace()

/*
    Classes creates functions and prototypes in '.js' files to respresent TS's classes.
    Interfaces are used only for check classes strctures, it dont create nothing in '.js' files
*/
interface ContainerShip {

    //cargoContainers?: number //you can define optinal attributes using '?' in fron of its name
    cargoContainers: number
}

let goodForTheJob = (ship: ContainerShip) => ship.cargoContainers > 2
console.log(`Is Falcon good for the transport job? ${goodForTheJob(falcon) ? "Yes" : "No"}`);
