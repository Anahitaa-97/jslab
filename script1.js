function checkEvenOdd() {
    var number = parseInt(prompt("لطفا یک عدد وارد کنید:"));
    if (isNaN(number)) {
        alert("لطفا یک عدد معتبر وارد کنید.");
    } else if (number % 2 === 0) {
        alert("عدد " + number + " زوج است.");
    } else {
        alert("عدد " + number + " فرد است.");
    }
}