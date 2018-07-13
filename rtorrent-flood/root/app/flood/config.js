const CONFIG = {
  baseURI: process.env.WEBROOT || '/',
  dbCleanInterval: 1000 * 60 * 60,
  dbPath: '/db',
  floodServerPort: 3000,
  maxHistoryStates: 30,
  pollInterval: 1000 * 5,
  secret: process.env.FLOOD_SECRET || 'secret',
  scgi: {
    host: 'localhost',
    port: 5000,
    socket: true,
    socketPath: '/app/rtorrent/rtorrent.sock'
  }
};

module.exports = CONFIG;
