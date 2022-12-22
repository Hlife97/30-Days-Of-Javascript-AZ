# 📔 2.Gün

## Verilənlər (data) tipləri

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
