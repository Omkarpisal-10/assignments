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
  // Create an object to store the total spending for each category
  const categoryTotalMap = {};

  // Iterate through each transaction using a traditional for loop
  for (let i = 0; i < transactions.length; i++) {
    // Destructure the transaction object to get category and price
    const { category, price } = transactions[i];

    // If the category is not in the map, add it with the current transaction's price
    // If the category is already in the map, add the current transaction's price to the total
    categoryTotalMap[category] = (categoryTotalMap[category] || 0) + price;
  }

  // Create an array to store the result
  const result = [];

  // Iterate through the keys of categoryTotalMap using a for...of loop
  for (const category of Object.keys(categoryTotalMap)) {
    // Push an object with category and totalSpent properties into the result array
    result.push({ category, totalSpent: categoryTotalMap[category] });
  }

  // Return the final result array
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

// Call the function with the example transactions
const result = calculateTotalSpentByCategory(transactions);

// Log the result to the console
console.log(result);



module.exports = calculateTotalSpentByCategory;
