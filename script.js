$(document).ready(function () {
    //Retrieves user input from local storage
    var input1 = localStorage.getItem("input1");
    $("#input1").val(JSON.parse(input1));
    var input2 = localStorage.getItem("input2");
    $("#input2").val(JSON.parse(input2));
    var input3 = localStorage.getItem("input3");
    $("#input3").val(JSON.parse(input3));
    var input4 = localStorage.getItem("input4");
    $("#input4").val(JSON.parse(input4));
    var input5 = localStorage.getItem("input5");
    $("#input5").val(JSON.parse(input5));
    var input6 = localStorage.getItem("input6");
    $("#input6").val(JSON.parse(input6));
    var input7 = localStorage.getItem("input7");
    $("#input7").val(JSON.parse(input7));
    var input8 = localStorage.getItem("input8");
    $("#input8").val(JSON.parse(input8));
    var input9 = localStorage.getItem("input9");
    $("#input9").val(JSON.parse(input9));

    //Work day hours
    var am9 = moment("09", "HH").format("HH");
    var am10 = moment("10", "HH").format("HH");
    var am11 = moment("11", "HH").format("HH");
    var pm12 = moment("12", "HH").format("HH");
    var pm1 = moment("13", "HH").format("HH");
    var pm2 = moment("14", "HH").format("HH");
    var pm3 = moment("15", "HH").format("HH");
    var pm4 = moment("16", "HH").format("HH");
    var pm5 = moment("17", "HH").format("HH");

    var currentTime = moment().format("HH");

    //Changes input background color based on the time of day
    if (am9 < currentTime) {
        $("#input1").css("background-color", "red")
    };

    if (am10 < currentTime) {
        $("#input2").css("background-color", "red")
    };

    if (am11 < currentTime) {
        $("#input3").css("background-color", "red")
    };

    if (pm12 < currentTime) {
        $("#input4").css("background-color", "red")
    };

    if (pm1 < currentTime) {
        $("#input5").css("background-color", "red")
    };

    if (pm2 < currentTime) {
        $("#input6").css("background-color", "red")
    };

    if (pm3 < currentTime) {
        $("#input7").css("background-color", "red")
    };

    if (pm4 < currentTime) {
        $("#input8").css("background-color", "red")
    };

    if (pm5 < currentTime) {
        $("#input9").css("background-color", "red")
    };

    //Displays live date and time
    function updateTime() {
        var time = moment().format('MMMM Do YYYY, h:mm:ss a');
        $("#time").text(time);
        setInterval(updateTime, 1000);
    };

    //Saves user input to local storage
    $(".btn1").on("click", function (event) {
        event.preventDefault();
        var input1 = $("#input1").val();
        localStorage.setItem("input1", JSON.stringify(input1));
    });

    $(".btn2").on("click", function (event) {
        event.preventDefault();
        var input2 = $("#input2").val();
        localStorage.setItem("input2", JSON.stringify(input2));
    });

    $(".btn3").on("click", function () {
        event.preventDefault();
        var input3 = $("#input3").val();
        localStorage.setItem("input3", JSON.stringify(input3));
    });

    $(".btn4").on("click", function () {
        event.preventDefault();
        var input4 = $("#input4").val();
        localStorage.setItem("input4", JSON.stringify(input4));
    });

    $(".btn5").on("click", function () {
        event.preventDefault();
        var input5 = $("#input5").val();
        localStorage.setItem("input5", JSON.stringify(input5));
    });

    $(".btn6").on("click", function () {
        event.preventDefault();
        var input6 = $("#input6").val();
        localStorage.setItem("input6", JSON.stringify(input6));
    });

    $(".btn7").on("click", function () {
        event.preventDefault();
        var input7 = $("#input7").val();
        localStorage.setItem("input7", JSON.stringify(input7));
    });

    $(".btn8").on("click", function () {
        event.preventDefault();
        var input8 = $("#input8").val();
        localStorage.setItem("input8", JSON.stringify(input8));
    });

    $(".btn9").on("click", function () {
        event.preventDefault();
        var input9 = $("#input9").val();
        localStorage.setItem("input9", JSON.stringify(input9));
    });

    updateTime();
});
