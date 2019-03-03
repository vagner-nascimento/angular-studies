import { Spacecraft, ContainerShip } from './base-ships';

class MilleniumFalcon extends Spacecraft implements ContainerShip {
    cargoContainers: number

    constructor(containers: number = 2) { //Default constructor value
        super("hyperdriver", "Millenium Falcon")
        this.cargoContainers = containers
    }

    //Overiding
    jumpIntoHyperspace() {
        if (Math.random() >= 0.5) {
            super.jumpIntoHyperspace()
        } else {
            console.log(`${this.name} failed to jump into space`);
        }
    }
}

export{ MilleniumFalcon }
