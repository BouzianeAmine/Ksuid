"use strict";
exports.__esModule = true;
var invoice_number_1 = require("invoice-number");
var mksuid_1 = require("mksuid");
var KSUID = require('ksuid');
var invoice = require('invoice-number');
var value = 'contract-' + mksuid_1["default"](new Date(Date.now())); // faut se base sur la dernier valeur insérer
var newLocal = invoice_number_1.InvoiceNumber.next(value);
console.log(newLocal);
// console.log(parse(newLocal.split('contract-').pop()));
console.log(invoice_number_1.InvoiceNumber.next(newLocal));
var newLocal_1 = KSUID.randomSync(new Date(Date.now()));
console.log(newLocal_1.string);
console.log(invoice_number_1.InvoiceNumber.next(newLocal_1.string));
// console.log(KSUID.randomSync(new Date(Date.now())))
