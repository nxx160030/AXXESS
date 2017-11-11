$(document).ready(function () {

    var number_null_error = "<span class = 'error' id='number_null_error'>Number cannot be empty</span>";
    var number_integer_error = "<span class = 'error' id='number_integer_error'>Number should be integer</span>";
    var number_negative_error = "<span class = 'error' id='number_negative_error'>Number must be positive</span>";
    count = 0;

    $("#number").focusin(function () {
        $("#number_null_error").remove();
        $("#number_integer_error").remove();
        $("#number_negative_error").remove();
    }).focusout(function () {
        var value = $(this).val().trim();

        if (value === "") {
            $("#number").after(number_null_error);
        } else if (parseInt(value) !== Number(value)) {
            $("#number").after(number_integer_error);
        } else if (Number(value) < 0) {
            $("#number").after(number_negative_error);
        }
    });
});

function counter() {

    if(!interval&&validate())
        interval = setInterval(counting, 1000);
}

function counting() {

    var value = document.getElementById("number").value.trim();
    if (value!=="" && count <= Number(value)) {
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
        document.getElementById("counter").innerHTML = count.toString();
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

}

function restart() {
    count = 0;
    if(!interval&&validate())
        interval = setInterval(counting, 1000);
}

function validate() {
    var flag = true;
    var value = document.getElementById("number").value.trim();
    if (value === "" ||
        parseInt(value) !== Number(value) ||
        Number(value) < 0) {
        flag = false;
    }
    return flag;
}


