const disp = document.getElementById("display");
function addKey(inval){
    disp.value += inval;
}
function clearDisp(){
    disp.value = "";
}
function calculate(){
    try{disp.value = eval(disp.value)}
    catch(error){disp.value = "Error"}
}