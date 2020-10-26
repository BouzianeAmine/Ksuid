import { InvoiceNumber } from 'invoice-number';
import mksuid,{parse} from 'mksuid';
const KSUID = require('ksuid')

const invoice = require( 'invoice-number');
const value = 'contract-'+mksuid(new Date(Date.now())); // faut se base sur la dernier valeur insérer
const newLocal = InvoiceNumber.next(value);
console.log(newLocal);
// console.log(parse(newLocal.split('contract-').pop()));
console.log(InvoiceNumber.next(newLocal));
const newLocal_1 = KSUID.randomSync(new Date(Date.now()));
console.log(newLocal_1.string)
console.log(InvoiceNumber.next(newLocal_1.string));
// console.log(KSUID.randomSync(new Date(Date.now())))