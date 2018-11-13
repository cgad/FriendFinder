var apiRoutes = function (app, friendsList) {
    // display JSON of all friends
    app.get("/api/friends", function (req, res) {
        return res.json(friendsList);
    });

    // handle incoming survey results & compatibility logic
    app.post("/api/friends", function(req, res) {
        // req.body = newFriend from frontend.js
        // add newFriend to friendsList array in first position
        friendsList.unshift(req.body);
        console.log("req.body.scores:" + req.body.scores);
        console.log(friendsList);

        // max diff is 40, replace matchDiff value with anything less than initial value or previous index value 
        var matchDiff = 40;

        var match = {
            bestFriend: "",
            bestFriendPic: ""
        };

        // if the user has answered all 10 questions
        if (req.body.scores === 10) {
            // loop through friendsList
            for (var i = 1; i < friendsList.length; i++) {
                // reset diff to 0
                var diff = 0;

                // loop through friendsList.scores
                // add the absolute difference between current friend and newFriend at index 0
                for (var j = 0; j < friendsList[i].scores.length; j++) {
                    diff += Math.abs(friendsList[0].scores[j] - friendsList[i].scores[j]);
                };
                
                // if current diff is less than 40, reset matchDiff value to current diff value
                // so matchDiff will reflect the max diff found so far through the friendsList array
                if (diff < matchDiff) {
                    matchDiff = diff;
                    match.bestFriend = friendsList[i].name;
                    match.bestFriendPic = friendsList[i].photo;
                }
            };
        // otherwise, don't calculate and send error message instead
        } else {
            match.bestFriend = "...not yet determined. <img src='../images/Surprised_Face_Emoji.png'/><br><br> Please answer all 10 questions if you want a new best friend"
        }
        
        console.log("match " + matchDiff);
        console.log("bff " + match.bestFriend);

        res.json(match);
    });
}

// export to server.js
module.exports = apiRoutes;