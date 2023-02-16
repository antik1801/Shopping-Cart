document.getElementById('btn-case-plus').addEventListener('click', function () {
    const currentCaseTotal = update(true, 'case-number-field');
    setTotal(currentCaseTotal, 'case-number-field'); 
    const newTotalPrice = totalCasePrice(currentCaseTotal);
    setTotalPrice('case-total-price',newTotalPrice);
    const PhonePrice = getTextvalue('phone-price');
    setSubTotalPrice(newTotalPrice,PhonePrice);
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const currentCaseTotal = update(false, 'case-number-field');
    setTotal(currentCaseTotal, 'case-number-field');
    const newTotalPrice = totalCasePrice(currentCaseTotal);
    setTotalPrice('case-total-price',newTotalPrice);
    const phonePrice = getTextvalue('phone-price');
    setSubTotalPrice(newTotalPrice,phonePrice);
})