const printSegitiga = 5

// validasi untuk mengecek jika harus number
if (typeof(printSegitiga) === "number") {
  
  // looping pertama
  for(let i = printSegitiga; i > 0; i--) {
    let result = ""

    // looping kedua dan ada di dalam dari loop pertama
    for(let a = 1; a <= i; a++) {
      result += a + " "
    }

    console.log(result);
  }

} else {
  console.log('Data harus number');
}