let massiv = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'd', null, 'e'];
let countEven = 0;
let countOdd = 0;
let countOther = 0;

for (let i = 0; i < massiv.length; i++){
    if ((massiv[i] === 0) || (typeof(massiv[i]) != 'number')) {
        countOther++;
    } else {
        if (massiv[i] % 2 === 0) {
            countEven++;
        } else {
            countOdd++;
        }
    }
}

console.log("четных " + countEven);
console.log("нечетных " + countOdd);
console.log("Других " + countOther);
