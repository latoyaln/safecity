/* eslint-disable radix */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
const mis = parseInt(process.argv[2]);
const pin = parseInt(process.argv[3]);
const functie = (process.argv[4]);
const dag = parseInt(process.argv[5]);
const tijd = parseInt(process.argv[6]) || 0;

if (mis < 5) {
    if ((functie === 'bestuur') || ((functie === 'administratief medewerker') && 
    (dag < 4) && (tijd < 17 && tijd >= 9))) {
        if (pin === 123752 && functie === 'bestuur') {
            console.log(`#fouten: ${mis}, pin: ${pin}, functie: ${functie}, dag: ${dag}, tijd: ${tijd}
Kluis opent`);
        } else if (pin === 123752 && functie === 'administratief medewerker') {
            console.log(`#fouten: ${mis}, pin: ${pin}, functie: ${functie}, dag: ${dag}, tijd: ${tijd}
Kluis opent
Sms naar bestuur`);
        } else {
            console.log(`#fouten: ${mis}, pin: ${pin}, functie: ${functie}, dag: ${dag}, tijd: ${tijd}
Verkeerde pincode`);
        }
    }
}

else if (tijd < 17 && tijd >= 9) {
    console.log(`#fouten: ${mis}, pin: ${pin}, functie: ${functie}, dag: ${dag}, tijd: ${tijd}
Alarm gaat af`);
} else if (tijd > 17 && tijd < 9) {
    console.log(`#fouten: ${mis}, pin: ${pin}, functie: ${functie}, dag: ${dag}, tijd: ${tijd}
Stil alarm gaat af`);
}
else {
    console.log(`#fouten: ${mis}, pin: ${pin}, functie: ${functie}, dag: ${dag}, tijd: ${tijd}
Kluis is geblokkeerd`);
}