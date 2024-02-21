class Car{
  constructor(doors, engine, color){
    this.doors = doors;
    this.engine = engine;
    this.color= color;
  }
  carStatus(){
    return `This car has ${this.doors} doors, a ${this.engine} and a beutiful ${this.color} color!`
  }
  static totaldoor(a, b){
    const door1 = a.doors;
    const door2 = b.doors;
    return `Total car doors ${door1 + door2}`;
  }
}

class SUV extends Car{
  constructor(doors, engine, color, brand, carStatus){
    super(doors, engine, color, carStatus)
    this.brand  = brand;
    this.wheel = 4;
    this.ac = true;

  }
  myBrand(){
    return `This SUV is a ${this.brand}`;
  }

}

const car1 = new Car(4,'v6','Grey');

const car2 = new SUV(6,'v6','blue', 'Truck');

console.log(car2);
console.log(car2.carStatus());
const brand1 = car2.myBrand();
console.log(brand1);
console.log(SUV.totaldoor(car1, car2));

// console.log(car2);
// console.log(Car.totaldoor(car1, car2));


// Function hoisted(means put in the top) canbe overwritten
//Classes Not hoisted cannot be overwritten


// const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
// //const body = document.body;
// const para = document.createElement('p');
// console.log(para);
// // Add your code here
// const section = document.createElement('section');
// console.log(section)
// para.textContent  = '';

    
// let random = Math.floor(Math.random() * names.length) 


// function chooseNames(){
//   const array = [];
//   for(nam in names){
//     para.textContent = `${array.push(names[nam])}`;
//   }
//    para.textContent = `${array[random]}`;
//    para.style.color = 'black'
//    para.style.background = 'yellow'

// }
// chooseNames()

// // Don't edit the code below here!

// section.innerHTML = ' ';
// section.appendChild(para);
// //body.appendChild(section);

// const canvas = document.createElement('canvas');
// const ctx = canvas.getContext('2d');
// document.body.appendChild(canvas);

// const x = 100;
// const y = 75;
// const width = 120;
// const height = 75;
// const color = 'blue';

// // Add your code here
// // Function to draw a rectangle on the canvas
// function drawRectangle(x, y, width, height, color) {
//   // Clear the canvas
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   // Set the fill color
//   ctx.fillStyle = color;

//   // Draw the rectangle
//   ctx.fillRect(x, y, width, height);
// }

// // Test the function with provided input variables
// drawRectangle(x, y, width, height, color);

    

class Person{
  constructor(_name, _age){
    this.name = _name;
    this.age = _age;
  }
  describe(){
    console.log(`I am ${this._name} year ${_age}`)
  }
} 