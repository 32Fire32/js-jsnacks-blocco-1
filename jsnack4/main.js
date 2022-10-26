// In un array sono contenuti i nomi degli invitati 
// alla festa del grande Gatsby, chiedi all’utente il 
// suo nome e comunicagli se può 
// partecipare o no alla festa.

const guests = ["Paul", "Nick", "John"];

const yourName = prompt("come ti chiami?")

let getin = false;

for (let i = 0; i < guests.length; i++) {
    if ( guests[i] === yourName){
        getin = true;
        break;
    }    
}

if (getin){
    alert("sei dei nostri");
} else{
    alert("vai a casa");
}
