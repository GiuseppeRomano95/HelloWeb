function aggiungiRigaTabella(id_table, customers) {
    let table = document.getElementById(id_table);
    let tbody = table.getElementsByTagName('tbody')[0];
    let colonne = table.getElementsByTagName('th').length;
    for (let cust of customers) {
        let tr = document.createElement('tr');
        let tdId = document.createElement('td');
        let tdCompanyName = document.createElement('td');
        let tdAddress = document.createElement('td');
        let tdCity = document.createElement('td');
        let txId = document.createTextNode(cust.custid);
        let txCompanyName = document.createTextNode(cust.companyname);
        let txCity = document.createTextNode(cust.city);
        let txAddress = document.createTextNode(cust.address);
        tdId.appendChild(txId);
        tdCompanyName.appendChild(txCompanyName);
        tdAddress.appendChild(txAddress);
        tdCity.appendChild(txCity);
        tr.appendChild(tdId);
        tr.appendChild(tdCompanyName);
        tr.appendChild(tdAddress);
        tr.appendChild(tdCity);
        tbody.appendChild(tr);
    }
}

let button = document.querySelector("#btnLoad");

button.addEventListener("click", loadCustomers);

function loadCustomers(evt ){
    console.log("click");
    fetch("http://localhost:8080/customers")
    .then(r=>r.json())
    .then(cs=>aggiungiRigaTabella("customertable",cs));
    
}