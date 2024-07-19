function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value / 100;

    if (weight && height) {
        var bmi = weight / (height * height);
        document.getElementById('result').innerText = 'BMI شما: ' + bmi.toFixed(2);
    } else {
        alert('لطفاً اطلاعات معتبر وارد کنید.');
    }
}

const result = 45/(1.67*1.67)
console.log(result)
