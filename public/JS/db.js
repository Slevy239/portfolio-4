$("#submit").on("click", function (event) {
    event.preventDefault();

    let newContact = {
        email: $("#email").val().trim(),
        body: $("#body").val().trim(),
        created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    }
    console.log(newContact);


    $.post("/api/new", newContact)
        .then(function() {
           alert("Thank you for your submission!") 
        })

        $("#email").val("");
        $("#body").val("");
})