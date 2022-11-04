"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Transporte = /** @class */ (function () {
    function Transporte(marca, modelo, año, arrancar, velocidad) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.arrancar = arrancar;
        this.velocidad = velocidad;
    }
    Transporte.prototype.apagarTransporte = function () {
        this.arrancar = true;
    };
    Transporte.prototype.prenderTransporte = function () {
        this.arrancar = false;
    };
    Transporte.prototype.subirVelocidad = function () {
        this.velocidad = 0;
    };
    Transporte.prototype.bajarVelocidad = function () {
        this.velocidad = 0;
    };
    return Transporte;
}());
var Aereo = /** @class */ (function (_super) {
    __extends(Aereo, _super);
    function Aereo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Aereo.prototype.volar = function () {
        console.log("Este transporte pertenece a la clase ");
    };
    return Aereo;
}(Transporte));
var Acuatico = /** @class */ (function (_super) {
    __extends(Acuatico, _super);
    function Acuatico() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Acuatico.prototype.navegar = function () {
        console.log("Este transporte pertenece a la clase ");
    };
    return Acuatico;
}(Transporte));
var Terrestre = /** @class */ (function (_super) {
    __extends(Terrestre, _super);
    function Terrestre() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Terrestre.prototype.transitar = function () {
        console.log("Este transporte pertenece a la clase ");
    };
    return Terrestre;
}(Transporte));
var miAvion = new Aereo("Tango", "007", 2011, true, 700);
var miBarco = new Acuatico("Yate", "Imperial", 2013, true, 90);
var miAuto = new Terrestre("Toyota", "Corolla", 2015, true, 120);
console.log(miAvion, miAvion.volar());
console.log(miBarco, miBarco.navegar());
console.log(miAuto, miAuto.transitar());
