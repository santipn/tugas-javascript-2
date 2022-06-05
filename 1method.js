//Method bawaan JavaScript

/* Method pada Array
* 1. Concat()   : Digunakan untuk menggabungkan dua atau lebih array pada array baru
* 2. Slice()    : Digunakan ketika ingin mengambil beberapa bagian pada array untuk menjadikannya array baru
* 3. Unshift()  : Menambahkan beberapa elemen baru di awal array
* 4. Push()     : Digunakan untuk menambah atau memasukkan beberapa elemen baru di akhir array
* 5. Shift()    : Menghilangkan elemen pertama pada sebuah array
* 6. Pop()      : Menghilangkan elemen terakhir pada sebuah array
* 7. Sort()     : Mengurutkan elemen array
* 8. Reverse()  : Digunakan untuk membalikkan urutan elemen pada array
* 9. Filter()   : Digunakan untuk mencari elemen pada array dan mengembalikan banyak nilai dalam bentuk array
* 10. Join()    : Mengubah isi array menjadi string kemudian menampilkannya secara default dipisahkan dengan koma
*
*/

const arrayA = ['Carmilla', 'Silvana', 'Valentina', 'Natalia']
const arrayB = ['Kagura', 'Odette', 'Rafaela']

const arrayC = arrayA.concat(arrayB);
console.log(arrayC)
console.log(arrayC.slice(1, 5))

arrayA.unshift('Karina', 'Kadita')                       //tambah elemen di awal array
arrayA.push('Pharsa', 'Aurora')                         //tambah elemen di akhir array
console.log(arrayA)

arrayA.shift()                                          //menghilangkan elemen awal
arrayA.pop()                                           //menghilangkan elemen akhir
console.log(arrayA)

console.log(arrayA.sort())
console.log(arrayA.reverse())
console.log(arrayA.join(' | '))

const deret = [40, 100, 1, 5, 25, 10];
const deret1 = deret.filter(function(x) {
    return x > 10;
})

console.log(deret1)

deret.sort(function(a, b){return a-b})
console.log(deret.join('   '))
