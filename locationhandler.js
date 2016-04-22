function handler() {
    var twilioAccess = require('./smsHandler.js');

    function getLocation(req, res) {
        var payload = req.body;
        var message;
        var location = JSON.parse(payload);

        if (!payload || !payload.geoPoint || !payload.phone) {
            var location = payload.geopoint;
            message = "Your current position is " + location;
            twilioAccess.post(message, payload.phone);
        } else {
            message = "Sorry could get Location, try opening the url from the chrome browser or opera "
            twilioAccess.post(message, payload.phone);
        }
    }
    function renderIndex(req, res) {
        res.status(200).render('location.html');
    }
    return {
        renderIndex: renderIndex,
        getLocation: getLocation
    }
}
module.exports = handler;