let numbers = [];

for (let i = 1; i <= 15; i++) {
    let row = [];
    for (let j = 1; j <= 15 - i; j++) {
        row.push(" ");
    }
    for (let j = 1; j <= i; j++) {
        row.push((i - j + 15));
    }
    numbers.push(row);
}

for (let i = 1; i <= 15; i++) {
    let row = [];
    for (let j = 1; j <= i - 1; j++) {
        row.push(" ");
    }
    for (let j = 1; j <= 15 - i; j++) {
        row.push((15 - i + j));
    }
    numbers.push(row);
}
console.table(numbers);
