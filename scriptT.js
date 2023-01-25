
function binToDec(){

    var str = document.getElementById("bin").value;
    var output = parseInt(str,2);
    return document.getElementById("dec").value = output;
    }
    
    function binToDecReset() {
    
        document.getElementById("bin").value = "";
        document.getElementById("dec").value = "";
        document.getElementById("hex").value = "";
    }
    
    function binToHex(){
    
    var str = document.getElementById("bin").value;
    var output = parseInt(str, 2).toString(16).toUpperCase();
    return document.getElementById("hex").value = output;
    }
    