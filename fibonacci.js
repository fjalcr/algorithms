const iterationN = 10;
let n0 = 0, n1 = 1, nextNumber;
let res = [];

const fibonacci = () => {
    for (let i = 1; i <= iterationN; i++) {
        res.push(n0)
        nextNumber = n0 + n1
        n0 = n1
        n1 = nextNumber;
    }
    return res;
}

console.log(fibonacci());

