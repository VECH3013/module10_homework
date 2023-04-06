let input = prompt("Введите значение");
console.log(input);

if ((typeof(+input) == 'number') && (!isNaN(+input))){
    if (input % 2 === 0) {
        console.log("Число четное");
    } else {
        console.log("Число не четное");
    }
} else {
    console.log("Упс, кажется, вы ошиблись");
}