$(document).ready(function() {

    $("#msg-input").on("keyup", function(event) {
        if(event.keyCode === 13) { // On "enter" key press
            let newMessage = document.createElement("div"); // Create new message box
            let newMessageText = document.createTextNode($("#msg-input").val()); // Use message from input
            newMessage.appendChild(newMessageText); // Add message to message box
            $(".history").append(newMessage); // Add message box to conversation
            $(".history").children().last().addClass("msg-sent"); // Add css class to added message
            $("#msg-input").val(""); // Clear input field
        }
    })

});
