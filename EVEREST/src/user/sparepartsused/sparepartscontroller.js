window.addEventListener("load",initevents);
function initevents(){
    var spareparts = document.querySelector("#spareparts");
    spareparts.removeAttribute('href');
    spareparts.className = 'btn btn-primary acolor';
}