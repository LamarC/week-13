const path = require('path');

module.exports = (app) => {
    //index
    //view
    //make
    
    app.get("/tables", (req, res) => {

        res.sendFile(path.join(__dirname, "../public/make.html"))
    });

    app.get("/waitlist", (req, res) => {

        res.sendFile(path.join(__dirname, "../public/view.html"))
    });

    app.get("*", (req, res) => {

        res.sendFile(path.join(__dirname, "../public/index.html"))
    });
}