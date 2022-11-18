let btn = document.getElementById("submit");
btn.addEventListener("click", function(evt){
    evt.preventDefault();
    console.log("bottone cliccato");
    let x = parseInt(document.querySelector("#x").value);
    let y = parseInt(document.querySelector("#y").value);
    let sum = x+y;
    console.log(sum);
    let result = document.querySelector("#result");
    result.innerHTML = `la somma dei due numeri è ${sum}`;
});
let z = {
    nome:"Ciccio", 
    cognome:"Pasticcio",
    saluta: function(){
    console.log("Ciao da " + this.nome);
    }    
};
z.saluta();
function loadData(){
    let xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        console.log(this.responseText);
    };
xhttp.open("get","clients.json",false);
xhttp.send();
console.log(xhttp.responseText);
}
//loadData();
async function loadDataFetch(){
//    let pc = fetch("clients.json");
//    let pt = pc.then(function(response){
//      return response.text();
//    });
//    pt.then(function(t){
//     console.log(t);
//    });




// fetch("clients.json")
// .then(r=>r.json())
// .then(t=>console.log(t))


let response = await fetch("clients.json");
let csArray = await response.json;
console.log(csArray);
}
loadDataFetch();

function aggiungiRigaTabella(id_table){
let table = document.getElementById(id_table);
let tbody = table.getElementsByTagName('tbody')[0];
let colonne = table.getElementsByTagName('th').length;
let tr = document.createElement('tr');
for(let i=0; i<colonne; i++){
    let td = document.createElement('td');
    let tx = document.createTextNode(prompt("Inserisci testo per cella "+(i+1),""));
    td.appendChild(tx);
    tr.appendChild(td);
}
tbody.appendChild(tr);
}
