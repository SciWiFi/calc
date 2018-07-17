function operate(op, x, y) {
    switch(op) {
        case "plus": return x + y;
            break;
        case "minus": return x - y;
            break;
        case "mult": return x * y;
            break;
        case "div": return x / y;
            break;
    }
}