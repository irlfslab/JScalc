const disp = document.getElementById("display");
let prev='';
function addKey(inval){
    disp.value += inval;
}
function clearDisp(){
    disp.value = "";
}
function deleteNum(){
    disp.value = disp.value.toString().slice(0,-1);
}
function calculate(){
    try{disp.value = eval(disp.value)}
    catch(error){disp.value = "Error"}

}