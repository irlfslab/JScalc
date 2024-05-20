const disp = document.getElementById("display");

function addKey(inVal){
    disp.value += inVal;
}
function clearDisp(){
    disp.value = "";
}
function deleteNum(){
    disp.value = disp.value.toString().slice(0,-1);
}
function calculate(){
   switch (disp.value){
    case "":
    case "+":
    case "-":
    case "*":
    case "/":
    case ".":
    case "=":
        disp.value = "";
        break;
    default:
        disp.value = eval(disp.value);
    }
}
