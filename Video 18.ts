//* Generics

/*
  Generics are useful in places where the type of a variable is dependent on the value
  given to it after assignment.
*/

const addUID = <T>(obj: T) => {
  let uid = Math.floor(Math.random() * 100)
  return {...obj, uid}
}

/*
 By adding the "<T>" in front of the arguments bracket, I initialized a generic. You can actually
 use any letter apart from "T", but the letter you use will be the one to note down when you want
 to use the generic.

 I used the generic here as the type of the argument received. What this means is that, when we pass
 in the "obj" argument to "addUID", it carries the the type of the passed argument and assigns it to the
 obj variable.
*/

const duck = <Z extends object>(confused: Z) => {
  console.log(typeof confused)
}

// By using the "extends" keyword on the generic, it helps to make the generic more strict.

interface Resource<T>{
  uid:number,
  resourceName: string,
  data: T
}

const docThree: Resource<string[]> = {
  uid: 2,
  resourceName: 'Shopping List',
  data: ['Lol', '3']
}

/*
  In interfaces, you can define how your generic should be just like the example above
*/