const 	request 	= require('request');
const 	util 	= require('util');

function PasteeAPI(key) {
    this.key = key || "";
}

PasteeAPI.prototype.paste = function (data) {
    return new Promise((resolve, reject) => {
        if (typeof data === "string") {
            data = { "contents" : data };
        }
        if (!data.content) {reject("content is required");}
        let header = {
            "X-Auth-Token": this.key,
            "Content-Type": "application/json"
        };
        let body = {
            "encrypted":    data.encrypted || false,
            "description":  data.description || "",
            "sections": [{
                "name":     data.name || "",
                "syntax":   "autodetect",
                "contents":  data.contents
            }]
        };
        request.post({
            headers:    header,
            url:        "https://api.paste.ee/v1/pastes",
            body:       JSON.stringify(body, null, 2)
        }, function (err, res, body) {
            if (err) {reject(err);}
            console.log(util.inspect(body));
        });
    });
};

module.exports = PasteeAPI;