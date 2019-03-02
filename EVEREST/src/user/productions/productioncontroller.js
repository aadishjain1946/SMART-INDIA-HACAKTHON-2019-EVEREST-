window.addEventListener("load",initevents);
function initevents(){
    var production = document.querySelector("#production");
    production.removeAttribute('href');
    production.className = 'btn btn-primary acolor';
}