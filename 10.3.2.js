let num = "";

if ((typeof(num) == 'number')&&(!isNaN(num))) {
    console.log("x — число");
} else if (typeof(num) == 'string') {
    console.log("x — String");
} else if (typeof(num) == 'boolean') {
    console.log("x — Boolean");
} else {
    console.log("Тип x не определён");
}