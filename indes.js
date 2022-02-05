// login event handler
document.getElementById("loginBtn").addEventListener("click", function () {
    const loginArea = document.getElementById("loginArea");
    loginArea.style.display = "none";

    const transactionArea = document.getElementById("transactionArea");
    transactionArea.style.display = "block";
})

// submit event handler

document.getElementById("depositBtn").addEventListener("click", function () {
    const inputDepositNumber = getInputNumber("inputDeposit");

    updateDepositTk("depositAmount", inputDepositNumber)
    updateDepositTk("balance", inputDepositNumber)
    document.getElementById("inputDeposit").value = '';

})

function updateDepositTk(id, inputDepositNumber) {
    const depositAmount = document.getElementById(id).innerText;
    const depositAmountNumber = parseFloat(depositAmount);
    const totalDeposit = inputDepositNumber + depositAmountNumber;
    document.getElementById(id).innerText = totalDeposit;
}


document.getElementById("withdrawBtn").addEventListener("click", function () {
    const inputWithdrawNumber = getInputNumber("inputWithdraw")

    updateWithdrawTk("withdrawAmount", inputWithdrawNumber)
    updateWithdrawTk("balance", -1 * inputWithdrawNumber);
    document.getElementById("inputWithdraw").value = "";

})

function updateWithdrawTk(id, inputWithdrawNumber) {
    const withdrawAmount = document.getElementById(id).innerText;
    const withdrawAmountNumber = parseFloat(withdrawAmount);
    const totalWithdraw = inputWithdrawNumber + withdrawAmountNumber;
    document.getElementById(id).innerText = totalWithdraw;
}

function getInputNumber(id) {
    const inputAmount = document.getElementById(id).value;
    const inputAmountNumber = parseFloat(inputAmount);
    return inputAmountNumber;
}