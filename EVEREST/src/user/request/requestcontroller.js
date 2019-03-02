window.addEventListener("load",initevents);
function initevents(){
    var request = document.querySelector("#request");
    request.removeAttribute('href');
    request.className = 'btn btn-primary acolor';
}