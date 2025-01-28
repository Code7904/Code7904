const BASE_URL = "https://api.fxratesapi.com/convert"

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector(".form .exchange button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
    for (currCode in allCountry) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "INR") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "USD") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input")
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        // amount.value = "1"
    }
    const URL = `${BASE_URL}?from=${fromCurr.value}&to=${toCurr.value}`;
    let response = await fetch(URL);
    let data = await response.json()
    let rate = data.result

    // console.log(rate)
    let finalAmount = amtVal * rate;


    // console.log(finalAmount)
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = allCountry[currCode]
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});

window.addEventListener("load", () => {
    updateExchangeRate()
})







