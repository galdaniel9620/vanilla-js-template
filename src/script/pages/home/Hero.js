import Button from "../../ui/Button"

window.submitForm = function() {
    const inputTrack = parseFloat(document.querySelector('#input-trak').value)
    const inputDays = parseInt(document.querySelector('#input-days').value) || 1
    const showPrice = document.querySelector('#showPrice')
    let kmPrice, totalPrice
    const guarantee = 500
    const tva = 1.19
    
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

    
    totalPrice = ((inputTrack * kmPrice) + (inputDays * daysPrice) + guarantee + tva).toFixed(2) + " EUR"

    if (inputTrack) 
        showPrice.innerHTML =`<h3>Total: </h3>
            <span>${totalPrice}</span>`

}

function Hero () {
    const hero = {
        h1: "Find your best car for your awesome trip with us",
        h3: "Simulează preț"
    }

    return `
    <section class="hero-section" id="hero">
        <div class="hero-section_header split-container">
            <div class="split-container_left">
                <h1>${hero.h1}</h1>
                ${Button('Contact')}
            </div>
            <div class="split-container_right"></div>
        </div>
        <div class="hero-section_footer">
            <div class="card" name="simulare">
                <h3>${hero.h3}</h2>
                <p>Is simply dummy text of the printing and typesetting industry.</p>
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
                <div>

                <div id="showPrice"></div>
            </div>
        </div>
    </section>
    `
}

export default Hero


