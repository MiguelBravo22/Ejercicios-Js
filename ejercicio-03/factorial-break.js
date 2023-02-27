let result = 1;
let i = 1;
while (true) {
    result *= i;
    i++;
    if (i > 10) {
    break;
    }
}

console.log(result);