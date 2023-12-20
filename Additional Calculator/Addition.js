function myaddition() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = Number(num1) + Number(num2);
    document.getElementById("p1").innerHTML = "The sum of " + num1 + " and " + num2 + " is: " + num3;
}
