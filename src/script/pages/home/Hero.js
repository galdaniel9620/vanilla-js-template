import europebg from "../../../assets/img/europebg.png"
import Button from "../../ui/Button";
import Tooltip from "../../ui/tooltip";

window.submitForm = function() {
    const inputTrack = parseFloat(document.querySelector('#input-trak').value)
    const inputDays = parseInt(document.querySelector('#input-days').value) || 1
    const showPrice = document.querySelector('#showPrice')
    let kmPrice, totalPrice
    const guarantee = 500
    const tva = 0.19
    
    if (inputTrack <= 300) {
        kmPrice = 0
    } else if (inputTrack <= 500) {
        kmPrice = 0.35
    } else if (inputTrack <= 1000) {
        kmPrice = 0.35
    } else if (inputTrack <= 2000) {
        kmPrice = 0.25
    } else if (inputTrack <= 4000) {
        kmPrice = 0.2
    } else if (inputTrack > 4000) {
        kmPrice = 0.18
    } else {
        kmPrice = 0
    }

    let daysPrice = inputTrack > 300 ? 50 : 150

    let totalPriceInputs = (inputTrack * kmPrice) + (inputDays * daysPrice)
    let totalPriceInputsTva = totalPriceInputs * tva
    totalPrice = (totalPriceInputs + totalPriceInputsTva + guarantee).toFixed(2)

    if (inputTrack) 
        showPrice.innerHTML =
            `<h3>Total <span class="tva-span">incl. TVA</span> </h3>
            <span>Total kilometri: ${inputTrack}</span>
            <span>Număr zile: ${inputDays}</span>
            <span>Garanție: ${guarantee} Euro${Tooltip("Garanția se returnează la predarea semiremorcii intacte și respectarea termenilor. Pentru depășiri sau daune, se ajustează suma returnată sau se facturează suplimentar.")}</span>
            <span class="total-price">Plătești: ${totalPrice} Euro</span>
            `

}

{/* <p>Pentru închiriere trebuie să anunțați ce traseu aveți în plan să parcurgeți, se face un calcul după hartă pentru a stabili lungimea traseului, anunțați perioada de timp care considerați că vă avantajează.</p>
<p>Se facturează costul în lei (curs BNR +1%), plus 500 euro garanție. Garanția se returnează la predarea semiremorcii intacte și respectarea termenilor. Pentru depășiri sau daune, se ajustează suma returnată sau se facturează suplimentar.</p> */}

function Hero () {
    const hero = {
        h1: "Trailere de închiriat: soluția optimă pentru afacerea ta",
        h3: "Simulează preț"
    }

    return `
    <section class="hero-section" id="hero">
        <div class="hero-section_header split-container">
            <div class="split-container_left">
                <h1>${hero.h1}</h1>
                ${Button('Contact')}
            </div>
            <div class="split-container_right">
                <img src="${europebg}" fetchpriority="height">
            </div>
        </div>
        <div class="hero-section_footer">
            <div class="card" name="simulare">
                <div class="card_left">
                    <h3>${hero.h3}</h2>
                    <p>Închirierea se taxează la km(conform gps din dotarea semiremorcilor) și la zi(fiecare început de 24h).</br> Se poate inchiria doar de catre persoane juridice. Se facturează costul în lei (curs BNR +1%).</p>
                 
                    <div class="card_inputs">
                        <label>
                            *Număr km
                            <input id="input-trak" type="number"\>
                        </label>

                        <label>
                            *Număr zile
                            <input id="input-days" type="number"\>
                        </label>

                        ${Button('Simulează preț', 'submitForm()', null)}
                    </div>
                </div>
                <div class="card_right">
                    <div id="showPrice"></div>
                </div>
            </div>
        </div>
    </section>
    `
}

export default Hero


