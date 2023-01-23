let numbers = [];
for (let i = 1; i <= 15; i++) {
    let row = [];
    for (let j = 1; j <= 15 - i; j++) {
        row.push(" ");
    }
    row.push(i + 15);
    numbers.push(row);
}
for (let i = 2; i <= 15; i++) {
    let row = [];
    for (let j = 1; j <= i - 1; j++) {
        row.push(" ");
    }
    row.push(30 - i);
    numbers.push(row);
}
console.table(numbers);
