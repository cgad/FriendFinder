// these routes are starting in routing file
// navigate path back to public directory

var apiRoutes = function (app, friendsList) {
    // display JSON of all friends
    app.get("/api/friends", function (req, res) {
        return res.json(friendsList);
    });

    // handle incoming survey results
    // handle compatibility logic
    // app.post("/api/friends/")...
    // app.get to test
    app.get("/api/friends/test", function (req, res) {
        // comment this out to test
        // var friend = req.body;
        // make new friend to test logic
        var friend = {
            name: "test",
            photo: "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/41120208_10156071099896785_8813983498026090496_o.jpg?_nc_cat=0&oh=11fecda81768ddaf07d9a160b6e31f27&oe=5C30B78A",
            scores: [1, 2, 5, 4, 5, 4, 1, 1, 1, 2]
        };
        friendsList.push(friend);

        // UNSHIFT (instead of push) the new friend.
        // then new friend = friendsList[0].
        // instead of array... var bestFriend = I;
        // if diff is < bestFriend, bestFriend = diff;
        // if not, bestFriend stays whatever it was.
        var diffArr = [];
        for (var i = 1; i < friendsList.length; i++) {
            var diff = 0;
            for (var j = 0; j < friendsList[i].scores.length; j++) {
                diff += Math.abs(friendsList[0].scores[j] - friendsList[i].scores[j]);
                console.log("inner diff ", diff);
            };
            // instead of pushing, unshift
            diffArr.push(diff);
            // smallest num in diffArr is the friend math

            console.log("outer Loop ", i)
        };
        
        console.log("diff array ", diffArr);

        res.json(friend);
        // console.log(friendsList);

    });
}

// export to server.js
module.exports = apiRoutes;