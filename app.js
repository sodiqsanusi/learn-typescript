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
var form = document.querySelector('.new-item-form');
// Inputs
var type = document.querySelector('#type');
var toFrom = document.querySelector('#toFrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var doc;
    if (type.value == 'invoice') {
        doc = new Invoice(toFrom.value, amount.valueAsNumber, details.value);
    }
    else {
        doc = new Payment(toFrom.value, amount.valueAsNumber, details.value);
    }
    console.log(doc);
});
