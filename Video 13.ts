//* Public, Private & Readonly

/*
  In classes, there are some times you don't want some properties to be
  changed or accessed outside the class code block. And you may want it to be accessed
  for usage but not to be modified. Typescript lets you do this through "access modifiers"

  *- public: This is default for all properties. The property can be accessed and modified outside the class.
  *- private: The property can't be accessed or modified outside the class. It can be modified inside the class though.
  *- readonly: The property can only be read but can't be modified both inside and outside the class.
*/

class testClass {
  client:string; //* The access modifier on this property is at default, public.
  private amountPaid:number; //* The "amountPaid" property has been made private, i.e, available in the class only.
  readonly details: string; //* The "readonly" modifier will raise an error when this property is being changed, both in and outside the class.

  constructor(user:string, amount:number, details:string){
    this.client = user;
    this.amountPaid = amount;
    this.details = details
  }

  format():string {
    return `${this.client} paid $${this.amountPaid} as dues for ${this.details}`
  }
}

let jelilat = new testClass('Jelilat', 10, 'binding her books')

console.log(jelilat.format()) // This will work as there are no modifiers on the format property, making it public.
console.log(jelilat.client) // This will also work as the client property is public
console.log(jelilat.amount) //! This will throw an error as the amount property has been made private for the class only.
console.log(jelilat.details) // This will work because the details property can be read "readonly" but not modified.

jelilat.details = 'Cruiseee' //! This will throw an error because you can't modify a "readonly" property.