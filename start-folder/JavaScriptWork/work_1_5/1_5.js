
const value1 = document.getElementById("value1");
const value2 = document.getElementById("value2");
const operator = document.getElementById("operator");
const result = document.getElementById("result");

function calculate() {

    // 数値が入力されていない場合
    if (value1.value === "" || value2.value === "") {
        result.textContent = "両方の数値を入力してください";
        return;
    }

    const num1 = Number(value1.value);
    const num2 = Number(value2.value);
    const op = operator.value;

    let answer;
    let symbol;

    switch (op) {

        case "+":
            answer = num1 + num2;
            symbol = "+";
            break;

        case "-":
            answer = num1 - num2;
            symbol = "−";
            break;

        case "*":
            answer = num1 * num2;
            symbol = "×";
            break;

        case "/":
            if (num2 === 0) {
                result.textContent = "0で割る事はできません。";
                return;
            }

            answer = num1 / num2;
            symbol = "÷";
            break;
    }

    // 計算式と結果を表示
    result.textContent =
        `${num1} ${symbol} ${num2} = ${answer}`;
}

// 入力内容が変わるたびに計算する
value1.addEventListener("input", calculate);
value2.addEventListener("input", calculate);
operator.addEventListener("change", calculate);

// 初期表示
calculate();
