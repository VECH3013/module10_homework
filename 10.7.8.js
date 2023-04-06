let fruits = new Map();
fruits.set("Яблоко", "красный");
fruits.set("мандарин", "оранжевый");
fruits.set("банан", "желтый");
fruits.set("гранат", "Красный");

for (let user of fruits.keys()){
    console.log(user + " этот фрукт " + fruits.get(user));
}
