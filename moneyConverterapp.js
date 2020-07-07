// input = amountInput
// button convert()
// h2 resultConverter


let inputTag = document.getElementById("amountInput")
let fromCurrency = document.getElementById("from")


// functions to convert
function convertUsdToVnd() {
  let amount = inputTag.value
  let result = amount * 23000
  return result
}

function convertVndToUsd() {
  let amount = inputTag.value
  let result = amount / 23000
  return result
}

function convertUsdToEur() {
  let amount = inputTag.value
  let result = amount / 1.12
  return result
}

function convertEurToUsd() {
  let amount = inputTag.value
  let result = amount * 1.12
  return result
}

function convertVndToEur() {
  let amount = inputTag.value
  let result = amount / 26.17
  return result
}

function convertEurToVnd() {
  let amount = inputTag.value
  let result = amount * 26170
  return result
}

function convertEurToKrw() {
  let amount = inputTag.value
  let result = amount * 1349.92
  return result
}

function convertUsdToKrw(){
  let amount = inputTag.value
  let result = amount * 1196.01
  return result
}


function convertVndToKrw(){
  let amount = inputTag.value
  let result = amount * 0.0515
  return result
}


// convert function 
function convert() {
  let toCurrency = document.querySelector('input[name="toCurrency"]:checked').value
  if (fromCurrency.value === "usd" && toCurrency === "toVnd") {
    resultUsdToVnd = convertUsdToVnd()
    document.getElementById("resultConvert").innerHTML = `${resultUsdToVnd}`
  } else if (fromCurrency.value === "vnd" && toCurrency === "toUsd") {
    resultVndToUsd = convertVndToUsd()
    document.getElementById("resultConvert").innerHTML = `${resultVndToUsd}`
  } else if (fromCurrency.value === "usd" && toCurrency === "toEur") {
    resultUsdToEur = convertUsdToEur()
    document.getElementById("resultConvert").innerHTML = `${resultUsdToEur}`
  } else if (fromCurrency.value === "eur" && toCurrency === "toUsd") {
    resultEurToUsd = convertEurToUsd()
    document.getElementById("resultConvert").innerHTML = `${resultEurToUsd}`
  } else if (fromCurrency.value === "vnd" && toCurrency === "toEur") {
    resultVndToEur = convertVndToEur()
    document.getElementById("resultConvert").innerHTML = `${resultVndToEur}`
  } else if (fromCurrency.value === "eur" && toCurrency === "toVnd") {
    resultEurToVnd = convertEurToVnd()
    document.getElementById("resultConvert").innerHTML = `${resultEurToVnd}`
  } else if (fromCurrency.value === "eur" && toCurrency === "toKrw") {
    resultEurToKrw = convertEurToKrw()
    document.getElementById("resultConvert").innerHTML = `${resultEurToKrw}`
  } else if (fromCurrency.value === "usd" && toCurrency === "toKrw") {
    resultUsdToKrw = convertUsdToKrw()
    document.getElementById("resultConvert").innerHTML = `${resultUsdToKrw}`
  } else if (fromCurrency.value === "vnd" && toCurrency === "toKrw") {
    resultVndtoKrw = convertVndToKrw()
    document.getElementById("resultConvert").innerHTML = `${resultVndtoKrw}`
  }
  
  else {
    (console.log("keep trying"))
  }
}



































// const exchange = 23208
// let currency = prompt("Change to VND or USD?")
// // let amount = prompt("How much?")

// function vndToUsd(amountVnd) {
//   amount = (amountVnd / exchange)
//   return amount.toFixed(2)
// }

// function usdToVnd(amountUsd) {
//   amount = (amountUsd * exchange)
//   return amount.toFixed(2)
// }


// if (currency.toLowerCase() === "vnd") {
//   let amountUsd = prompt("How much USD do you have?")

//   if (isNaN(amountUsd) === false){
//      amountUsd = (usdToVnd(amountUsd)) 
//      console.log(formatCurrency('vnd', amountUsd))
//   }
//   else {
//     console.log ("Please enter a number")
//   }
// }
// else if(currency.toLowerCase() === 'usd') {
//   let amountVnd = prompt("How much VND do you have?")
//  if (isNaN (amountVnd)=== false){
//     amountVnd = (vndToUsd(amountVnd))
//     console.log(formatCurrency('usd',amountVnd))
//  }
//  else {
//     console.log ("Please enter a number")
//   }
// }
// else {
//   console.log ('Please choose VND or USD')
// }


