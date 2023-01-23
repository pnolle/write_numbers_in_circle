// function to print circle pattern
function printPattern(radius) {
    // dist represents distance to the center
    var dist = parseFloat(0);

    // for horizontal movement
    let count = 0;
    for (var i = 0; i <= 2 * radius; i++) {
        let writeln = '';

        // for vertical movement
        for (var j = 0; j <= 2 * radius; j++) {
            dist = Math.sqrt(
                (i - radius) * (i - radius) +
                (j - radius) * (j - radius)
            );

            // dist should be in the range (radius - 0.5)
            // and (radius + 0.5) to print stars(*)
            if (dist > radius - 0.5 && dist < radius + 0.5) {
                writeln += `|${count}|`;
                count++;
            }
            else {
                writeln += "  ";
            }
        }

        console.log(writeln);
    }
}

// Driver Code

var radius = 20;

printPattern(radius);