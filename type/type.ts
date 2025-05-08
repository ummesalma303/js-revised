/*
Description:

Create a Vehicle class with private make and year properties and a getInfo() method.
Create a Car class extending Vehicle, adding a private model property and a getModel() method.
Example:

const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();   // Output: "Make: Toyota, Year: 2020"
myCar.getModel();  // Output: "Model: Corolla"
*/


class Vehicle {
    private make: string;
    private year: number;
  
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
  
    getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }
  

  class Car extends Vehicle {
    private model: string;
    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
      }
      getModel(): string {
        return `Model: ${this.model}`;
    }

  }

  const myCar = new Car("Toyota", 2020, "Corolla");
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
  