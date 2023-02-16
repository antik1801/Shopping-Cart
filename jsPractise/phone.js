

document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const currentPhoneTotal = update(true,'phone-number-field');
    setTotal(currentPhoneTotal,'phone-number-field');
    const totalPrice = totalPhonePrice(currentPhoneTotal);
    setTotalPrice('phone-price',totalPrice)
    const casePrice = getTextvalue('case-total-price');
    setSubTotalPrice(totalPrice,casePrice);
})
document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const currentPhoneTotal = update(false,'phone-number-field');
    setTotal(currentPhoneTotal,'phone-number-field');
    const totalPrice = totalPhonePrice(currentPhoneTotal);
    setTotalPrice('phone-price',totalPrice);
    const casePrice = getTextvalue('case-total-price');
    setSubTotalPrice(totalPrice,casePrice);

})