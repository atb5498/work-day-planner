var input = $(".form-control");
var saveBtn = $(".btn");

saveBtn.on("click", function () {
    var inputValue = input.val();
    localStorage.setItem('inputValue', inputValue);
});