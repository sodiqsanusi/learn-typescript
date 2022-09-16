//* Function Types (signatures)

/*
  This is similar to creating a custom type. Creating a function signature is
  specifying the parameter types of the function and the data type of the value
  the function should return.
*/

let normFunction: (a: number, b:number, c?: boolean) => number;

/*
  This function signature above defines how the "normFunction" function should be structured.
  It defines how many parameters it should have, the data types of each parameter and the data
  type of the return value.
*/

//* If a function will not return anything, the data type will be "void"

normFunction = (num1, num2) => {
  return num1 * num2
}

normFunction(21, 12);
normFunction('12', 1); //! This will give an error due to the fact that we have specified the parameter's type from the function signature.
