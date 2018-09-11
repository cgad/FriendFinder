$("#submit").on("click", function(event) {
    event.preventDefault();

    var newFriend = {
        name: $("#name").val().trim(),
        photo: $("#photo").val().trim(),
        scores: [
            // loop here like below?
            $("input[name=q1]:checked").val(),
            $("input[name=q2]:checked").val(),
            $("input[name=q3]:checked").val(),
            $("input[name=q4]:checked").val(),
            $("input[name=q5]:checked").val(),
            $("input[name=q6]:checked").val(),
            $("input[name=q7]:checked").val(),
            $("input[name=q8]:checked").val(),
            $("input[name=q9]:checked").val(),
            $("input[name=q10]:checked").val()
        ]
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