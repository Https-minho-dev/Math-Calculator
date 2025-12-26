const expressionEl = document.getElementById("expression");
const resultEl = document.getElementById("result");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.textContent;

        if (value === "AC") {
            expression = "";
            expressionEl.textContent = "";
            resultEl.textContent = "0";
            return;
        }

        if (value === "=") {
            try {
                const calc = expression
                    .replace(/×/g, "*")
                    .replace(/÷/g, "/")
                    .replace(/−/g, "-");
                resultEl.textContent = eval(calc);
            } catch {
                resultEl.textContent = "Error";
            }
            return;
        }

        expression += value;
        expressionEl.textContent = expression;
    });
});
