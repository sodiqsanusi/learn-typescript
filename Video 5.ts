// * Explicit & Union Types

// Explicit Types

/**
  This means the predefinition of the datatypes you want a variable to have
 */

let lilac: string;
lilac = 90; //! Lilac is supposed to be a string
lilac = 'Rexxie';

let violet: number[];
violet = [829, 92]
violet.push('123') //! Violet is supposed to have only numbers as elements

// Union Types

/* 
  This is the combination of different data types that you want a variable to contain
*/

let years: string|number;

years = '123';
years = 123;
years = true; //! This will give an error as the 'years' variable is expecting either a string or a number

let dagrin: (string|boolean)[];
dagrin = [false, 'jjc']
dagrin[0] = 99; //! Was expecting either a string or a boolean

//  Objects

/* 
  You can specify the exact type of an object
*/

let pidoxy: {
  name: string;
  age: number;
  skills: string[];
  course: string
}

pidoxy = {
  name: 'Idoko Emmanuel',
  age: 19,
  skills: ['Frontend Development', 'AI/ML', 'Blockchain (Web)', 'UI Designing'],
  course: 'Computer Science'
}

// All properties and types must be correct for there to be zero errors