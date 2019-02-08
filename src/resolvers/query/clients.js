var fs = require('fs');
var _clients = JSON.parse(fs.readFileSync(__dirname.concat('/data_clients.json'), 'utf8'));

const clients = (obj, args, context) => {
    return _clients;
}

export { clients }