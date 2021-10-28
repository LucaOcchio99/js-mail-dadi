// crea una lista contenente almeno 3 indirizzi email
const indirizzi_email = ['luca@gmail.com', 'marco@gmail.com', 'pia@gmail.com'];

//chiedi all'utente la sua email
const email_inserita = prompt('Inserisci la tua email').trim().toLowerCase();
console.log(`L'email inserita dall' utente è ${email_inserita}`);

// controlla che sia nella lista di chi può accedere 

    // controllo presenza email nell array indirizzi email
    let emailFound = false;

    for(let i = 0; i < indirizzi_email.length; i++){
        //ottenere email corrente mentre iteriamo
        if (indirizzi_email[i] === email_inserita) {
            emailFound = true;
            break;
        }
    }



//Output
if (emailFound) {
    console.log('Acesso eseguito');
} else {
    console.log('Accesso negato');
}