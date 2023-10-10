const rl = require("readline-sync");

// juego UNO
var deck = [];
var colors  = ["Yellow", "Blue", "Green", "Red"];
var types = ["Comun", "Especial", "Comodin"];

var card = {
    color: null, // amarillo, azul, verde, rojo
    number: null, // 0-9
    type: null // comun, especiales y comodines
};

for (var cColor = 0; cColor < colors.length; cColor++ ) {
   
    for (var cNumber = 0; cNumber < 10; cNumber++) {
        deck.push({color: [cColor], number: cNumber, types: "Comun"});
    

    }

    for (var cNumber1 = 1; cNumber1 < 10; cNumber1++) {
       
        deck.push({color: [cColor], number: cNumber1, types: "Comun"});
    }
deck.push({color: colors[cColor], number:"+2", type: "Especiales"});
deck.push({color: colors[cColor], number:"+2", type: "Especiales"});
deck.push({color: colors[cColor], number:"B", type: "Especiales"});
deck.push({color: colors[cColor], number:"B", type: "Especiales"});
deck.push({color: colors[cColor], number:"R", type: "Especiales"});
deck.push({color: colors[cColor], number:"R", type: "Especiales"});
deck.push({color: colors[cColor], number:"R", type: "Especiales"});
deck.push({color: colors[cColor], number:"R", type: "Especiales"});
}
deck.push({color: null, number:"+4", type: "Comodines"});
deck.push({color: null, number:"+4", type: "Comodines"});
deck.push({color: null, number:"+4", type: "Comodines"});
deck.push({color: null, number:"+4", type: "Comodines"});
deck.push({color: null, number:"CC", type: "Comodines"});
deck.push({color: null, number:"CC", type: "Comodines"});
deck.push({color: null, number:"CC", type: "Comodines"});
deck.push({color: null, number:"CC", type: "Comodines"});

console.log(deck);

const players = rl.question("Cuantos jugadores seran?", {})

console.log(players)