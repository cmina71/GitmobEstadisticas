document.querySelector(".addParam").addEventListener("click",addParam);
document.querySelector(".showResults").addEventListener("click",showResults);

var paramentros = [];
var valores = [];

function addParam(){
    let html = document.querySelector(".container").innerHTML;
    let html2= '<div><input type="text" class="parametro" placeholder="Parametro"><input type="number" class="valor" placeholder="Valor"></div>';
    document.querySelector(".container").innerHTML = html +  html2;
};