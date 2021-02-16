// function plusMinus(isIncrease){
//     const firstClassInput = document.getElementById("firstClassInput");
//     const firstClassInputValue = parseInt(firstClassInput.value);
//     let firstClassInputNewValue = 0;
//     if (isIncrease == 'true') {
//         firstClassInputNewValue = firstClassInputValue + 1;

//     }
//     if (isIncrease == 'false' && firstClassInputValue>0) {
//         firstClassInputNewValue = firstClassInputValue - 1;

//     }
//     firstClassInput.value = firstClassInputNewValue;
// }
function plusMinus(isIncrease, product) {
    const inputField = document.getElementById(product + "ClassInput");
    const inputFieldValue = parseInt(inputField.value);
    let inputFieldNewValue = 0;
    if (isIncrease == 'true') {
        inputFieldNewValue = inputFieldValue + 1;

    }
    if (isIncrease == 'false' && inputFieldValue > 0) {
        inputFieldNewValue = inputFieldValue - 1;

    }
    inputField.value = inputFieldNewValue;

    // document.getElementById("subTotal").innerText='$ '+totalNewPrice;
    calculateTotal();
}
function calculateTotal() {

    const firstInput = getInput('first');
    const economyInput = getInput('economy');
    const total = firstInput * 150 + economyInput * 100;
    document.getElementById('subTotal').innerText = '$' + total;

    const tax=Math.round(total*0.1);
    document.getElementById('tax').innerText='$'+tax;

    const inTotal=total+tax;
    document.getElementById('inTotal').innerText='$'+inTotal;

}




