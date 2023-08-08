module.exports = httpServer => {

    const { Server } = require("socket.io");
    const io = new Server(httpServer);

    io.on("connection", socket => {

        const cookie = socket. handshake.headers.cookie;
        const user = cookie.split("=").pop();
        console.log(user);
       
        socket.on("message", message => {

            io.emit("message", {
                user,
                message
            });
        });
        
    });
    
}