if (navigator.userAgent.indexOf('Chrome') != -1) {
    document.getElementById('stylesheet').href = '../css/mainchrome.css';
} else if (navigator.userAgent.indexOf('Safari') != -1){
    document.getElementById('stylesheet').href = '../css/mainsafari.css';
}
// https://www.denisbouquet.com/javascript-targeting-safari-only/
