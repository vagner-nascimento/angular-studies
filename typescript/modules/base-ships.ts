//NOTE: You can export like this way bellow, but isn't the best way
// export class Spacecraft {
//     constructor(public propulsor: string){}
// }
// export interface ContainerShip {
//     cargoContainers: number
// }
class Spacecraft {
    constructor(public propulsor: string, public name: string = "Default"){}

    jumpIntoHyperspace() {
        //keyword 'this' is mandatory to acces class's properties
        console.log(`${this.name} has entering into hyperspace with ${this.propulsor}`);
    }
}

interface ContainerShip {
    cargoContainers: number
}

export{ Spacecraft, ContainerShip} //That's the most commom and most descritive
