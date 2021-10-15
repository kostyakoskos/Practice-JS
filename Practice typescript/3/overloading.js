function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && b) {
        return { x: a, y: b };
    }
    return { x: a, y: undefined, "default": a };
}
console.log('Empty', position());
console.log('Empty', position(1, 2));
