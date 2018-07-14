const CONFIG = {
  baseURI: process.env.FLOOD_BASE_URL || '/',
  dbCleanInterval: 1000 * 60 * 60,
  dbPath: '/app/flood/db/',
  floodServerHost: '0.0.0.0',
  floodServerPort: 80,
  maxHistoryStates: 30,
  pollInterval: 1000 * 5,
  secret: process.env.FLOOD_SECRET || 'secret',
  scgi: {
    host: 'localhost',
    port: 5000,
    socket: true,
    socketPath: '/app/rtorrent/session/rpc.sock'
  }
};

module.exports = CONFIG;
