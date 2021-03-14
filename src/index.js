module.exports = function toReadable (number) {
    const zero = ['zero'];
    const numbersFrom0To19 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundred = ['hundred'];
    if (number === 0) {
        return zero;
    } else if(number<20) {
        return numbersFrom0To19[number];
    } else if (number<100) {
        return tensToString(number);
    } else if (number>99) {
        return numbersFrom0To19[Math.floor(number/100)] + ' ' + hundred + (number%100 ? ' ' + tensToString(number%100) : '');
    }
    function tensToString (num) {
        return (num<20)
            ? numbersFrom0To19[num]
            : tens[Math.floor(num/10)] + (num%10 ?  ${numbersFrom0To19[num%10]} : '');
    }
};
