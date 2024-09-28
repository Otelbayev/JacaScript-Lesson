let meva = "olma";

switch (meva) {
  case "olma":
    console.log("Bu olma!");
    break;
  case "banan":
    console.log("Bu banan!");
    break;
  case "uzum":
    console.log("Bu uzum!");
    break;
  default:
    console.log("Bunday meva mavjud emas.");
}


let oy = 3;

switch (oy) {
    case 12:
    case 1:
    case 2:
        console.log("Qish fasli");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Bahor fasli");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Yoz fasli");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Kuz fasli");
        break;
    default:
        console.log("Noto'g'ri oy raqami");
}


let rang = 'qizil';

switch (rang) {
    case 'yashil':
        console.log("Bu yashil rang!");
        break;
    case "ko'k":
        console.log("Bu ko'k rang!");
        break;
    default:
        console.log("Bunday rang topilmadi!");
}


let ism = null;
let natija = ism ?? "Anonim";

console.log(natija); // "Anonim"

let yosh;

// let natija = yosh ?? 18;

console.log(natija); // 18


let ball = 0;
// let natija = ball ?? 100;

console.log(natija); // 0

