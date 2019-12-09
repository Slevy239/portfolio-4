$(document).ready(function () {


    $("#submit").on("click", function (event) {
        event.preventDefault();

        let newContact = {
            contact_name: $("#name").val().trim(),
            email: $("#email").val().trim(),
            body: $("#body").val().trim(),
            created_at: moment().format("YYYY-MM-DD HH:mm:ss")
        }
        var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        if (testEmail.test(newContact.email)) {
            console.log(newContact);
            $.ajax("/api/new", {
                type: "POST",
                data: newContact

            }).then(function (data) {
                location.reload();
                alert("Thank you for your submission!")
            })

        }

        else
            alert("Please enter a valid email address!")
    })
})
