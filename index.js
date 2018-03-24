const 	request 	= require('request');

function PasteeAPI(key) {
    this.key = key || "";
}

PasteeAPI.prototype.paste = function (data) {
    return new Promise((resolve, reject) => {
        if (typeof data === "string") {
            data = { "contents" : data };
        }
        if (!data.contents) {
            reject(new Errror("content is required"));
        }
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
            }],
            "expire": data.expire
        };
        request.post({
            headers:    header,
            url:        "https://api.paste.ee/v1/pastes",
            body:       JSON.stringify(body, null, 2)
        }, function (err, res, body) {
            if (err) {reject(err);}
            try {
              resolve(JSON.parse(body));
            } catch (err) {
              reject(err);
            }
        });
    });
};

module.exports = PasteeAPI;
