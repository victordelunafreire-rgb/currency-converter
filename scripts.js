const convertButton = document.querySelector(".convert-button")
const convertedIncome = document.querySelector(".currency-value-to-convert")
const convertedOutcome = document.querySelector(".currency-value")
const selectedIncome = document.querySelector(".currency-select-from")
const selectedOutcome = document.querySelector(".currency-select-to")

// Nosso "dicionário" de taxas simulando a API
const exchangeRates = {
    dolar: 1.00,
    real: 5.20,
    euro: 0.84,
    libra: 0.74,
    bitcoin: 0.000014
}

// "dicionário das siglas"
const currencyCodes = {
    dolar: "USD",
    real: "BRL",
    euro: "EUR",
    libra: "GBP",
    bitcoin: "BTC"
}

// "dicionário dos idiomas"
const currencyLocations = {
    dolar: "en-US",
    real: "pt-BR",
    euro: "de-DE",
    libra: "en-GB",
    bitcoin: "en-US"
}

// "dicionário das bandeiras e símbolos"
const nationFlags = {
    dolar: "./assets/dolar.png",
    real: "./assets/real.png",
    euro: "./assets/euro.png",
    libra: "./assets/libra.png",
    bitcoin: "./assets/bitcoin.png"
}

function convertValues() {
    // 1. Capturamos o que está na tela (os valores)
    const userInput = document.querySelector(".input-currency").value
    const currencyFrom = document.querySelector(".currency-select-from").value
    const currencyTo = document.querySelector(".currency-select-to").value

    // Coração matemático da função
    const currencyValueConverted = (userInput / exchangeRates[currencyFrom]) * exchangeRates[currencyTo]


    convertedIncome.innerHTML = new Intl.NumberFormat(currencyLocations[currencyFrom], {
        style: "currency",
        currency: currencyCodes[currencyFrom]
    }).format(userInput)

    convertedOutcome.innerHTML = new Intl.NumberFormat(currencyLocations[currencyTo], {
        style: "currency",
        currency: currencyCodes[currencyTo]
    }).format(currencyValueConverted)

}

function bannerHigh() {

    const currencyFrom = document.querySelector(".currency-select-from").value
    const currencyTo = document.querySelector(".currency-select-to").value
   
    // Captura as IMAGENS pelos IDs que estão no seu HTML)
    const flagImageFrom = document.getElementById("selected-currency-box")
    const flagImageTo = document.getElementById("selected-currency-box-2")

    // Troca o .src da imagem buscando o caminho no seu dicionário nationFlags
    flagImageFrom.src = nationFlags[currencyFrom]
    flagImageTo.src = nationFlags[currencyTo]

    // Torca o texto com o nome da moeda
    const currencyNameFrom = document.getElementById("currency-name-from")
    const currencyNameTo = document.getElementById("currency-name")

    // Aqui usamos uma lógica simples: o nome exibido será a própria chave do dicionário (dolar, real, etc)
    // Mas com a primeira letra maiúscula para ficar bonito
    currencyNameFrom.innerText = currencyFrom.charAt(0).toUpperCase() + currencyFrom.slice(1)
    currencyNameTo.innerText = currencyTo.charAt(0).toUpperCase() + currencyTo.slice(1)

    convertValues()

}


convertButton.addEventListener("click", convertValues)
selectedIncome.addEventListener("change", bannerHigh) //função que troca as bandeiras
selectedOutcome.addEventListener("change", bannerHigh)