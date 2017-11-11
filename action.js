$(document).ready(function () {

    $("#start").prop('disabled', true);
    $("#reset").prop('disabled', true);
    $("#restart").prop('disabled', true);

    var number_null_error = "<span id='number_null_error'>Number cannot be empty</span>";
    var number_integer_error = "<span id='number_integer_error'>Number should be integer</span>";
    var number_negative_error = "<span id='number_negative_error'>Number must be positive</span>";

    $("#number").focusin(function () {
        $("#number_null_error").remove();
        $("#number_integer_error").remove();
        $("#number_negative_error").remove();
        $("#start").prop('disabled', true);
        $("#reset").prop('disabled', true);
        $("#restart").prop('disabled', true);
    }).focusout(function () {
        var value = $(this).val().trim();
        var enabled = false;

        if (value === "") {
            $("#number").after(number_null_error);
        } else if (parseInt(value) !== Number(value)) {
            $("#number").after(number_integer_error);
        } else if (Number(value) < 0) {
            $("#number").after(number_negative_error);
        } else {
            enabled = true;
        }

        if (enabled) {
            $("#start").prop('disabled', false);
            $("#reset").prop('disabled', false);
            $("#restart").prop('disabled', false);
        }
    });
});

function counter() {
    interval = setInterval(counting, 1000);
}

function counting() {
    document.getElementById("counter").innerHTML = count.toString();
    if (count <= $("#number").val()) {
        if (count % 3 === 0) {
            document.getElementById("fingers").style.backgroundColor = "red";
        } else {
            document.getElementById("fingers").style.backgroundColor = "white";
        }
        if (count % 5 === 0) {
            document.getElementById("toes").style.backgroundColor = "yellow";
        } else {
            document.getElementById("toes").style.backgroundColor = "white";
        }
        count++;
    }
}

function reset() {
    count = 0;
    document.getElementById("number").value = "";
    document.getElementById("counter").innerHTML = "";
    clearInterval(interval);
    interval = null;
    document.getElementById("toes").style.backgroundColor = "white";
    document.getElementById("fingers").style.backgroundColor = "white";
    $("#start").prop('disabled', true);
    $("#reset").prop('disabled', true);
    $("#restart").prop('disabled', true);
}

function restart() {
    count = 0;
    if (!interval)
        interval = setInterval(counting, 1000);
}