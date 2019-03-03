//Importing types and functions from a module file
//The path is always relative and doesn't need extension: './base-ships'
import { Spacecraft, ContainerShip } from './base-ships';
import { MilleniumFalcon } from './starfighters';

//NOTE: Import @types helps to prevent errors on development: npm install --save-dev @types/lodash@4.14
import * as _ from 'lodash' //namespace import: imports everything from the namespace into variable '_' default of lodash
console.log(_.pad("Typescript Examples", 40, "="));

let ship = new Spacecraft("hyperdriver")
ship.jumpIntoHyperspace()

let randomx10: number = Math.random() * 10;
let cargos: number = Math.round(randomx10)
let falcon = new MilleniumFalcon(cargos)
falcon.jumpIntoHyperspace()

let goodForTheJob = (ship: ContainerShip) => ship.cargoContainers > 2
console.log(`Is ${falcon.name} good for the transport job? ${goodForTheJob(falcon) ? "Yes" : "No"}`);
