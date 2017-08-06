var friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        var movieMatch = {
            name: "",
            photo: "",
            friendDiff: 150
        };

        var inputScores = req.body.scores;
        var totalDiff = 0;
        
        for (var i = 0; i < friends.length; i++) {
            totalDifference = 0;
            for (var j = 0; j < friends[i].scores[j]; j++) {
                totalDifference += Math.abs(parseInt(inputScores[j]) - parseInt(friends[i].scores[j]));
                console.log(Math.abs(parseInt(inputScores[j]) - parseInt(friends[i].scores[j])));
                if (totalDiff <= movieMatch.friendDiff) {
                    movieMatch.name = friends[i].name;
                    movieMatch.photo = friends[i].photo;
                    movieMatch.friendDiff = totalDiff;
                }
            }
        }
        console.log("match", movieMatch);
        res.json(movieMatch);
        friends.push(req.body);
    });
};