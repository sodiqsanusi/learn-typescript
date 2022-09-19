var Invoice = /** @class */ (function () {
    function Invoice(a, b, c) {
        this.client = a;
        this.amount = b;
        this.details = c;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var Payment = /** @class */ (function () {
    function Payment(a, b, c) {
        this.recipient = a;
        this.amount = b;
        this.details = c;
    }
    Payment.prototype.format = function () {
        return this.recipient + " is owed $" + this.amount + " for " + this.details;
    };
    return Payment;
}());
var formA = document.querySelector('.new-item-form');
// Inputs
var type = document.querySelector('#type');
var toFrom = document.querySelector('#toFrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
// List Template
var ListTemplate = /** @class */ (function () {
    function ListTemplate(container) {
        this.container = container;
    }
    ListTemplate.prototype.render = function (item, heading, pos) {
        var li = document.createElement('li');
        var h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        var p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (pos == 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    };
    return ListTemplate;
}());
var ul = document.querySelector('ul');
var list = new ListTemplate(ul);
formA.addEventListener('submit', function (e) {
    e.preventDefault();
    var doc;
    if (type.value == 'invoice') {
        doc = new Invoice(toFrom.value, amount.valueAsNumber, details.value);
    }
    else {
        doc = new Payment(toFrom.value, amount.valueAsNumber, details.value);
    }
    list.render(doc, type.value, 'start');
});
