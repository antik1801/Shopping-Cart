function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);    
    let newCaseNumber;
    if(isIncrease){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }
    if(newCaseNumber <0){
        alert("Quantity cann't be 0");
        newCaseNumber = newCaseNumber + 1;
    }
    else{
        caseNumberField.value = newCaseNumber;    
    }
    return newCaseNumber;
}
function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotal = document.getElementById('case-total-price');
    caseTotal.innerText = caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click',function(){
  const newCaseNumber = updateCaseNumber(true);
  updateCaseTotalPrice(newCaseNumber);
  calculateSubTotal();

})
document.getElementById('btn-case-minus').addEventListener('click',function(){
  const newCaseNumber = updateCaseNumber(false);
  updateCaseTotalPrice(newCaseNumber);
  calculateSubTotal();

})


