function calculateMaturityAmount(){
//Get the input from the form elements

const principle = parseFloat(document.getElementById('principle').value);
const interestRate= parseFloat(document.getElementById('interestRate').value);
const tenure  = parseFloat(document.getElementById('tenure').value);

//perform calculation
const maturityAmount = (principle * interestRate * tenure )/100;

//Display the Result

document.getElementById('result').innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;



}
//Attach the Event listener to the calculate Button
document.getElementById('calculateBtn').addEventListener('click',calculateMaturityAmount);