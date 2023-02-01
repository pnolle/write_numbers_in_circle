for (let i = 1; i <= 15; i++) {
    let line = "";
    for (let j = 1; j <= 15 - i; j++) {
        line += " ";
    }
    line += (i) + " ";
    console.log(line);
}

for (let i = 2; i <= 15; i++) {
    let line = "";
    for (let j = 1; j <= i - 1; j++) {
        line += " ";
    }
    line += (15 - i + 45) + " ";
    console.log(line);
}
