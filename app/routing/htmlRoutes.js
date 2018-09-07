// these routes are starting in routing file
// navigate path back to public directory

var htmlRoutes = function(app, path) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    });
    
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}

// export to server.js
module.exports = htmlRoutes;