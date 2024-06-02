function skillsMember() {
    // Get the current member ID
    var memberId = $(this).data("id");
    // Get the current member's skills
    $.get("/api/members/" + memberId, function (data) {
        var skills = data.Skills;
        // Display the skills on the page
        if (!skills || !skills.length) {
            $("#skills-list").append("<h2>No Skills to Display</h2>");
        }
        else {
            for (var i = 0; i < skills.length; i++) {
                var listItem = $("<li class='list-group-item mt-4'>");
                listItem.append(
                    $("<h2>").text(skills[i].Skill),
                    $("<p>").text("Level: " + skills[i].Level),
                    $("<p>").text("Experience: " + skills[i].Experience),
                    $("<button class='btn btn-danger delete'>Delete</button>")
                );
                $("#skills-list").append(listItem);
            }
        }
    });
}