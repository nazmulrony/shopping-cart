//function for updating the item elements
const updateItemNumber = function(elementId, isIncrease){
    const inputElement = document.getElementById(elementId);
    const inputValue = Number(inputElement.value);
    let newInputValue = 0;
    if(isIncrease){
        newInputValue = inputValue + 1;
    }else{
        if(inputValue>0){
            newInputValue = inputValue - 1;
        }
    }
    inputElement.value = newInputValue;
    return newInputValue;
}
//updating total phone price function
const updatePhonePrice = function(itemQunatity, itemPrice){
    const phonePrice = itemQunatity * itemPrice;
    document.getElementById('phone-price').innerText = phonePrice;
}
// updating case price function
const updateCasePrice = function(itemQunatity, itemPrice){
    const casePrice = itemQunatity * itemPrice;
    document.getElementById('case-price').innerText = casePrice;
}

//getElementValueById function
const getElementValueById = function(elementId){
    const element = document.getElementById(elementId);
    const elementValue = Number(element.innerText);
    return elementValue;
}
//function for sub-total tax and total section
const calcBill = function(){
    const subTotal = getElementValueById('phone-price') + getElementValueById('case-price');
    const tax = subTotal * .1;
    const total = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax.toFixed(2);
    document.getElementById('total').innerText = total.toFixed(2);
}
//phone button functionality
document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const phoneQunatity = updateItemNumber('phone-quantity', false);
    updatePhonePrice(phoneQunatity, 1219);
    calcBill();
})
document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const phoneQunatity = updateItemNumber('phone-quantity', true);
    updatePhonePrice(phoneQunatity, 1219);
    calcBill();
})

//case button functionality
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const caseQuantity = updateItemNumber('case-quantity', false);
    updateCasePrice(caseQuantity , 59);
    calcBill();
})
document.getElementById('btn-case-plus').addEventListener('click', function(){
    const caseQuantity = updateItemNumber('case-quantity', true);
    updateCasePrice(caseQuantity , 59);
    calcBill();
})