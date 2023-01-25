
function decToBin(){

    var str = document.getElementById("dec").value;
    var output = parseInt(str).toString(2);
    return document.getElementById("bin").value = output;
    }
    
    function binToDecReset() {
    
        document.getElementById("bin").value = "";
        document.getElementById("dec").value = "";
        document.getElementById("hex").value = "";
    }
    
    function decToHex(){
    
    var str = document.getElementById("dec").value;
    var output = parseInt(str).toString(16).toUpperCase();
    return document.getElementById("hex").value = output;
    }
    