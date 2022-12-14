// ilkel olmayan veri turlerinde diziler degerler esit olsa bile bir dizi digerine esit degildir.
let nums1 = [1, 2, 3]
let nums2 = [1, 2, 3]

let mix1 = [1, 'hlife', 3]
let mix2 = [1, 'hlife', 3]

console.log(nums1 == nums2) //false
console.log(mix1 == mix2) //false


// ama ayni diziyi (nesneyi) temsil ediyor ise o zaman esit olabilir

let numbers1 = [1, 2, 3]
let numbers2 = numbers1

console.log(numbers1 == numbers2) // true

// Match object  -- matematiksel objeler

const PI = Math.PI

console.log(PI) // 3.14.....

console.log(Math.round(PI)) // pi sayisini yuvarliyor "round yuvarlama fonksiyonudur" 3.144 3 e yuvarlandi

console.log(Math.floor(PI)) // asagiya yuvarlar yani 3.99 olsa bile 3 e yuvarlar

console.log(Math.ceil(PI)) // bu ise uste yuvarlar yani 3.01 bile olsa 4 e yuvarlar

console.log(Math.min(5, -9, 25, -36, 99)) // return the min value. resoult  = -36

console.log(Math.max(5, -9, 25, -36, 99)) //return the max value. resoult = 99


const randomNumber = Math.random(); // create random number between 0 and 0.9999999

console.log(randomNumber);

const randomNumberCustom = Math.floor(Math.random() * 11); // create random number between 0 and 10

console.log(randomNumberCustom);

// Strings

let Name = 'Hidayet';
let surname = 'Hidayetov';
let fullName = Name + " " + surname; // concatenation, mergin two string together

console.log(fullName);

console.log(`${Name} Hidayetov `);

// length
let js = 'JavaScript';
console.log(js.length);

console.log(js.length - 1);
console.log(js.toUpperCase());
console.log(js.toLowerCase());
console.log(js.substr(4, 2));

let myFullName = 'Hidayet Hidayetov';

console.log(myFullName.split(' ')); // full name'i bosluktan sonra parcalar ve diziye atar.

let test = 'hidayet';
let testArr = test.split(''); // * diziye cevirir ['h', 'i', ....]
let reverse = testArr.reverse(); // * diziyi terse cevrir ['t', 'e',...]
let join = reverse.join(''); // * stringe cevirir 
console.log(join); // ? ekran ciktisi = teyadih

// trim
let trim = '  hido   ';

console.log(trim.trim()); // trim fonksiyonu gereksiz bosluklari kaldirir