const mtk = 89
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa =  69

// const result = (mtk+bahasaIndonesia+bahasaInggris+ipa)/4

// if (result >= 90 && result <= 100) {
//   console.log(`Rata-rata = ${result} \nGrade = A`);
// } else if (result >= 80 && result <= 89) {
//   console.log(`Rata-rata = ${result} \nGrade = B`);
// } else if (result >= 70 && result <= 79) {
//   console.log(`Rata-rata = ${result} \nGrade = C`);
// } else if (result >= 60 && result <= 69) {
//   console.log(`Rata-rata = ${result} \nGrade = D`);
// } else {
//   console.log(`Rata-rata = ${result} \nGrade = E`);
// }


/*=============== Perbaikan 1.0  =============== */


let result = 0;
let grade = "";

// if (mtk !== null && mtk !== undefined && mtk >= 0 && mtk <= 100) {
//   if (bahasaIndonesia !== null && bahasaIndonesia !== undefined && bahasaIndonesia >= 0 && bahasaIndonesia <= 100) {
//     if (bahasaInggris !== null && bahasaInggris !== undefined && bahasaInggris >= 0 && bahasaInggris <= 100) {
//       if (ipa !== null && ipa !== undefined && ipa >= 0 && ipa <= 100) {
        
//         result = (mtk+bahasaIndonesia+bahasaInggris+ipa)/4

//         if(result >= 90) {
//           grade = "A"
//         }else if(result >= 80) {
//           grade = "B"
//         }else if(result >= 70) {
//           grade = "C"
//         }else if(result >= 60) {
//           grade = "D"
//         }else if(result >= 0) {
//           grade = "E"
//         }else {
//           grade = "None"
//         }
//       }
//     }
//   }
// }


/*=============== Perbaikan 2.0 =============== */

const nilai = [mtk, bahasaIndonesia, bahasaInggris, ipa]

for(let i = 0; i < nilai.length; i++) {
  if (nilai[i] !== null && nilai[i] !== undefined && nilai[i] >= 0 && nilai[i] <= 100) {
    result += nilai[i]
  }

  if (i === (nilai.length - 1)) {
    result = result / 4

    if(result >= 90) {
      grade = "A"
    }else if(result >= 80) {
      grade = "B"
    }else if(result >= 70) {
      grade = "C"
    }else if(result >= 60) {
      grade = "D"
    }else if(result >= 0) {
      grade = "E"
    }else {
      grade = "None"
    } 
  }
}


console.log(`Rata-rata = ${result}`);
console.log(`Grade = ${grade}`);