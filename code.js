let message = prompt('Welcome! Place an order here & enter a list of comma-separated froyo flavors - Example: (coffee,cheery,raspberry,vanilla, and strawberry)',
    'vanilla,vanilla,vanilla,strawberry,coffee,coffee');

const froyoFlavorsArrays = message.split(',');
function countFlavors(arraysOfStrings) {
    const flavorCount = {};
    for (let i = 0; i < arraysOfStrings.length; i++) {
        if (flavorCount[arraysOfStrings[i]] === undefined) {
            flavorCount[arraysOfStrings[i]] = 1
        } else {
            flavorCount[arraysOfStrings[i]] += 1
        }
    }
    return flavorCount
}
console.log(countFlavors(froyoFlavorsArrays))

// const froyoFlavors = ['coffee', 'cheery', 'raspberry', 'vanilla', 'strawberry'];


// function nameFlavors() {
//     const totalFlavors = [];

//     for (let i = 0; i < froyoFlavors.length; i++) {

//     }
//     const flavors = totalFlavors + message;
//     return flavors
// };

// console.table(nameFlavors());

// function countFlavors(nameFlavors) {

//     const countEach = nameFlavors.split(",");
//     const countEachflavors = {};
//     countEach.forEach(count => {
//         if (countEachflavors[countEach]) {
//             countEachflavors[countEach]++;
//         }
//         else {countEachflavors[countEach] = 1;

//         }
//     });
//     return countEachflavors;

// }

console.log(message, typeof message);








// console.log('You have ordered'+ ' ' + message+ ' ' );






