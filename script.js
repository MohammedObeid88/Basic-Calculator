const output = document.getElementById("textfield");

const buttons = document.querySelectorAll(".button");

const options = document.getElementById("color-box");

const exit = document.getElementById("exit");

function fact(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

function P(n, r) { return fact(n) / fact(n - r); }

function C(n, r) { return fact(n) / (fact(n - r) * fact(r)); }

buttons.forEach(button => {
    button.addEventListener("click", () => {
        switch(button.textContent) {
            case "x2": output.value = Math.pow(output.value, 2); break;
            case "sin": output.value = Math.sin(output.value); break;
            case "cos": output.value = Math.cos(output.value); break;
            case "tan": output.value = Math.tan(output.value); break;
            case "log": output.value = Math.log10(output.value); break;
            case "xexp": output.value += "^"; break;
            case ",": output.value += ","; break;
            case "ln": output.value = Math.log(output.value); break;
            case "nCr": output.value += "C("; break;
            case "nPr": output.value += "P("; break;
            case "x-1": output.value = Math.pow(output.value, -1); break;
            case "OPTN":
                options.style.display = (options.style.display === "block") ? "none" : "block";
                break;
            case "DEL": output.value = output.value.slice(0, -1); break;
            case "CE": case "C": output.value = ""; break;
            case "+-": output.value = -output.value; break;
            case "sqrt": output.value = Math.sqrt(output.value); break;
            case "1/x": output.value = 1 / output.value; break;
            case "=":
                output.value = output.value.replace(/\^/g, "**");
                output.value = output.value.replace(/π/g, "Math.PI");
                output.value = eval(output.value);
                break;
            default: output.value += button.textContent; break;
        }
    });
});

const color_btns = document.querySelectorAll(".color-btn");

color_btns.forEach(color_btn => {
    color_btn.addEventListener("input", () => {
        const targetClass = color_btn.id.replace("-color", "");
        const targetElements = document.querySelectorAll("." + targetClass);
        targetElements.forEach(el => {
            el.style.backgroundColor = color_btn.value;
        });
    });
});