const path = require('path');

module.exports = (path) => {
    //index
    //view
    //make
    app.get("/make", (req, res) => {

        res.sendFile(path.join(__dirname, "../public/make.html"))
    });

    app.get("/view", (req, res) => {

        res.sendFile(path.join(__dirname, "../public/view.html"))
    });

    app.get("*", (req, res) => {

        res.sendFile(path.join(__dirname, "../public/index.html"))
    });
}