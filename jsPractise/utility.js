function setTotalPrice(elementId,totalPrice){
    const phonePrice = document.getElementById(elementId);
    phonePrice.innerText = totalPrice;
}
function totalPhonePrice(currentPhoneTotal){
    const totalPrice = currentPhoneTotal*1219;
    return totalPrice;
}

function totalCasePrice(currentCaseTotal){
    const totalPrice = currentCaseTotal * 59;
    return totalPrice;
}
function phonePrice(){
    const phonePrice = document.getElementById('phone-price');
    const phonePriceString = phonePrice.innerText;
    const phonePriceTotal = parseInt(phonePriceString);
    return phonePriceTotal;
}
function setSubTotalPrice(phonePrice,casePrice){
    const totalPrice = document.getElementById('subtotal-total');
    const Total = phonePrice + casePrice ;
    totalPrice.innerText = Total;
    const taxAmount = document.getElementById('tax-amount');
    const totalTaxString = (Total*0.1).toFixed(2);
    const totalTax = parseFloat(totalTaxString);
    taxAmount.innerText = totalTax;
    const finalTotal = document.getElementById('final-total');
    const finalTotalValueString = (Total + totalTax).toFixed(2);
    const finalTotalValue = parseFloat(finalTotalValueString);
    finalTotal.innerText = finalTotalValue;

}
function getTextvalue(elemtId){
    const element = document.getElementById(elemtId);
    const elementString = element.innerText;
    const elementValue = parseInt(elementString);
    return elementValue
}

function update(isIncrase,elementId){
    const caseNumber = document.getElementById(elementId);
    const caseNumberString = caseNumber.value;
    const previousCaseTotal = parseInt(caseNumberString);
    let currentCaseTotal;
    if(isIncrase){
        currentCaseTotal = previousCaseTotal + 1;
    }
    else{
        currentCaseTotal = previousCaseTotal - 1;
    }
    if(currentCaseTotal < 0){
        alert("Please select the quantity");
       return currentCaseTotal + 1;
    }
    else{
        return currentCaseTotal;
    }
}
function setTotal(currentCaseTotal,elementId){
    const caseNumber = document.getElementById(elementId);
    caseNumber.value = currentCaseTotal;
}