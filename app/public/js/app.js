$(document).foundation()
$("[data-menu-underline-from-center] a").addClass("underline-from-center");

$("#submit").click(function (event) {
    event.preventDefault();
    var newFriend = {
        name: $("#name").val().trim(),
        photo: $("#url").val().trim(),
        scores: [
            $("#q01").val(),
            $("#q02").val(),
            $("#q03").val(),
            $("#q04").val(),
            $("#q05").val(),
            $("#q06").val(),
            $("#q07").val(),
            $("#q08").val(),
            $("#q09").val(),
            $("#q10").val()
        ]
    };
    console.log(newFriend)
})