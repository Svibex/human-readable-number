module.exports = function toReadable (number) {
    const strings = {
        a1: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        a10: ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        a20: ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        a100: 'hundred'
    };

    const arr = `${number}`.split('').map(el => +el);
    switch (arr.length) {
        case 1: {
            return strings.a1[number];
        }
        case 2: {
            if (number < 20) {
                return strings.a10[arr[1]];
            } else {
                return arr[1] === 0 ? strings.a20[arr[0] - 2] : `${strings.a20[arr[0] - 2]} ${strings.a1[arr[1]]}`;
            }
        }
        case 3: {
            if (!arr[1] && !arr[2]) {
                return `${strings.a1[arr[0]]} ${strings.a100}`;
            } else if (!arr[1]) {
                return `${strings.a1[arr[0]]} ${strings.a100} ${strings.a1[arr[2]]}`;
            } else if (!arr[2]) {
                return arr[1] === 1
                    ? `${strings.a1[arr[0]]} ${strings.a100} ${strings.a10[arr[1] - 1]}`
                    : `${strings.a1[arr[0]]} ${strings.a100} ${strings.a20[arr[1] - 2]}`;
            } else {
                return arr[1] === 1
                    ? `${strings.a1[arr[0]]} ${strings.a100} ${strings.a10[arr[2]]}`
                    : `${strings.a1[arr[0]]} ${strings.a100} ${strings.a20[arr[1] - 2]} ${strings.a1[arr[2]]}`;
            }
        }
        default: {
            return null;
        }
    }
};
