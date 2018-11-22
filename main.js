// CENSURATORE
//  - Il software riceve in input un lungo testo e una serie di parole
// da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un "badword index" calcolato come il numero di
// parole censurate su il numero di parole totali

var tarantinoCit = "Ezechiele, 25:17. Il cammino dell'uomo timorato è minacciato da ogni parte dalle iniquità degli esseri egoisti e dalla tirannia degli uomini malvagi. Benedetto sia colui che nel nome della carità e della buona volontà, conduce i deboli attraverso la valle delle tenebre, perché egli è in verità il pastore di suo fratello e il ricercatore dei figli smarriti. E la mia giustizia calerà sopra di loro con grandissima vendetta e furiosissimo sdegno su coloro che si proveranno ad ammorbare, e infine a distruggere i miei fratelli. E tu saprai che il mio nome è quello del Signore, quando farò calare la mia vendetta sopra di te!";
console.log(tarantinoCit);

var badwords = ['Signore', 'uomini', 'uomo', 'fratelli', 'nome', 'vendetta', 'distruggere','tenebre'];

for (var i = 0; i < badwords.length; i++) {
tarantinoCit = tarantinoCit.replace(badwords[i], "xxx");
}
console.log(tarantinoCit);

// var tarantinoCit = tarantinoCit.split(" ");
// console.log(tarantinoCit);
//
// for (var i = 0; i < tarantinoCit.length; i++) {
//   console.log(tarantinoCit[i]);
// }
