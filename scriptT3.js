
function hexToBin(){

    var str = document.getElementById("hex").value;
    var output = parseInt(str, 16).toString(2).padStart(8, '0');
    return document.getElementById("bin").value = output;
    }
    
    function binToDecReset() {
    
        document.getElementById("bin").value = "";
        document.getElementById("dec").value = "";
        document.getElementById("hex").value = "";
    }
    
    function hexToDec(){
    
    var str = document.getElementById("hex").value;
    var output = parseInt(str, 16);
    return document.getElementById("dec").value = output;
    }
    