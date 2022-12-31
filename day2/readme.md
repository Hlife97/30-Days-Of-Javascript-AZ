# 📔 2.Gün

## Verilənlər tipləri (data types)

Bir öncəki dərsimizdə verilənlər tipləri haqqında biraz məlumat əldə etdik. Verilənlər vəya dəyərlərin bir verilən (data) növü vardır.
Verilən (data) növləri verilənlərin xüsusiyyətlərini təsvir edir. Verilənlər (data) növlərini iki yerə bölmək olar:

1. Primitiv verilənlər (data) növləri
2. Primitiv olmayan verilənlər (data) növləri (Obyekt İstinadları)

## Primitiv verilənlər (data) növləri

JavaScript-də primitiv verilənlər növlərinə aşağıdakılar daxildir:

1.  Rəqəmlər (numbers) - Tam ve kəsr ədədlər (integer, floats)
2.  Sətir (strings) - Tək dırnaq, cüt dırnaq, tərs dırnaq ilı yazılan bütün məlumatlar (data)
3.  Booleanlar (booleans) - Doğru vəya yalnış
4.  Null - Boş dəyər vəya dəyərin olmaması
5.  Məchul (Undefined) - Hər hansı dəyər əlavə edilməmiş bir dəyişkən
6.  Simvol (Symbol) - Simvol konstruktoru tərəfindən yaradıla bilən unikal dəyər

JavaScript-də primitiv olmayan verilənlər növlərinə aşağıdakılar daxildir:

1. Obyektlər (Objects)
2. Massivlər (Arrays)

Gəlin primitiv və primitiv olmayan verilənlər tiplərinin nə olduğuna baxaq. Primitiv verilənlər növləri dəyişməz (dəyişdirilə bilməyən) verilənlər növləridir. Primitiv verilənlər növü yaradıldıqdan sonra onu dəyişdirə bilmərik.

Məsələn:

```js
let word = "JavaScript";
```

Əyər biz bu sözdəki string'i dəyişdirməyə çalışsaq, javaScript bizə xəta verəcək. Tək dırnaq, dırnaq, tərs dırnaq(backtik) içərisində istənilən verilənlər tipi(data type) bir **string** verilən tipidir(data type).

```js
word[0] = "Y";
```

Bu ifadə sözdəki string'i dəyişdirmir. Beləliklə, biz deyə bilərik ki string'lər dəyişdirilə bilməz vəya dəyişməz. Primitiv verilənlər tipi(data types) onun qiymətləri ilə müqayisə edilir. Fərqli verilənlər dəyərlərini müqayisə edək. Aşağıdakı nümunəyə baxın:

```js
let numOne = 3;
let numTwo = 3;

console.log(numOne == numTwo); // true

let js = "JavaScript";
let py = "Python";

console.log(js == py); //false

let lightOn = true;
let lightOff = false;

console.log(lightOn == lightOff); // false
```

## Primitiv olmayan verilənlər (data) növləri

Primitiv olmayan verilənlər (data) növləri dəyişdirilə bilən vəya dəyişkəndirlər. Biz primitiv olmayan verilənlər tipini yaratdıqdan sonra dəyişdirə bilərik. Bir array yaradaraq baxaq. Array, kvadrat mötərizədə verilənlərin dəyərlərinin siyahısıdır. Array'lər eyni və ya fərqli məlumat növlərini ehtiva edə bilər. Array dəyərlərinə onların indeksi ilə istinad edilir. JavaScript-də array indeksi sıfırdan başlayır. Yəni, array'in birinci elementi indeks sıfırda, ikinci element bir indeksdə, üçüncü element isə iki indeksdə və s.

```js
let nums = [1, 2, 3];
nums[0] = 10;

console.log(nums); // [10, 2, 3]
```

Gördüyünüz kimi, primitiv olmayan verilənlər tipi olan array dəyişkəndir. Primitiv olmayan verilənlər tipi(data types) dəyərlə müqayisə edilə bilməz. İki qeyri-primitiv məlumat növü eyni xassələrə və dəyərlərə malik olsa belə, onlar qəti şəkildə bərabər deyillər.

```js
let nums = [1, 2, 3];
let numbers = [1, 2, 3];

console.log(nums == numbers); // false

let userOne = {
  name: "Asabeneh",
  role: "teaching",
  country: "Finland",
};

let userTwo = {
  name: "Asabeneh",
  role: "teaching",
  country: "Finland",
};

console.log(userOne == userTwo); // false
```

Əsas qayda, biz primitiv olmayan məlumat növlərini müqayisə etmirik. Arrayləri, funksiyaları(functions) və ya obyektləri(objects) müqayisə etməyin. Primitiv olmayan dəyərlərə istinad növləri(reference types) deyilir, çünki onlar dəyər əvəzinə istinadla(reference) müqayisə edilir. İki obyekt(object) yalnız eyni əsas obyektə istinad etdikdə ciddi şəkildə bərabərdir.

```js
let nums = [1, 2, 3];
let numbers = nums;

console.log(nums == numbers); // true

let userOne = {
  name: "Asabeneh",
  role: "teaching",
  country: "Finland",
};

let userTwo = userOne;

console.log(userOne == userTwo); // true
```

Primitiv məlumat növləri ilə qeyri-primitiv məlumat növləri arasındakı fərqi anlamaqda çətinlik çəkirsinizsə, siz tək deyilsiniz. Sakitləşin və sadəcə növbəti hissəyə keçin və bir müddət sonra geri qayıtmağa çalışın. İndi rəqəm tipinə görə verilənlər tipinə(data types) başlayaq.

## Ədədlər (Numbers)

Ədədlər bütün arifmetik əməliyyatları yerinə yetirə bilən tam ədədlər və onluq ədədlərdir. Ədədlərin bəzi nümunələrinə baxaq.

```js
let age = 35;
const gravity = 9.81; // dəyişməyən dəyərlər üçün const istifadə edirik, m/s2-də qravitasiya sabiti
let mass = 72; // kiloqramda kütlə
const PI = 3.14; // pi həndəsi sabitdir

// Daha çox nümunə
const boilingPoint = 100; // oC-də temperatur, sabit olan suyun qaynama nöqtəsi
const bodyTemp = 37; // oC sabit olan orta insan bədən temperaturu

console.log(age, gravity, mass, PI, boilingPoint, bodyTemp);
```

## Riyaziyyat obyekti (Math Object)

JavaScript-də Riyaziyyat Obyekti rəqəmlərlə işləmək üçün çoxlu üsullar təqdim edir.

```js
const PI = Math.PI;

console.log(PI); // 3.141592653589793

// Ən yaxın ədədə yuvarlaqlaşdırma
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI)); // 3 to round values to the nearest number

console.log(Math.round(9.81)); // 10

console.log(Math.floor(PI)); // 3 aşağı yuvarlaqlaşdırma

console.log(Math.ceil(PI)); // 4 yuxarı yuvarlaqlaşdırma

console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5, minimum dəyəri qaytarır

console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20, maximum dəyəri qaytarır

const randNum = Math.random(); // 0 ilə 0,999999 arasında təsadüfi(random) ədəd yaradır
console.log(randNum);

// Gəlin 0 ilə 10 arasında təsadüfi(random) ədəd yaradaq

const num = Math.floor(Math.random() * 11); // 0 ilə 10 arasında təsadüfi(random) ədəd yaradır
console.log(num);

//Mütləq dəyər
console.log(Math.abs(-10)); // 10

//Kvadrat kök
console.log(Math.sqrt(100)); // 10

console.log(Math.sqrt(2)); // 1.4142135623730951

// Güc
console.log(Math.pow(3, 2)); // 9

console.log(Math.E); // 2.718

// Loqarifm
// x, Math.log(x) E bazası ilə təbii loqarifmanı qaytarır
console.log(Math.log(2)); // 0.6931471805599453
console.log(Math.log(10)); // 2.302585092994046

// müvafiq olaraq 2 və 10-un natural loqarifmini verir
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LN10); // 2.302585092994046

// Triqonometriya
Math.sin(0);
Math.sin(60);

Math.cos(0);
Math.cos(60);
```

### Təsadüfi ədəd generatoru (Random number generator)

JavaScript Riyaziyyat Obyektində 0-dan 0,999999999...-a qədər ədəd yaradan random() metodu sayı generatoru var.

```js
let randomNum = Math.random(); // 0-dan 0.999...-a qədər yaradın.
```

İndi gəlin 0 ilə 10 arasında təsadüfi ədəd yaratmaq üçün random() metodundan necə istifadə edə biləcəyimizi görək:

```js
let randomNum = Math.random(); // 0-dan 0.999-a qədər yaradır
let numBtnZeroAndTen = randomNum * 11;

console.log(numBtnZeroAndTen); // bu: min 0 və maksimum 10,99 - cavabını verir

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen);
console.log(randomNumRoundToFloor); // bu 0 ilə 10 arasında random ədəd verir
```

## Stringlər (Strings)

Stringlər mətnlərdir, hansı ki tək **dırnaq, dırnaq və tərs dırnaq(back-tick)** arasında yazılır. String tanımlamaq üçün bizə, dəyişən adı, təyinat operatoru, tək dırnaq, qoşa dırnaq və ya tərs dırnaq içindəki dəyər yetərlidir. Bir neçə string nümunəsinə baxaq:

```js
let space = " "; // boş sətir(string)
let firstName = "Asabeneh";
let lastName = "Yetayeh";
let country = "Finland";
let city = "Helsinki";
let language = "JavaScript";
let job = "teacher";
let quote = "The saying,'Seeing is Believing' is not correct in 2020.";
let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`;
```

## String Birləşdirmə

İki və ya daha çox sətirin bir-birinə bağlanmasına birləşmə deyilir. Əvvəlki String bölməsində elan edilmiş sətirlərdən istifadə edərək:

```js
let fullName = firstName + space + lastName; // birləşdirmək, iki sətri bir-birinə qovuşdurmaq.
console.log(fullName);
```

```js
Asabeneh Yetayeh
```

Biz sətirləri müxtəlif yollarla birləşdirə bilərik.

### Əlavə operatorundan istifadə edərək birləşdirici

Əlavə operatorundan istifadə edərək birləşmə köhnə üsuldur. Bu birləşmə üsulu yorucu və səhvlərə meyllidir. Bu şəkildə necə birləşdiriləcəyini bilmək yaxşıdır, lakin mən ES6 şablon sətirlərindən istifadə etməyi şiddətlə təklif edirəm (sonra izah ediləcək).

```js
// Fərqli məlumat növlərinin müxtəlif dəyişənlərinin elan edilməsi
let space = ' '
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250


let fullName =firstName + space + lastName
let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country; // ES5 string addition

console.log(personInfoOne)
```

```js
Asabeneh Yetayeh. I am 250. I live in Finland
```

### Uzun Hərfi Stringlər

Stringlər tək simvol və ya paraqraf və ya səhifə ola bilər. Əgər Stringin uzunluğu çox böyükdürsə, bir sətirə sığışmayacaq. Biz yeni setirdən başlamaq üçün tərs slahs (\) istifadə edirik. Məsələn: 

```js
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)
```