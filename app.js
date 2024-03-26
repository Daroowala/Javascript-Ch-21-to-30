var city = prompt("Enter your city name")
var arr = ["Karachi", "Islamabad", "Pishawer"]
for (var i = 0; i<arr.length; i++){
    if(arr[i] === city){
        alert("City has found")
    }else{alert("City is not found")}
}