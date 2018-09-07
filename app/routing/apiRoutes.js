// these routes are starting in routing file
// navigate path back to public directory

var apiRoutes = function(app, friendsList) {
    // display JSON of all friends
    app.get("/api/friends", function(req, res) {
        return res.json(friendsList);
    });

    // handle incoming survey results
    // handle compatibility logic
    app.post("/api/friends", function(req, res) {
        var friend = req.body;
        friendsList.push(friend);
        res.json(friend);
        console.log(friendsList);
    });
}

// export to server.js
module.exports = apiRoutes;