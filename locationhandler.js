function handler() {
    var twilioAccess = require('./smsHandler.js');

    function getLocation(req, res) {
        var payload = req.body;
        var message;
        if (!payload || !payload.geoPoint) {

            var location = JSON.parse(payload.body);
            message = "Your current position is " + location;
            twilioAccess.post(message, from);
        } else {
            message = "Sorry could get Location, try opening the url from the chrome browser or opera "
            twilioAccess.post(message, from);
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