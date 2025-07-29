// console.log("hello world!")

function trav_fizzbuzz() {

    for (let i = 1; i < 101; i++) {
        if ( ( i % 15) == 0) {
            console.log("FizzBuzz")
        }
        else if ( (i % 5) == 0) {
            console.log("Buzz")
        }
        else if ( (i % 3) == 0) {
            console.log("Fizz")
        }
        else {
            console.log(i)
        }

    }
}

function stringmanip_fizzbuzz() {

    for (let i = 1; i< 101; i++) {
        let str = ''
        if (i % 3 == 0) {
            str += 'fizz'
        }
        if (i % 5 == 0) {
            str += 'buzz'
        }
        console.log(str ? str : i)
    }
}

stringmanip_fizzbuzz()