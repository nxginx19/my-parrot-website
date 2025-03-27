console.log("Hello World");

let name = "Mickey";
let age = 30;
let employed = "Entertainer";
let parking_space = true;

let data = [name, age, employed]

for(let data_point of data){
console.log(data_point)};

console.log(name);
console.log(age);
console.log(employed);
console.log(name.length);

console.log(name + " is a " + age + " year old " + employed);
console.log(`${name} is a ${age} year old ${employed}`);

let speed = 50
console.log(speed * 2);
console.log(speed / 2);
console.log(speed + 2);

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

console.log(Math.floor());
console.log(Math.random() * speed);
console.log(Math.floor(Math.random() * speed));


let collection = [10, 20, 30, 22, 11, 9];
console.log(Math.min(10, 50));
console.log(Math.max(10, 50));
console.log(Math.max(...collection));
console.log(Math.PI);

console.dir(collection);

/*function canIPrintThis(){
    let value_a = 'a'
    var value_b = 'b'
}

console.log(value_a);
console.log(value_b);
*/


let daysInYear = 365
let weeksInYear = 52
let daysInWeek = 7

console.log(daysInYear + 1)
console.log(daysInWeek - 2)
console.log((daysInWeek - 2)* 52)
console.log(weeksInYear / 12)

let a =1;
a++;
console.log(a);
a--;
console.log(a);

console.log ( typeof name);
console.log ( typeof age);
console.log ( typeof parking_space);

if (typeof name == 'string'){
    console.log(`${name} is a string`)
} else {
    console.log(`${name} is not a string`)
}



