const exchange = 23208
let currency = prompt("Change to VND or USD?")


function vndToUsd(amountVnd) {
  amount = (amountVnd / exchange)
  return amount.toFixed(2)
}

function usdToVnd(amountUsd) {
  amount = (amountUsd * exchange)
  return amount.toFixed(2)
}

function formatCurrency(type, value) {
  const formatter = new Intl.NumberFormat(type, {
    currency: type,
    style: "currency"
  });
  return formatter.format(value);
}

if (currency.toLowerCase() === "vnd") {
  let amountUsd = prompt("How much USD do you have?")

  if (isNaN(amountUsd) === false){
     amountUsd = (usdToVnd(amountUsd)) 
     console.log(formatCurrency('vnd', amountUsd))
  }
  else {
    console.log ("Please enter a number")
  }
}
else if(currency.toLowerCase() === 'usd') {
  let amountVnd = prompt("How much VND do you have?")
 if (isNaN (amountVnd)=== false){
    amountVnd = (vndToUsd(amountVnd))
    console.log(formatCurrency('usd',amountVnd))
 }
 else {
    console.log ("Please enter a number")
  }
}
else {
  console.log ('Please choose VND or USD')
}