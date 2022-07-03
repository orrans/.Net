// Write a function that returns the total number of non-nested items in a nested array. with arrow function
function getLength(arr) {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return acc + getLength(curr);
    } else {
      return acc + 1;
    }
  }, 0);
}

function js_style() {
  //font styles added by JS:
  text.style.fontSize = "28pt";
  text.style.fontFamily = "Ariel";
  text.style.color = "green";
}

function getFormValue() {
  var x = document.getElementById("form1");
  for (var i = 0; i < x.length; i++) {
    if (x.elements[i].value != "Submit") {
      console.log(x.elements[i].value);
    }
  }
}

function getAttributes() {
  var u = document.getElementById("w3r").href;
  alert("The value of the href attribute of the link is : " + u);
  var v = document.getElementById("w3r").hreflang;
  alert("The value of the hreflang attribute of the link is : " + v);
  var w = document.getElementById("w3r").rel;
  alert("The value of the rel attribute of the link is : " + w);
  var x = document.getElementById("w3r").target;
  alert("The value of the taget attribute of the link is : " + x);
  var y = document.getElementById("w3r").type;
  alert("The value of the type attribute of the link is : " + y);
}

function insert_Row() {
  var x = document.getElementById("sampleTable").insertRow(0);
  var y = x.insertCell(0);
  var z = x.insertCell(1);
  y.innerHTML = "New Cell1";
  z.innerHTML = "New Cell2";
}

function changeContent() {
  rn = window.prompt("Input the Row number(0,1,2)", "0");
  cn = window.prompt("Input the Column number(0,1)", "0");
  content = window.prompt("Input the Cell content");
  var x = document.getElementById("myTable").rows[parseInt(rn, 10)].cells;
  x[parseInt(cn, 10)].innerHTML = content;
}

function createTable()
{
rn = window.prompt("Input number of rows", 1);
cn = window.prompt("Input number of columns",1);
  
 for(var r=0;r<parseInt(rn,10);r++)
  {
   var x=document.getElementById('myTable1').insertRow(r);
   for(var c=0;c<parseInt(cn,10);c++)  
    {
     var y=  x.insertCell(c);
     y.innerHTML="Row-"+r+" Column-"+c; 
    }
   }
}

function removecolor()
{
var x=document.getElementById("colorSelect");
x.remove(x.selectedIndex);
}