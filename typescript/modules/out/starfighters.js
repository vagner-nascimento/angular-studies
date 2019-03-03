"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var MilleniumFalcon = (function (_super) {
    __extends(MilleniumFalcon, _super);
    function MilleniumFalcon(containers) {
        if (containers === void 0) { containers = 2; }
        var _this = _super.call(this, "hyperdriver", "Millenium Falcon") || this;
        _this.cargoContainers = containers;
        return _this;
    }
    MilleniumFalcon.prototype.jumpIntoHyperspace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpIntoHyperspace.call(this);
        }
        else {
            console.log(this.name + " failed to jump into space");
        }
    };
    return MilleniumFalcon;
}(base_ships_1.Spacecraft));
exports.MilleniumFalcon = MilleniumFalcon;
