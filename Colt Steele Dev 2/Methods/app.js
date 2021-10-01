// const myMath = {
//     PI: 3.14159,
//     square(num) {
//         return num * num;
//     },
//     cube(num) {
//         return num ** 3;
//     }
// }

// const square = {
//     area (side) {
//         return side * side;},
//     perimeter (side) {
//         return side * 4;
//     },
// };

// square.area(4)

const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log(`${this.name} says Meow`);
    }
}

const meow2 = cat.meow;