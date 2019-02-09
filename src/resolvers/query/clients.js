var fs = require('fs');
var _clients = JSON.parse(fs.readFileSync(__dirname.concat('/data_clients.json'), 'utf8'));

const clients = (obj, args, context) => {
  if(!args.clientId){
      return _clients
  }
  return _clients.filter((client) => {
      return client.id.includes(args.clientId)
  })
}

export { clients }
