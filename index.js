const name = ["Lisa", "kaitlin", "Jan"];
const event = "surprise";

function writeCards(name, event) {
    let newArray = [];
    for(let i = 0; i < name.length; i++) {
    newArray.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
     }
    return newArray;
}

function countDown(integer) {
    let i = 10;
    while (i >= 0) {
        console.log(i--);
    }
}

