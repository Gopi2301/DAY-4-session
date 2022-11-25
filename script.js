// Step 1;
var request = new XMLHttpRequest();

// Step 2;
request.open("GET", "https://restcountries.com/v3.1/all")

// Step 3;
request.send()
// Step 4;
request.onload=function(){
    var data = request.response
    var result = JSON.parse(data)
    var target = "qatar"

    for( var i=0; i<result.length; i++){
        console.log(result[i].name.common +" "+ result[i].region +" "+ result[i].subregion )
        if (result[i].name.common=="qatar")
        }
    }

