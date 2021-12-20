function addNumber(i){
  var e = document.getElementsByClassName("order-number")[i];
  var p = document.getElementsByClassName("new-price")[i];
  var p1= p.value.substr(1);
  e.value = parseInt(e.value)+1;
  calTotal(p1);

}

function minusNumber(i){
  var e = document.getElementsByClassName("order-number")[i];
  var p = document.getElementsByClassName("new-price")[i];
  var p1= "-"+p.value.substr(1);
  if(parseInt(e.value)>1){
     e.value = parseInt(e.value)-1;
    calTotal(p1);
}
   console.log(p1)
}

function calTotal(p){
  var e = document.getElementById("total-price");
  var e1= e.value.substr(1);
  var e2 = parseFloat(e1)+parseFloat(p);
  e.value = "$" + e2.toFixed(2);
}

const form = document.querySelector('form');
const thankYouMessage = document.querySelector('#submit-message-box');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  thankYouMessage.classList.remove('hide');
  setTimeout(() => form.submit(), 2000);
});

function hideMessage(){
document.getElementById("submit-message-box").classList.add("hide")

}
