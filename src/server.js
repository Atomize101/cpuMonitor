const server = requre('http').createServer();
const os = require('os-utils');

const io = require('socket.io')(server, {
    transports: ['websocket', 'polling']
});

io.on('connection', client =>{
    setInterval(() => {
        os.cpuUsage((cpuPercent) => {
            client.emit('cpu', cpuPercent);
        })
    }, 1000);
});

server.listen(3000);