/*
Description:

Create a Vehicle class with private make and year properties and a getInfo() method.
Create a Car class extending Vehicle, adding a private model property and a getModel() method.
Example:

const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();   // Output: "Make: Toyota, Year: 2020"
myCar.getModel();  // Output: "Model: Corolla"
*/
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
var Vehicle = /** @class */ (function () {
    function Vehicle(make, year) {
        this.make = make;
        this.year = year;
    }
    Vehicle.prototype.getInfo = function () {
        return "Make: ".concat(this.make, ", Year: ").concat(this.year);
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, year, model) {
        var _this = _super.call(this, make, year) || this;
        _this.model = model;
        return _this;
    }
    Car.prototype.getModel = function () {
        return "Model: ".concat(this.model);
    };
    return Car;
}(Vehicle));
var myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo());
console.log(myCar.getModel());
// class Vehicle {
//     private make: string;
//     private year: string;
//     constructor(make: string, year: string) {
//       this.make = make;
//       this.year = year;
//     }
//     getInfo(): string {
//       return `Make: ${this.make}, Year: ${this.year}`;
//     }
//   }
//   class Car extends Vehicle {
//     private model: string;
//     constructor(make: string, year: string, model: string) {
//       super(make, year);
//       this.model = model;
//     }
//     getModel(): string {
//       return `Model: ${this.model}`;
//     }
//   }
//   // ✅ Usage
//   const myCar = new Car("Toyota", "2020", "Corolla");
//   console.log(myCar.getInfo());   // Make: Toyota, Year: 2020
//   console.log(myCar.getModel());  // Model: Corolla
