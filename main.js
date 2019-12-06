function savedata()
{
var first=document.getElementById("firstname").value;
var last=document.getElementById("lastname").value;
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
  }
};
xmlhttp.open("POST", "http://localhost:3001/student/save", true);
xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xmlhttp.send(JSON.stringify({ "fname": first,"lname": last, "response": { "fname": first,"lname":last } }));
}


function stud_preview()
{
  var id=Number(document.getElementById("stud_id").value);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var a=JSON.parse(xhttp.response);
      console.log(a);
      if(a.length > 0){
      document.getElementById("stud_fname").value=a[0].fname;
      document.getElementById("stud_lname").value=a[0].lname;
      }
    }
  };
  xhttp.open("GET", "http://localhost:3001/student1?id="+id, false);
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send();
}

function addTable()
{
  
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var a=JSON.parse(xhttp.response);

      console.log(a);

  var myTableDiv = document.getElementById("myDynamicTable");
    
  var table = document.createElement('TABLE');
  table.border='1';
  
  var tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);
    
  for (var i=0; i<a.length; i++){
     var tr = document.createElement('TR');
     tableBody.appendChild(tr);
         var tdId = document.createElement('TD');
         tdId.width='75';
         console.log( a[i].id);
         tdId.appendChild(document.createTextNode( a[i].id));
         var tdFName = document.createElement('TD');
         tdFName.width='75';
         tdFName.appendChild(document.createTextNode(a[i].fname));
         var tdLName = document.createElement('TD');
         tdLName.width='75';
         tdLName.appendChild(document.createTextNode( a[i].lname));
         tr.appendChild(tdId);
         tr.appendChild(tdFName);
         tr.appendChild(tdLName);
  }
  myTableDiv.appendChild(table);

    }
  };
  xhttp.open("GET", "http://localhost:3001/student",true);
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send();
}

