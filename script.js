$(document).ready(function () {
    var input1 = localStorage.getItem("input1");
    $("#input1").val(JSON.parse(input1));

    var input2 = $("#input2");
    var saveBtn2 = $(".btn2");
    var input3 = $("#input3");
    var saveBtn3 = $(".btn3");
    var input4 = $("#input4");
    var saveBtn4 = $(".btn4");
    var input5 = $("#input5");
    var saveBtn5 = $(".btn5");
    var input6 = $("#input6");
    var saveBtn6 = $(".btn6");
    var input7 = $("#input7");
    var saveBtn7 = $(".btn7");
    var input8 = $("#input8");
    var saveBtn8 = $(".btn8");
    var input9 = $("#input9");
    var saveBtn9 = $(".btn9");

    function updateTime() {
        var time = moment().format('MMMM Do YYYY, h:mm:ss a');
        $("#time").text(time);
        setInterval(updateTime, 1000);
    }

    $(".btn1").on("click", function (event) {
        event.preventDefault();
        var input1 = $("#input1").val();
        localStorage.setItem("input1", JSON.stringify(input1));
    });

    var inputNine = localStorage.getItem("inputNine");
    $("#inputNine").val(JSON.parse(inputNine));


    saveBtn2.on("click", function () {
        event.preventDefault();
        var inputValue2 = input2.val();
        localStorage.setItem("inputValue2", JSON.stringify(inputValue2));
    });

    saveBtn3.on("click", function () {
        event.preventDefault();
        var inputValue3 = input3.val();
        localStorage.setItem("inputValue3", JSON.stringify(inputValue3));
    });

    saveBtn4.on("click", function () {
        event.preventDefault();
        var inputValue4 = input4.val();
        localStorage.setItem("inputValue4", JSON.stringify(inputValue4));
    });

    saveBtn5.on("click", function () {
        event.preventDefault();
        var inputValue5 = input5.val();
        localStorage.setItem("inputValue5", JSON.stringify(inputValue5));
    });

    saveBtn6.on("click", function () {
        event.preventDefault();
        var inputValue6 = input6.val();
        localStorage.setItem("inputValue6", JSON.stringify(inputValue6));
    });

    saveBtn7.on("click", function () {
        event.preventDefault();
        var inputValue7 = input7.val();
        localStorage.setItem("inputValue7", JSON.stringify(inputValue7));
    });

    saveBtn8.on("click", function () {
        event.preventDefault();
        var inputValue8 = input8.val();
        localStorage.setItem("inputValue8", JSON.stringify(inputValue8));
    });

    saveBtn9.on("click", function () {
        event.preventDefault();
        var inputValue9 = input9.val();
        localStorage.setItem("inputValue9", JSON.stringify(inputValue9));
    });

    updateTime();
});
