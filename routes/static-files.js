var fs = require('fs'),
    path = require('path'),
    url = require('url'),
    mime = require('mime'),
    sendFileNotFound = require('./not-found');

module.exports = function () {
    var uri = url.parse(this.req.url).pathname;
    console.log(uri);
    var filename = path.join('public', uri);
    fs.exists(filename, function (exists) {
        if (!exists) {
            console.log('no exist');
            return sendFileNotFound(this.res);
        }
        if (fs.statSync(filename).isDirectory()) {
            filename = path.join(filename, config.filename);
            if(!fs.existsSync(filename)){
                return sendFileNotFound(this.res);
            }
        }
        fs.readFile(filename, 'binary', function (err, file) {
            if (err) {
                this.res.writeHead(500, {
                    'Content-Type': 'text/plain'
                });
                this.res.write(err + '\n');
                this.res.end();
                return;
            }

            var type = mime.lookup(filename);
            this.res.writeHead(200, {
                'Content-Type': type
            });
            this.res.write(file, 'binary');
            this.res.end();
        }.bind(this));
    }.bind(this));
};