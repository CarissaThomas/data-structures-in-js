var test = "XII";


function romanizer(numerals) {
    var firstNumber = 0;
    var secondNumber = 0;
    var total = 0;

    if (numerals.length > 1) {
        for (let i = 0; i < numerals.length; i++) {
            firstNumber = translator(numerals.charAt(i));
            secondNumber = translator(numerals.charAt(i + 1));
    
            if (firstNumber < secondNumber || secondNumber == undefined) {
                total = total + firstNumber;
            } else {
                total = total - firstNumber;
            } 
        }
    } else {
        total = total + translator(numerals);
    }

    console.log(total);
    return total; 
}

function translator(dataN) {
    switch(dataN) {
        case "I":
          return 1;
        case "V":
          return 5;
        case "X":
            return 10;
        case "L":
          return 50;
        case "C":
          return 100;
        case "D":
          return 500;
        case "M":
          return 1000;
        default:
        break
      }
}

romanizer(test);