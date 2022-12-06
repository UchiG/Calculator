num1 =document.querySelector("#num1");
num2 =document.querySelector("#num2");

add =document.querySelector("#Add");
minus =document.querySelector("#Minus");
multiply =document.querySelector("#Multiply");
divide =document.querySelector("#Divide");

displayBox = document.querySelector(".displayBox");
display_result = document.querySelector("#display_result");

Add.addEventListener("click", function() {
    
    function addition(num1,num2) {
        ans = parseInt(num1.value) + parseInt(num2.value);
        alert(ans);
    }  
    addition(num1,num2);
    display_result.innerHTML = ans;
});




Minus.addEventListener("click", function() {
    function subtraction(num1,num2) {
        ans = parseInt(num1.value) - parseInt(num2.value);
        // alert(ans);
    }
    subtraction(num1,num2);
    display_result.innerHTML = ans;
});

Multiply.addEventListener("click", function() {
    function multiplication(num1,num2) {
        ans = parseInt(num1.value) * parseInt(num2.value);
        // alert(ans);
    }
    multiplication(num1,num2);
    display_result.innerHTML = ans;
});

Divide.addEventListener("click", function() {
    function division(num1,num2) {
        ans = parseInt(num1.value) / parseInt(num2.value);
        // alert(ans);
    }
    division(num1,num2);
    display_result.innerHTML = ans;
});