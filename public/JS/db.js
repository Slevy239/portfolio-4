$(document).ready(function () {


// $.get("/api/all", function (data) {
//     if (data.length !== 0) {
//         for (let i = 0; i < data.length; i++) {
//             var row = $("<div>");
//             row.addClass("contact");

//             row.append("<p>" + data[i].author + " contacted.. </p>");
//             row.append("<p>" + data[i].body + "</p>");
//             row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

//             // $("#chirp-area").prepend(row);


//         }
//     }
// })



$("#submit").on("click", function (event) {
    event.preventDefault();

    let newContact = {
        name: $("#name").val().trim(),
        email: $("#email").val().trim(),
        body: $("#body").val().trim(),
        created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    }
    console.log(newContact);
$.ajax("/api/new", {
    type: "POST",
    data: newContact
}).then(function (data) {
    location.reload();
    alert("Thank you for your submission!")
})

    // $("#email").val("");
    // $("#body").val("");
})

})