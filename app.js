var city = prompt("Enter your city name")
city = city.toLowerCase()
var arr = ["karachi", "islamabad", "lahore"]
var found = false;
for (var i = 0; i < arr.length; i++){
    if(arr[i] === city){
        alert("city is found")
        found = true;
        break
    }
}
if (!found) {
    alert("city is not found")
}