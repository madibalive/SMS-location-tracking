

function handler() {
    var twilio = require('twilio');
    var config = require('./config');
    // create an authenticated Twilio REST API client

    var client = twilio(config.accountSid, config.authToken);

    function post(message, to) {
        var options = {
            to: to,
            from: config.twilioNumber,
            body: message
        };
        client.sendMessage(options, function (err, response) {
            if (err) {
                // Just log it for now
                console.error(err);
            } else {
                // Log the last few digits of a phone number
                var masked = to.substr(0,
                    to.length - 5);
                masked += '*****';
                // generate report to some store
            }
        });
    }

    function matchRE(re, text) {
        var wordArray = tokenizer.tokenize(text);
        for (var i = 0; i < wordArray.length; i++) {
            if (re.test(wordArray[i])) {
                return true;
            }
        }
        return false;
    }
    function sendLink(from) {
        var message = ' ' + link;
        post(message, from);

    }
    function webhook(req, res) {
        var from = req.body.From;
        var text = req.body.Body;

        // RegExes
        var helpRE = /^HELP$/;
        var locationbRE = /^LOCATION$/;


        if (matchRE(locationbRE, text)) {
            sendLink(from);
        } else {
            var message = 'reply with LOCATION to get your current location';
            post(message, from)
        }
    }
    return {
        webhook: webhook,
        post: post
    }
}

module.exports = webhook;