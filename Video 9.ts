// * Type Aliases

/*
  This is the creation of your own default types that can be used in place of the custom types
*/

let unAliased: string|number|boolean = true;
unAliased = 'Hiii';
unAliased = 901;

type stringNumBool = string|number|boolean;
let aliased:stringNumBool = false;
aliased = 'Lol';
aliased = 419;

// The creation of custom types greatly helps also in the creation of an object's type

type defaultObj = {
  name: string,
  age: number,
  isTeen?: boolean, //* The '?' before the colon makes the property optional
  school: string
}

let Ridwan: defaultObj = {
  name: 'Adeyemo Ridwan',
  age: 19,
  school: 'University of Lagos'
}