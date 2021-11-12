# node-mumble
## A node package that creates a random unique characters string 

### INPUT as parameter -> Length of the required string

###   Example:

  To install
  
   `npm i node-mumble`

### Usage: 

  #### Returns Alphanumeric string

    const { mumble } = require('node-mumble')
    console.log(mumble(12)) 
    
    //returns vl6QLrr3xIBe (alphanumeric string)


  #### Returns string consisting of alphabets

    const { mumbleaplha } = require('node-mumble')
    console.log(mumblealpha(12))

    //returns rqfvYxJRWfoP (string consisting of alphabets)


  #### Returns string consisting of numbers

    const { mumblenum } = require('node-mumble')
    console.log(mumblenum(12))

    //returns 362128126198 (string consisting of numbers)


## Application
This uniquely genrated string can be used for database id, tokens, token-secret etc.