for (let i = 1; i <= 15; i++) {
    let line = "";
    for (let j = 1; j <= 15 - i; j++) {
        line += " ";
    }
    for (let j = 1; j <= i; j++) {
        line += (i - j + 15) + " ";
    }
    console.log(line);
}

for (let i = 1; i <= 15; i++) {
    let line = "";
    for (let j = 1; j <= i - 1; j++) {
        line += " ";
    }
    for (let j = 1; j <= 15 - i; j++) {
        line += (15 - i + j) + " ";
    }
    console.log(line);
}
