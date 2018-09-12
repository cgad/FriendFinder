$("#submit").on("click", function(event) {
    event.preventDefault();

    var scores = [];
    for (var i = 1; i < 11; i++) {
        var score = $("input[name=q" + i + "]:checked").val();
        scores.push(score);
    };
    console.log(scores);

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
        $("#bffName").html("<h2>" + data.bestFriend + "!</h2>");
        $("#bffPic").html("<img src=" + data.bestFriendPic + ">");
        $(".modal").modal("show");
    });
});