interface hasFormatter {
  format(): string
}

class Invoice implements hasFormatter{
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

class Payment implements hasFormatter{
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

const formA = document.querySelector('.new-item-form') as HTMLFormElement;

// Inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;



// List Template

class ListTemplate {
  constructor(private container: HTMLUListElement){}

  render(item: hasFormatter, heading:string, pos: 'start' | 'end'){
    const li = document.createElement('li');

    const h4 = document.createElement('h4');
    h4.innerText = heading;
    li.append(h4);

    const p = document.createElement('p');
    p.innerText = item.format();
    li.append(p);

    if(pos == 'start'){
      this.container.prepend(li)
    }else{
      this.container.append(li)
    }
  }
}

const ul = document.querySelector('ul')!;
let list = new ListTemplate(ul)

formA.addEventListener('submit', (e: Event) => {
  e.preventDefault()
  let doc;
  if(type.value == 'invoice'){
    doc = new Invoice(toFrom.value, amount.valueAsNumber, details.value)
  }else{
    doc = new Payment(toFrom.value, amount.valueAsNumber, details.value)
  }
  
  list.render(doc, type.value, 'start')
})