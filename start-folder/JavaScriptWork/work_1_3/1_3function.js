
function getTotalPrice(price, quantity) {
    return `合計金額は${price * quantity}円です`;
}

function addTax(total) {
    return Math.floor(total * 1.1);
}

const price = 1000;
const quantity = 2;
const total = price * quantity;

console.log(getTotalPrice(price, quantity).replace("合計", "税抜"));
console.log(`税込金額は${addTax(total)}円です`);
