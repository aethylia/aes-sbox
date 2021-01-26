function sbox(p){
    let t = new Uint32Array(256);

    for (let i = 0, x = 1; i < 256; i ++) {
        t[i] = x;
        x ^= (x << 1) ^ ((x >>> 7) * p);
    }

    let box = new Uint32Array(256);
    box[0] = 0x63;

    for (let i = 0; i < 255; i ++) {
        let x = t[255 - i];
        x |= x << 8;
        x ^= (x >> 4) ^ (x >> 5) ^ (x >> 6) ^ (x >> 7);
        box[t[i]] = (x ^ 0x63) & 0xFF;
    }

    return box;
}


function entropy(sbox) {
    const counts = new Uint8Array(256);
    
    for (const b of sbox) {
        ++counts[b]
    }

    let e = 0;
    for (const c of counts) {
        const p = c / sbox.length;

        if (p > 0) {
            e -= p * Math.log(p);
        }
    }

    return e;
}


function getSetBits(num) {
    const setBits = [];

    let bitNum = 0;

    while (num > 0) {
        if (num & 1) {
            setBits.push(bitNum);
        }

        num >>= 1;
        ++bitNum;
    }

    return setBits;
}

function setBitsToPolyString(setBits) {
    let s = "";

    setBits.forEach((v, i) => {
        if (v === 0) {
            s += '1';
        }
        else if (v === 1) {
            s += "x";
        }
        else {
            s += `x**${v}`
        }

        if (i < setBits.length - 1) {
            s += " + ";
        }
    });

    return s;
}

//found experimentally by graphing entropy
const threshold = 5.0; 

for (let i = 0; i < 2**9; ++i) {
    const s = sbox(i);
    const e = entropy(s);

    if (e > 5.0) {
        const bits = getSetBits(i);
        const polyString = setBitsToPolyString(bits);

        console.log(polyString);
    }
}