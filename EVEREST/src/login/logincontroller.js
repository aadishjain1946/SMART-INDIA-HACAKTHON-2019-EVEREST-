window.addEventListener("load", init);
function init() {
    bindevents();
    document.querySelector("#submit").setAttribute("cust","u");

}
function bindevents(){
    document.querySelector("#loginid").addEventListener("blur",chceckloginID);
    document.querySelector("#Admin").addEventListener("click",Admin);
    document.querySelector("#User").addEventListener("click",User);
}
function chceckloginID(){
    var id = document.querySelector("#loginid").Value;
}
function User(){
    document.querySelector("#submit").setAttribute("cust","u");
    var User = document.querySelector("#User");
    var Admin = document.querySelector("#Admin");
    Admin.classList.remove('active');
    User.classList.add('active');

}
function Admin(){
    document.querySelector("#submit").setAttribute("cust","a");
    var User = document.querySelector("#User");
    var Admin = document.querySelector("#Admin");
    User.classList.remove('active');
    Admin.classList.add('active');
}
