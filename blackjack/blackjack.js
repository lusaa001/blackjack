
/*mulige verdier for kort*/
var kort = [1,2,3,4,5,6,7,8,9,10,10,10,10]

/*arrays for å plasere kortene spiller og dealer får*/
var spiller_kort = []
var dealer_kort = []



/*funksjon som trekker kort og pusher det inn i spiller og dealer sin hånd */

function trekk_kort () {

    /*bruker random for å ta et tilfeldig kort og pusher det inn i spiller sin hånd*/
    let spiller_tilfeldig_kort = Math.floor(Math.random() * kort.length)
    spiller_kort.push(kort[spiller_tilfeldig_kort])

    /*bruker random for å ta et tilfeldig kort og pusher det inn i dealer sin hånd*/
    let dealer_tilfeldig_kort = Math.floor(Math.random() *kort.length)
    dealer_kort.push(kort[dealer_tilfeldig_kort])


    /* summerer kortene til en verdien, altså summen av kortene */
    let sum_spiller = spiller_kort.reduce((partialSum, a) => partialSum + a, 0);
    let sum_dealer = dealer_kort.reduce((partialSum, a) => partialSum + a, 0);
  
    

    /*consol logger kortene og summen til dealer og spiller */
    console.log()
    console.log("Dine kort:   " + spiller_kort)
    console.log()
    console.log("Dealer kort: " + dealer_kort)
    console.log()
    console.log("Hit eller Stå?")

    console.log("sum spiller: "+ sum_spiller)
    console.log("sum dealer: "+ sum_dealer)

    /*sender summene til html dokumentet */
    document.getElementById("spiller").innerHTML = sum_spiller
    document.getElementById("dealer").innerHTML = sum_dealer



}




/*funskjon for hit, gir altså spiller valget å legge til et kort i hånden sin */
function Hit () {

    /* finner kortet som blir lagt til når man hitter */
    let nytt_kort = Math.floor(Math.random() *kort.length)
    spiller_kort.push(kort[nytt_kort])

    /*oppdaterer summen til spiller */
    let sum_spiller = spiller_kort.reduce((partialSum, a) => partialSum + a, 0);
    
    


    /*skjekker om sum er større enn 21 og oppdaterer spiller sum */
    if (sum_spiller > 21) {
        document.getElementById("spiller").innerHTML = sum_spiller
        
    console.log("Dine kort: " + spiller_kort)
    console.log("sum: "+ sum_spiller)
    console.log("du tapte")

    document.getElementById("resultat_tekst").innerHTML = "Dealer vant"

    }
    
    /*sjekker om sum for spiller er mindre enn 21 og oppdaterer sum. Hvis får man valget om å stå eller hitte */
    if (sum_spiller < 21) {
        document.getElementById("spiller").innerHTML = sum_spiller
   

    console.log("Dine kort: " + spiller_kort)
    console.log("sum: "+ sum_spiller)
    console.log("Hit eller Stå?")
    }

    if (sum_spiller === 21) {
        console.log("du vant")
        document.getElementById("spiller").innerHTML = sum_spiller
        document.getElementById("resultat_tekst").innerHTML = "Du vant"
    }

    
}


/*funskjon for hvis spiller velger å stå */
function Stå () {


let sum_spiller = spiller_kort.reduce((partialSum, a) => partialSum + a, 0);
let sum_dealer = dealer_kort.reduce((partialSum, a) => partialSum + a, 0);

/*hvis summen til dealer er mindre enn 17 må han trekke et kort til,
 denne koden sjekker og utfører prosessen. Dette gjentar seg 5 ganger helt til linje 164 i koden*/
    if (sum_dealer < 17 ) {
        let dealer_trekk = Math.floor(Math.random() *kort.length)
        dealer_kort.push(kort[dealer_trekk])    
        
        let sum_dealer = dealer_kort.reduce((partialSum, a) => partialSum + a, 0);
        console.log(dealer_kort)
        console.log("sum: "+ sum_dealer)

    
    /*oppdaterer de nye kortene til html siden */
    document.getElementById("dealer").innerHTML = sum_dealer

        if ( sum_dealer < 17 ) {                                         //manuell loop hvis dataen trekke rmange lave kort.
            let dealer_trekk = Math.floor(Math.random() *kort.length)
            dealer_kort.push(kort[dealer_trekk])    
            
            let sum_dealer = dealer_kort.reduce((partialSum, a) => partialSum + a, 0);
            console.log(dealer_kort)
            console.log("sum: "+ sum_dealer)

            document.getElementById("dealer").innerHTML = sum_dealer

            if ( sum_dealer < 17 ) {
                let dealer_trekk = Math.floor(Math.random() *kort.length)
                dealer_kort.push(kort[dealer_trekk])    
                
                let sum_dealer = dealer_kort.reduce((partialSum, a) => partialSum + a, 0);
                console.log(dealer_kort)
                console.log("sum: "+ sum_dealer)

                document.getElementById("dealer").innerHTML = sum_dealer

                if ( sum_dealer < 17 ) {
                    let dealer_trekk = Math.floor(Math.random() *kort.length)
                    dealer_kort.push(kort[dealer_trekk])    
                    
                    let sum_dealer = dealer_kort.reduce((partialSum, a) => partialSum + a, 0);
                    console.log(dealer_kort)
                    console.log("sum: "+ sum_dealer)
    
                    document.getElementById("dealer").innerHTML = sum_dealer

                    if ( sumdealer < 17 ) {
                        let dealer_trekk = Math.floor(Math.random() *kort.length)                    
                        dealer_kort.push(kort[dealer_trekk])    
                        
                        let sum_dealer = dealer_kort.reduce((partialSum, a) => partialSum + a, 0);
                        console.log(dealer_kort)
                        console.log("sum: "+ sum_dealer)
        
                        document.getElementById("dealer").innerHTML = sum_dealer
                    }
                }
            }
        }

    }


    console.log(skjekk_vinner())                             
}

/*skjekker hvem som vant av dealer og spiller */
function skjekk_vinner () {
    /* definerer summene til spiller og dealer innenfor funksjonen*/
    let sum_spiller = spiller_kort.reduce((partialSum, a) => partialSum + a, 0);
    let sum_dealer = dealer_kort.reduce((partialSum, a) => partialSum + a, 0);

    /* sjekker hvis summen til dealer og spiller er større enn 21, dealer vinner*/
    if (sum_spiller < sum_dealer && sum_dealer < 22) {
        console.log("dealer vant")
        document.getElementById("resultat_tekst").innerHTML = "Dealer vant"
    } 
    /*sjekker hvis sum dealer er større enn 21, spiller vinner */
    if (sum_dealer > 21) {
        console.log("du vant")
        document.getElementById("resultat_tekst").innerHTML = "Du vant"
    }

    /* skjekker hvis spiller får 21, og vinner*/
    if (sum_spiller === 21){
        console.log("du vant")
        document.getElementById("resultat_tekst").innerHTML = "Du vant"
    }
    /*sjekker hvis spiller har høyere sum enn dealer */
    if (sum_spiller > sum_dealer) {
        console.log("du vant")
        document.getElementById("resultat_tekst").innerHTML = "Du vant"
    }
    
    /*skjekker hvis summen er lik og det blir uavgjort */
    if (sum_dealer === sum_spiller) {
        console.log("draw")
        document.getElementById("resultat_tekst").innerHTML = "Draw"
    }
}