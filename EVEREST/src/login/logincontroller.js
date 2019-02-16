window.addEventListener("load", init);
function init() {
    bindevents();
}
function bindvents(){
    document.querySelector("#loginid").addEventListener("blur",chceckloginID);
}
function chceckloginID(){
    var id = document.querySelector("#loginid").Value;
}