const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {
    const inputCurencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") //Outras moedas

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.99
    const bitcoinToday = 367088.82


    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurencyValue / bitcoinToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurencyValue)

}

function changeCurrency() {
    const currencyImage = document.getElementById("selected-currency")
    const currencyName = document.getElementById("currency-name")

    if (currencySelect.value == "dolar") {
        currencyImage.src = "/assets/dolar.png"
        currencyName.innerHTML = "Dólar"
    }

    if (currencySelect.value == "euro") {
        currencyImage.src = "/assets/euro.png"
        currencyName.innerHTML = "Euro"
    }

    if (currencySelect.value == "libra") {
        currencyImage.src = "/assets/libra.png"
        currencyName.innerHTML = "Libra"
    }

    if (currencySelect.value == "bitcoin") {
        currencyImage.src = "/assets/bitcoin.png"
        currencyName.innerHTML = "Bitcoin"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)