function btn(num){
    var a = document.getElementById("display")
    display.value += num;
}

function remove(){
    var a =  document.getElementById("display")
    a.value = ""
}

function ans(){
    var a = document.getElementById("display")
    a.value = eval(a.value)
    for (var i=0; i<a.value.length; i++){
        if(a.value == "++"){
            alert(error)
        }
    }
    
}

