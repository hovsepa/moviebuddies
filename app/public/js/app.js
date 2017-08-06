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

    $.post("/api/friends", newFriend,
        function (data) {
            if (data) {
                console.log("Let's buddy you up...");
            } else {
                console.log("That didn't work out, make sure all fields are filled.");
            }
            $("#name").val();
            $("#url").val();
            $("#q01").val();
            $("#q02").val();
            $("#q03").val();
            $("#q04").val();
            $("#q05").val();
            $("#q06").val();
            $("#q07").val();
            $("#q08").val();
            $("#q09").val();
            $("#q10").val();
        }).then(response => {
        renderModal(response);
    });
})


$("#autofill").click(function (event) {
    event.preventDefault();
    $("#name").val("Mike Test");
    $("#url").val("https://media1.giphy.com/media/8P3LYmfINs5Da/giphy.gif");
    $("#q01").val("1");
    $("#q02").val("3");
    $("#q03").val("4");
    $("#q04").val("4");
    $("#q05").val("5");
    $("#q06").val("5");
    $("#q07").val("1");
    $("#q08").val("3");
    $("#q09").val("1");
    $("#q10").val("1");
});


let renderModal = (response) => {
    $(".reveal").append(
        "<h2>We've got you a movie buddy!</h2>" +
        "<p><img src=" + response.photo + "></p>" +
        "<h3>" + response.name + "</h3>" +
        "<button class='close-button' data-close aria-label='Close modal' type='button'>" +
        "<span id='modal-clear' aria-hidden='true'>&times;</span>" +
        "</button>"
    )
}

$(".button").click(function () {
    $(".reveal").empty();
});