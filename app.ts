class Invoice {
  client: string;
  private amount: number;
  readonly details: string

  constructor(a:string, b:number, c:string){
    this.client = a;
    this.amount = b;
    this.details = c
  }

  format(): string{
    return `${this.client} owes $${this.amount} for ${this.details}`
  }
}

class Payment {
  recipient: string;
  private amount: number;
  readonly details: string

  constructor(a:string, b:number, c:string){
    this.recipient = a;
    this.amount = b;
    this.details = c
  }

  format(): string{
    return `${this.recipient} is owed $${this.amount} for ${this.details}`
  }
}

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// Inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()
  let doc;
  if(type.value == 'invoice'){
    doc = new Invoice(toFrom.value, amount.valueAsNumber, details.value)
  }else{
    doc = new Payment(toFrom.value, amount.valueAsNumber, details.value)
  }
  console.log(doc)
})