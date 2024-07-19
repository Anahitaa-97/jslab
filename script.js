function sumTwoNumbers() {
    var number1 = parseFloat(prompt("لطفا عدد اول را وارد کنید:"));
    var number2 = parseFloat(prompt("لطفا عدد دوم را وارد کنید:"));

    if (isNaN(number1) || isNaN(number2)) {
        alert("لطفا اعداد معتبر وارد کنید.");
    } else {
        var sum = number1 + number2;
        alert("جمع دو عدد: " + sum);
    }
}