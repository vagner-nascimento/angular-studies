class SpacecraftOne {
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

let shipOne = new SpacecraftOne("hyperdriver")
//shipOne.jumpIntoHyperspace()

class MilleniumFalconOne extends SpacecraftOne implements ContainerShipOne {

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

let falconOne = new MilleniumFalconOne()
falconOne.jumpIntoHyperspace()

/*
    Classes creates functions and prototypes in '.js' files to respresent TS's classes.
    Interfaces are used only for check classes strctures, it dont create nothing in '.js' files
*/
interface ContainerShipOne {

    //cargoContainers?: number //you can define optinal attributes using '?' in fron of its name
    cargoContainers: number
}

let goodForTheJobOne = (ship: ContainerShipOne) => ship.cargoContainers > 2
console.log(`Is Falcon good for the transport job? ${goodForTheJobOne(falconOne) ? "Yes" : "No"}`);
