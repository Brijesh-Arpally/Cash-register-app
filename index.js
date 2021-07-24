const billAmount = document.getElementById("billAmount");

const cashGivenInput = document.querySelector(".cashGivenInput");
const cashGiven = document.getElementById("cashGiven");
const submitButton = document.getElementById("submitButton");

const errorMessage = document.querySelector(".errorMessage");

const changeReturn = document.querySelector(".changeReturn");

const output = document.getElementById("output");
const numberOfNotes = document.querySelectorAll(".numberOfNotes");

const noteArray = [2000, 500, 100, 20, 10, 5, 1];


submitButton.addEventListener(`click`,()=>{

hideError();

let billAmountValue=Number(billAmount.value);
let cashGivenValue=Number(cashGiven.value);

if(billAmountValue>0 && cashGivenValue>0){


 
 if(!Number.isInteger(cashGivenValue)){
  showError("Enter Valid Amount in Cash Given Field");
  return;
 }
 if(billAmountValue > cashGivenValue){
  showError(`Cash Given value is less than bill, Please Enter right Amount`);
  return;
 }

 calculateNotes(billAmountValue,cashGivenValue);
 }else{
  showError("Enter Valid Bill Amount");
 }

});

function calculateNotes(bill,cash){
let returnAmount=cash-bill;

if(returnAmount<1){
 showError("No Amount to Return");
 return;
}
changeReturn.style.display="block";


for(let i=0;i<noteArray.length;i++){
 returnAmount=compare(returnAmount,noteArray[i],i);
}

}

function compare(remainder,noteAmount,index){

 if(remainder >= noteAmount){
   let notes=Math.floor(remainder/noteAmount);
   remainder=remainder-notes*noteAmount;
   numberOfNotes[index].innerText=`${notes}`;
 }
 return remainder
}



function showError(text) {
  errorMessage.style.display = "block";
  errorMessage.innerText = text;
  changeReturn.style.display = "none";
}


function hideError() {
  errorMessage.style.display = "none";
}