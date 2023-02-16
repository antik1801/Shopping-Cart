function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-price');
    phoneTotalElement.innerText = phoneTotalPrice;
}

function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}
function setTextElementVlueById(elementId,value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}
function calculateSubTotal(){

    //calculate total
    const currentPhoneTotal = getTextElementValueById('phone-price');
    const currentCaseTotal = getTextElementValueById('case-total-price');

    //calcuate subtotal
    const currentSubTotalString = (currentPhoneTotal + currentCaseTotal);
    const currentSubTotal =(currentSubTotalString);
    setTextElementVlueById('subtotal-total', currentSubTotal);

    // calculate taxAmount
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2) ;
    const textAmount = parseFloat(taxAmountString);
    setTextElementVlueById('tax-amount', textAmount)

    const finalAmountString = (currentSubTotal + textAmount);
    const finalAmount = (finalAmountString);

    setTextElementVlueById('final-total', finalAmount);

    
 }