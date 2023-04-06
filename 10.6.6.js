let massiv = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 's'];

let massivrez = true;
for (let i = 0; i < massiv.length - 1; i++){
    for (let j = i + 1; j < massiv.length; j++){
        if (typeof(massiv[i]) !== typeof(massiv[j])){
            massivrez = false;
        }
    }
}
if (massivrez) {
    console.log("массив одинаковый");
} else {
    console.log("массив не одинаковый");
}