var fs = require('fs');
module.exports = function () {
    this.res.writeHead(200, { 'Content-Type': 'text/html' });

    fs.readFile('./public/index.html', 'binary', function (err, file) {
        if (err) {
            this.res.writeHead(500, {
                'Content-Type': 'text/plain'
            });
            this.res.write(err + '\n');
            this.res.end();
            return;
        }
        this.res.write(file, 'binary');
        this.res.end();
    }.bind(this));
}