interface MyPosition {
    x: number | undefined;
    y: number | undefined;
}

interface MyPositionDefault extends MyPosition {
    default: string;
}

function position(): MyPosition;
function position(a: number): MyPosition;
function position(a: number, b: number): MyPosition;

function position(a?: number, b?: number) {
    if (!a && !b) {
        return { x: undefined, y: undefined }
    }
    if (a && b) {
        return { x: a, y: b }
    }
    return { x: a, y: undefined, default: a }
}

console.log('Empty', position());
console.log('Empty', position(1,2));