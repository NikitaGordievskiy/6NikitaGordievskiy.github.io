function priceMaking(){
  let s = document.getElementsByName("tovarType");
  let select = s[0];
  let f1=document.getElementsByName("kol-vo");
  let radioDiv = document.getElementById("headphones");
  radioDiv.style.display = (select.value == "2" ? "block" : "none");
  let checkDiv = document.getElementById("checkbox");
  checkDiv.style.display = (select.value == "3" ? "block" : "none");
  if (select.value == "1"){
    phonev.value=40000;
  }
  else{
    phonev.value=0;
  }
  if (select.value == "2"){
    if(provod.checked){
    provod.value=5000;
    unprovod.value=0;
    }
    else{
      provod.value=0;
      unprovod.value=11000;
    }
  }
  else {
    provod.value=0;
    unprovod.value=0;
  }
  if (select.value == "3"){
    if(comp.checked){
    comp.value=61000;
    }
    else{
      comp.value=60000;
    }
  }
  else {
    comp.value=0;
  }
let res =(Number(phonev.value)+Number(provod.value)+Number(unprovod.value)+ Number(comp.value))*(f1[0].value)+" ₽";
out.innerHTML=res;
}


window.addEventListener('DOMContentLoaded', function (event){
  let radioDiv = document.getElementById("headphones");
  radioDiv.style.display = "none";
  let phoneDiv = document.getElementById("phonev");
  phoneDiv.style.display = "none";
  let checkDiv = document.getElementById("checkbox");
  checkDiv.style.display = "none";
  let s=document.getElementsByName("tovarType");
  let select = s[0];
  select.addEventListener("change", function(event) {
    let target = event.target;
    console.log(target.value);
    priceMaking();
  });
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("button");
    b.addEventListener("click", priceMaking);
});

