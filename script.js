function displayPrimeNumbers(number) {
    var primeNumbers = [];
    for (var i = 2; i <= number; i++) {
        if (isPrime(i)) {
            primeNumbers.push(i);
        }
    }
    return primeNumbers;
}
function isPrime(number) {
    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(displayPrimeNumbers(2800));

