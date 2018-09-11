var apiRoutes = function (app, friendsList) {
    // display JSON of all friends
    app.get("/api/friends", function (req, res) {
        return res.json(friendsList);
    });

    // handle incoming survey results & compatibility logic
    app.post("/api/friends", function(req, res) {
        // req.body = newFriend from frontend.js
        friendsList.unshift(req.body);
        console.log(req.body);
        console.log(friendsList);

        var matchDiff = 50;

        var match = {
            bestFriend: "",
            bestFriendPic: ""
        };

        for (var i = 1; i < friendsList.length; i++) {
            console.log(friendsList[i]);
            var diff = 0;
            for (var j = 0; j < friendsList[i].scores.length; j++) {
                diff += Math.abs(friendsList[0].scores[j] - friendsList[i].scores[j]);
            };

            if (diff < matchDiff) {
                matchDiff = diff;
                match.bestFriend = friendsList[i].name;
                match.bestFriendPic = friendsList[i].photo;
            }
        };
        
        console.log("match " + matchDiff);
        console.log("bff " + match.bestFriend);

        res.json(match);
    });
}

// export to server.js
module.exports = apiRoutes;