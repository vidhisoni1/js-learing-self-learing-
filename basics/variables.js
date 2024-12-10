// there are three key words in javacript which are const let and var 
// const mean we cant change the value in it 
// let and var are same in use we can change the value in  it 
// var is inbluid if we dont delclare anything then js considered it as var 
// use console.log to check them 

const accountId = "vidhisoni"
let accontName = "vidhi@gmail.com"
var acountPassword = "12345"
accountCity = "surat"



// here if we change the const value it wont change 
// accountId = "sonividhi"    // not allowed 
// console.log('accountId')
// if we chage the let value it will change 
accontName = "sashwat@gmail.com"
accountPassword = "1211"

// console.log('accountName')
// let use anoyher method of console.log which is console.table 
console.table([accountId, accountName , accountPassword , accountCity])
// prefer not to use var because of functinal scope and block scope 
