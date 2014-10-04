module.exports = function(res){
    res.writeHead(404, {
        'Content-Type': 'text/plain'
    });
    res.write('404 - File Not Found\n');
    res.end();
    return;
};