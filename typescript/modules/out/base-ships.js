"use strict";
exports.__esModule = true;
var Spacecraft = (function () {
    function Spacecraft(propulsor, name) {
        if (name === void 0) { name = "Default"; }
        this.propulsor = propulsor;
        this.name = name;
    }
    Spacecraft.prototype.jumpIntoHyperspace = function () {
        console.log(this.name + " has entering into hyperspace with " + this.propulsor);
    };
    return Spacecraft;
}());
exports.Spacecraft = Spacecraft;
