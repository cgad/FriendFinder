// these routes are starting in routing file
// navigate path back to public directory

var apiRoutes = function (app, friendsList) {
    // display JSON of all friends
    app.get("/api/friends", function (req, res) {
        return res.json(friendsList);
    });

    // handle incoming survey results & compatibility logic
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
        // unshift pushes new friend to first index of array
        friendsList.unshift(friend);

        var match = 50;

        // how can i get the object rather than [Object object] so i don't have to save name and pic explicitly?
        var bestFriend = "";
        var bestFriendPic = "";

        for (var i = 1; i < friendsList.length; i++) {
            var diff = 0;
            for (var j = 0; j < friendsList[i].scores.length; j++) {
                diff += Math.abs(friendsList[0].scores[j] - friendsList[i].scores[j]);
            };

            if (diff < match) {
                match = diff;
                bestFriend = friendsList[i].name;
                bestFriendPic = friendsList[i].photo;
            }
        };
        
        console.log("match " + match);
        console.log("bff " + bestFriend);

        res.json(friend);
    });

    app.post("/api/friends", function(req, res) {
        $("#submit").on("click", function(event) {
            console.log(req.body);
            event.preventDefault();

            var newFriend = {
                name: $("#name").val().trim(),
                photo: $("#photo").val().trim(),
                score: []
            };

            friendsList.unshift(newFriend);
            console.log(newFriend)
        });
    });
}

// export to server.js
module.exports = apiRoutes;