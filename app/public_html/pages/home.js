function loadRow(item, tableBody) {
    let row='<tr>';
    row+='<tr>';
    row+='<th scope="row">'+item.id+'</th>';
    row+='<td>'+item.name+'</td>';
    row+='<td>'+item.description+'</td>';
    row+='<td>'+item.price+'&euro;</td>';
    row+='</tr>';
    tableBody.innerHTML+=row;
}

function loadDataInTable(itemsJSON, tableBody) {
    if(itemsJSON.length<=0) {
        document.getElementById("no-items-message").style.display="block";
    } else {
        document.getElementById("no-items-message").style.display="none";
        for(let i in itemsJSON)
            loadRow(itemsJSON[i], tableBody);
    }
}

function loadProducts() {

    let tableBody = document.getElementById("tbody-container");
    tableBody.innerHTML="";

    fetch(apiUrl+"/api/get_products.php", {
        method: 'GET'
    })
    .then((response) => {
        if(response.status==500)
            alert("Se ha producido un error, vuélvelo a intentar, si el problema persiste contacte con el administrador");
        else {
            response.json().then((data) => {
                if(data.status == "OK") {
                    loadDataInTable(data.data, tableBody);
                } else
                    alert("Se ha producido un error, vuélvelo a intentar, si el problema persiste contacte con el administrador");
            });
        }
    }) 
}

document.addEventListener("DOMContentLoaded", function(event) { 
    loadProducts();
});


