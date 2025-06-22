/**
 * Menentukan bilangan ganjil dan genap
 * 
 * Buatlah program untuk menentukan input bilangan apakah ganjil atau genap. Gunakan if-else dan function yang mengembalikan hasil "ganjil"/"genap"
 */

function checkOddEven(number) {
    console.log("===> SOAL 1");
    
    let status = ""
    
    if (typeof number === "number"){
         if (number % 2 == 0){
               status = "genap"
                
        }else{
                status = "ganjil"
        }
       
    }else {
          status = "invalid input"
    }
 return status
}

console.log(checkOddEven(5)); // ganjil
console.log(checkOddEven(2)); // genap
console.log(checkOddEven("enam")); // invalid input



// /**
//  * Menentukan usia dewasa
//  * 
//  * Buat sebuah program yang meminta usia seseorang, lalu gunakan if-else untuk menampilkan apakah seseorang tersebut sudah dewasa (>=18 tahun) atau belum. Gunakan if-else dan function yang mengembalikan string
//  */

function checkMature(number) {
  console.log("===> SOAL 2");
  let status = ""
    if (typeof number === "number" && number > 0){
         if (number >=18 ){
               status = "Dewasa"
        }else{
                status = "Belum dewasa"
        }
    }else {
          status = "invalid input"
    }
 return status
}



console.log(checkMature(18)); // Dewasa
console.log(checkMature(17)); // Belum dewasa
console.log(checkMature("enam")); // invalid input
console.log(checkMature(-1)); // invalid input



// /**
//  * Menentukan score student
//  * 
//  * Buat program yang mengubah nilai angka ke dalam nilai huruf (A, B, C, D, E) berdasarkan rentang berikut:
//  * 90 - 100: A
//  * 80 - 89: B
//  * 70 - 79: C
//  * 60 - 69: D
//  * < 60: E
//  * Gunakan if-else dan function yang mengembalikan string
//  */

function scoreReport(inputScore) {
  console.log("===> SOAL 3");
  
if (typeof inputScore !== "number" || inputScore < 0 || inputScore > 100) {
    return "invalid input";
  } else if (inputScore >= 90) {
    return "A";
  } else if (inputScore >= 80) {
    return "B";
  } else if (inputScore >= 70) {
    return "C";
  } else if (inputScore >= 60) {
    return "D";
  } else {
    return "E";
  }
}

console.log(scoreReport(90)); // A
console.log(scoreReport(89)); // B
console.log(scoreReport(75)); // C
console.log(scoreReport(59)); // E
console.log(scoreReport(101)); // invalid input
console.log(scoreReport(-1)); // invalid input
console.log(scoreReport("sembilan puluh")); // invalid input



// /**
//  * Menampilkan Bilangan Ganjil dari 1 sampai 20
//  * 
//  * Buat program yang menampilkan semua bilangan ganjil dari 1 sampai 20 menggunakan for loop
//  */

function loopCheckOddEven(number) {
  console.log("===> SOAL 4");
let status = ""
    if (typeof number === "number" && number > 0 && number <= 20){
        for (let index = 1; index <= number; index++) {
            if (index % 2 != 0){
                status = index + " " + "=> Bilangan Ganjil"
                console.log(status);
                
            }
            
        }
    }else {
          status = "invalid input"
             console.log(status);
    }
 
}

loopCheckOddEven(5)
// 1 => Bilangan Ganjil
// 2 => Bilangan Genap
// 3 => Bilangan Ganjil
// 4 => Bilangan Genap
// 5 => Bilangan Ganjil
loopCheckOddEven("lima") // invalid input



// /**
//  * Menghitung Total Jumlah Angka
//  * 
//  * Buat program yang menjumlahkan semua angka dari 1 sampai dengan 100 menggunakan loop. Gunakan function yang mengirimkan value hasil penjumlahan tersebut
//  */

function totalValue(inputNumber) {
  console.log("===> SOAL 5");
  if (typeof inputNumber === "number") {
    let totalNumber = 0;
    for (let index = 1; index <= inputNumber; index++) {
      totalNumber = totalNumber + index;
    }
    return totalNumber;
  } else {
    return "invalid input";
  }
}

console.log(totalValue(100)); // 5050
console.log(totalValue("empat")); // invalid input



// /**
//  * Menghitung huruf vokal
//  * 
//  * Buat program yang menerima sebuah string, lalu hitung berapa banyak huruf vokal (a, e, i, o, u) di dalam string tersebut. Gunakan function untuk mengembalikan value total jumlah huruf vocal
//  */


const vocals = ["a", "i", "u", "e", "o"];

function checkVowels(inputString) {
  console.log("===> SOAL 6");
  let count = 0;

  if (typeof inputString !== "string") {
    return "invalid input";
  } else {
    for (let index = 0; index < inputString.length; index++) {
      const char = inputString[index].toLowerCase();

      if (vocals.includes(char)) {
        count++;
      }
    }
  }

  return count;
}

console.log(checkVowels("I Love JavaScript")); // 6
console.log(checkVowels("mie ayam")); //4


// /**
//  * Cek karakter vokal atau konsonan
//  * 
//  * Buatlah sebuah fungsi untuk memeriksa apakah sebuah karakter adalah vokal atau konsonan
//  * 
//  * Langkah:
//  * 1. Buat sebuah fungsi bernama checkVowelConsonant.
//  * 2. Fungsi tersebut harus menerima satu parameter, contoh nama parameternya "char".
//  * 3. Gunakan pernyataan if, else if, dan else untuk memeriksa apakah char adalah vokal atau konsonan.
//  * 4. Anggap bahwa input selalu berupa SATU KARAKTER HURUF.
//  * 5. RETURN string "Vokal" atau "Konsonan" sesuai dengan nilai char.
//  */


function checkVowelConsonant(inputChar) {
  console.log("===> SOAL 7");
  // code di scope ini yaa
  if (typeof inputChar !== "string") {
    return "invalid input";
  } else {
    for (let index = 0; index < inputChar.length; index++) {
      const char = inputChar[index].toLowerCase();

      if (vocals.includes(char)) {
        return "Vokal";
      } else {
        return "Konsonan";
      }
    }
  }
}


console.log(checkVowelConsonant('A')); // Output: "Vokal"
console.log(checkVowelConsonant('b')); // Output: "Konsonan"
console.log(checkVowelConsonant('a')); // Output: "Vokal"



// /**
//  * Menentukan kelayakan Voting
//  * 
//  * Buatlah sebuah fungsi JavaScript yang memeriksa apakah seseorang memenuhi syarat untuk memberikan suara dalam pemilihan berdasarkan usia.
//  * 
//  * Langkah:
//  * 1. Buat sebuah fungsi bernama canVote.
//  * 2. Fungsi tersebut harus menerima satu parameter age.
//  * 3. Gunakan pernyataan if dan else untuk memeriksa apakah age lebih besar atau sama dengan 18.
//  * 4. RETURN tipe data BOOLEAN, true jika age >= 18, dan false jika tidak.
//  */

function canVote(age) {
  console.log("===> SOAL 8");
    let status = false
    // code di scope ini yaa
    if (age >= 18) {
        status = true
    }else {
        status = false
    }
    return status

}

console.log(canVote(20)); // true
console.log(canVote(17)); // false




// /**
//  * Menentukan Hari dalam Seminggu
//  * 
//  * Buatlah sebuah fungsi JavaScript yang menerima angka dan mengembalikan nama hari dalam seminggu.
//  * 
//  * Langkah:
//  * 1. Buat sebuah fungsi bernama getDayName.
//  * 2. Fungsi tersebut harus menerima satu parameter dayNumber (1 sampai 7).
//  * 3. Gunakan pernyataan if, else if, dan else untuk mengembalikan nama hari dalam seminggu:
//  *      a. 1: "Senin"
//  *      b. 2: "Selasa"
//  *      c. 3: "Rabu"
//  *      d. 4: "Kamis"
//  *      e. 5: "Jumat"
//  *      f. 6: "Sabtu"
//  *      g. 7: "Minggu"
//  * 4. RETURN "Nomor hari tidak valid" jika dayNumber tidak berada dalam rentang 1 sampai 7.
//  */

function getDayName(dayNumber) {
  console.log("===> SOAL 9");
    // code disini
    let status = ""
    if (dayNumber >= 1 && dayNumber <= 7) {
        switch (dayNumber) {
            case 1:
            status = "Senin"
            break
            case 2:
            status = "Selasa"
            break
            case 3:
            status = "Rabu"
            break
            case 4:
            status = "Kamis"
            break
            case 5:
            status = "Jumat"
            break
            case 6:
            status = "Sabtu"
            break
            case 7:
            status = "Minggu"
            break
        }
    } else {
        status = "Nomor hari tidak valid"
    }
    return status
}

console.log(getDayName(1)); // Output: "Senin"
console.log(getDayName(5)); // Output: "Jumat"
console.log(getDayName(8)); // Output: "Nomor hari tidak valid"




// /**
//  * Membalikkan Array
//  * 
//  * Buatlah sebuah fungsi JavaScript yang membalikkan urutan elemen dalam sebuah array menggunakan loop.
//  * 
//  * Langkah: 
//  * 1. Buat sebuah fungsi bernama reverseArray.
//  * 2. Fungsi tersebut harus menerima satu parameter berupa array arr.
//  * 3. Boleh menggunakan built in function, setelah itu dicoba mengunakan loop untuk membalikkan urutan elemen dalam array tersebut.
//  * 4. RETURN array yang telah dibalik.
//  */

function reverseArray(arr) {
  console.log("===> SOAL 10");
    // code disini yaa
    let reversed = []
    for (let index = arr.length-1 ; index >= 0; index--) {
        const element = arr[index];
        reversed.push(element)
        
    }
    return reversed
}

console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
console.log(reverseArray(['a', 'b', 'c'])); // Output: ['c', 'b', 'a']



// /**
//  * Buat function untuk mengecek apakah input tersebut palindrome, return true jika palindrome, dan jika tidak palindrome maka return false
//  * 
//  */

const isPalindrome = (inputUser) => {
  console.log("===> SOAL 11");
  let reversedArray = [];
  let splittedInput = inputUser.split("");

  for (let index = splittedInput.length - 1; index >= 0; index--) {
    reversedArray.push(splittedInput[index]);
  }

  return reversedArray.join("") === splittedInput.join("");
};

console.log(isPalindrome("kasur rusak")); // true
console.log(isPalindrome("kodok")); // true
console.log(isPalindrome("makan malam")); // false