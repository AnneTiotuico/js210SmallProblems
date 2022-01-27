"use strict";

/*
Write a function that takes two arguments, an inventory item ID and a list
of transactions, and returns an array containing only the transactions for
the specified inventory item.
*/

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(itemID, transactions) {
  return transactions.filter(transaction => transaction.id === itemID);
}

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]


/*
LS Solution:
function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(({id}) => id === inventoryItem);
}

The shape of this problem is that of filtering. Given a list of inventory
transactions, the solution selects only those that have a particular inventory
item ID. The solution gets the relevant transactions by comparing inventory.id
of each transaction to the value of the inventoryItem parameter. It keeps the
transaction only if these two values are equal.
*/