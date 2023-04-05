const OPERATOR_TYPE = prompt(`Enter + if you want to add. 
Enter - if you want to subctract. 
Enter * if you want to multiply. 
Enter / if you want to divide`)

const NUM_ONE = Number(prompt("Enter your first number."))
const NUM_TWO = Number(prompt("Enter your second number."))
let result;
 
  
  if(OPERATOR_TYPE === "+") {
    result = NUM_ONE + NUM_TWO
  } else if(OPERATOR_TYPE === "-") {
    result = NUM_ONE - NUM_TWO
  } else if(OPERATOR_TYPE === "*") {
    result = NUM_ONE * NUM_TWO
  } else if(OPERATOR_TYPE === "/") {
    result = NUM_ONE / NUM_TWO
  } else if(!OPERATOR_TYPE != "+" || OPERATOR_TYPE != "-" || OPERATOR_TYPE != "*" || OPERATOR_TYPE != "/") {
    console.log("Please use the correct operator type")
  } else {
    console.log("an error has occured")
  }

  console.log(`${NUM_ONE} ${OPERATOR_TYPE} ${NUM_TWO} equals ${result}`)