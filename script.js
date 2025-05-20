const output = document.getElementById("textfield");

const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        switch(button.textContent) {
            case "<=": output.value = output.value.slice(0, -1); break;
            case "CE": case "C": output.value = ""; break;
            case "+-": output.value = -output.value; break;
            case "sqrt": output.value = Math.sqrt(output.value); break;
            case "1/x": output.value = 1 / output.value; break;
            case "=": output.value = eval(output.value); break;
            default: output.value += button.textContent; break;
        }
    });
});