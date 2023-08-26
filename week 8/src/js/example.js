
function changeTitle(){
    var title=document.getElementById("title");
    if (title.innerHTML=="Cars"){
        title.innerHTML="Trucks";
    }else{
        title.innerHTML="Cars";
    }
}


function add(){
    var make=document.querySelector("#make").value;
    var model=document.querySelector("#model").value;


    if (make!="" && model.length>=1){
         // alert(make + " " + model);
        var table=document.querySelector("#content");
        
        var row=document.createElement("tr");
        var makeCell=document.createElement("td");
        var modelCell=document.createElement("td");

        makeCell.innerHTML=make;
        modelCell.innerHTML=model;
        

        row.appendChild(makeCell);
        row.appendChild(modelCell);
        table.append(row);
        
    }
}

document.querySelector('#check').addEventListener('change', function() {
    if (this.checked) {
        alert("checked");
    } else {
        alert("unchecked");
    }
});

//binding the event to the element
var title=document.getElementById("title");
title.addEventListener("click",changeTitle);


function clearTable(){
    var table=document.querySelector("#content");
    table.innerHTML="";
}