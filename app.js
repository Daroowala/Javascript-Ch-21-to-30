var city = prompt("Enter your city name")
city = city.toLowerCase()
var arr = ["karachi", "islamabad", "lahore"]
for (var i = 0; i < arr.length; i++){
    if(arr[i] === city){
        alert("city is found")
        break
    }
    else{alert("city is not found")}
}