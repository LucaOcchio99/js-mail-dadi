//Genero un numero random per il giocatore
const numero_giocatore = Math.round(Math.random()*5)+1;
console.log(`Il numero generato dal giocatore è ${numero_giocatore}`);

const numero_computer = Math.round(Math.random()*5)+1;
console.log(`Il numero generato dal computer è ${numero_computer}`);

if (numero_giocatore > numero_computer) {
    console.log('Ha vinto il giocatore');
} else if (numero_giocatore < numero_computer) {
    console.log('Ha vinto il computer'); 
} else {
    console.log('È finitia in parità')
}