/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/


function calculateTotalSpentByCategory(transactions) {
  // Create an object to store total spending for each category
  const categoryTotalMap = {};

  // Iterate through each transaction
  transactions.forEach((transaction) => {
    const { category, price } = transaction;

    // If the category is not in the map, add it with the current transaction's price
    if (!categoryTotalMap[category]) {
      categoryTotalMap[category] = price;
    } else {
      // If the category is already in the map, add the current transaction's price to the total
      categoryTotalMap[category] += price;
    }
  });

  // Convert the object into an array of objects with category and totalSpent properties
  const result = Object.keys(categoryTotalMap).map((category) => ({
    category,
    totalSpent: categoryTotalMap[category],
  }));

  return result;
}

// Example usage:
const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656080400000,
    price: 20,
    category: 'Clothing',
    itemName: 'T-Shirt',
  },
  {
    id: 3,
    timestamp: 1656084000000,
    price: 15,
    category: 'Food',
    itemName: 'Burger',
  },
];

const result = calculateTotalSpentByCategory(transactions);
console.log(result);


module.exports = calculateTotalSpentByCategory;
