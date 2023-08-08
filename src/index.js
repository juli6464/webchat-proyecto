const express = require("express");
const { createServer } = require("http");
const realtimeServer = require("./realtimeServer");

const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();
const httpServer = createServer(app);

// settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.use(cookieParser());

// routes
app.use( require("./routes"));

// public
app.use( express.static( path.join(__dirname, "public")));

// levanto el servidor
httpServer.listen(app.get("port"), () => {
    console.log("el servidor esta correindo en el puerto", app.get("port"));
});

// llamo al servidor de socket.io
realtimeServer(httpServer);