var xmlhttp = new XMLHttpRequest();
var url = "main.json";

xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
var myArr = JSON.parse(this.responseText);
    myFunction(myArr);
    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();


function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += 
        '<li class="list-group-item">' 
        + arr[i].name + 
        ' is a ' 
        + arr[i].role + 
        ' at ' 
        + '<a href=" ' +  arr[i].url + '" target="_blank">' + arr[i].company + '</a>' + '</li>'; 
        
    }
    document.getElementById("employees").innerHTML = out;
}