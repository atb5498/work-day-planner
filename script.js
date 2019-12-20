$(document).ready(function () {
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

    function updateTime() {
        var time = moment().format('MMMM Do YYYY, h:mm:ss a');
        $("#time").text(time);
        setInterval(updateTime, 1000);
    }

    // var currentTime = moment().format();
    // var timeNine = ('09:00 a');

    // if (timeNine < currentTime. {
    //     $("#inputNine").css("background-color", "red")
    // }

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
