var fs = require('fs')
var arr, arrLength, glob

fs.readFile('flower.txt', (err, data)=> {
    if (err) return
    arr = data.toString().split('\n')
    arrLength = data.toString().split('\n').length
    

    //1. Count the number of rows.
    console.log('\n1- The number of rows is :')
    console.log(arrLength)


    //2. List the flowers that start with 'S'.
    var count = 0
    var startWithS =[]

    for(var i=0; i<arrLength; i++) {
        holdElement = arr[i]
        if (holdElement.charAt(0) == 'S') {
            firstWord = holdElement.split(" ", 1)
            startWithS [count] = []
            startWithS [count] = firstWord
            count++
        }
    }
    glob = startWithS.length
    console.log('\n2- A list of flowers that start with "S" :')
    console.log(startWithS)


    //3. Count the number of flowers that donot start with 'S'.
    console.log('\n3- The number of flowers that donot start with "S" :')
    console.log(arrLength-glob)


    //4. List the flowers that start with the first letter of your name, if your name starts with 'S' use the second letter.
    count = 0
    var startWithH =[]
    
    for(var i=0; i<arrLength; i++) {
        holdElement = arr[i]
        if (holdElement.charAt(0) == 'H') {
            firstWord = holdElement.split(" ", 1)
            startWithH [count] = []
            startWithH [count] = firstWord
            count++
        }
    }
    console.log('\n4- A list of flowers that start with the first letter of my name "H" :')
    console.log(startWithH)


    //5. List all the flowers with a name length of 5.
    count = 0
    var nameLength5 =[]

    for(var i = 0; i < arrLength; ++i) {
        holdElement = arr[i]
        if(holdElement.length == 5) {
            nameLength5 [count] = []
            nameLength5 [count] = holdElement
            count++
        }
    }
    console.log('\n5- A list of flowers with a 5 letters name length :')
    console.log(nameLength5)
})
