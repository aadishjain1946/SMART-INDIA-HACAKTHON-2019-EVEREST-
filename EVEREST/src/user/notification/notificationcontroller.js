window.addEventListener("load",initevents);
function initevents(){
    var notification = document.querySelector("#notification");
    notification.removeAttribute('href');
    notification.className = 'btn btn-primary acolor';
}