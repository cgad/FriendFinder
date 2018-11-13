$("#submit").on("click", function(event) {
    event.preventDefault();

    var scores = [];
    for (var i = 1; i < 11; i++) {
        // score = the checked radio button
        var score = $("input[name=q" + i + "]:checked").val();
        // add score to scores array
        if (score !== "") {
            scores.push(score);
        }
    };
    console.log("scores length:" + scores.length);

    var newFriend = {
        name: $("#name").val().trim(),
        photo: $("#photo").val().trim(),
        scores: scores
    };

    $.post("/api/friends", newFriend, function(data) {
        // clear fields on submit
        $("#name").val("");
        $("#photo").val("");
        for (var i = 1; i < 11; i++) {
            $("[name=q" + i + "]").removeAttr("checked");
        };

        // data is match from apiRoute
        scores = [];
        $("#bffName").html("<h2>" + data.bestFriend + "!</h2>");
        $("#bffPic").html("<img src=" + data.bestFriendPic + ">");
        $(".modal").modal("show");
    });
    
});