const ItemInventory = {
	burger: {
		name: 'burger',
		uri: require('../test_images/burger.png'),
		cost: 3,
		category: 'food',
		buyText: 'Would you like to buy a burger?',
		inventoryText: 'Would you like to feed this burger to your pet?',
		benefits: {
			Hunger: 0.3
		},
		pointValue: 3
	},
	shoes: {
		name: 'shoes',
		uri: require('../test_images/shoes.png'),
		cost: 10,
		category: 'clothes',
		buyText: 'Would you like to buy shoes?',
		inventoryText: 'Would you like your pet to wear these shoes?',
		wearUri: require('../images/red_shoes.png'),
		benefits: {
			Health: 0.2
		}
	},
	pizza: {
		name: 'pizza',
		uri: require('../test_images/pizza.png'),
		cost: 3,
		category: 'food',
		buyText: 'Would you like to buy pizza?',
		inventoryText: 'Would you like to feed this pizza to your pet?',
		benefits: {
			Hunger: 0.3
		}
	},
	carrot: {
		name: 'carrot',
		uri: require('../test_images/carrot.png'),
		cost: 2,
		category: 'food',
		buyText: 'Would you like to buy a carrot?',
		inventoryText: 'Would you like to feed this carrot to your pet?',
		benefits: {
			Hunger: 0.2
		}
	},
	ball: {
		name: 'ball',
		uri: require('../test_images/ball.png'),
		cost: 8,
		category: 'toys',
		buyText: 'Would you like to buy a ball?',
		inventoryText: 'Would you like your pet to play with this ball?',
		benefits: {
			Fun: 0.3
		}
	},
	shirt: {
		name: 'shirt',
		uri: require('../test_images/shirt.png'),
		cost: 9,
		category: 'clothes',
		buyText: 'Would you like to buy a shirt?',
		inventoryText: 'Would you like your pet to wear this shirt?',
		wearUri: require('../images/white_shirt.png'),
		benefits: {
			Health: 0.3
		}
	},
	water: {
		name: 'water',
		uri: require('../test_images/water.png'),
		cost: 2,
		category: 'food',
		buyText: 'Would you like to buy water?',
		inventoryText: 'Would you like to give your pet a drink?',
		benefits: {
			Hunger: 0.2
		}
	},
	blue_shoes: {
		name: 'blue shoes',
		uri: require('../test_images/blue_shoes.png'),
		cost: 12,
		category: 'clothes',
		buyText: 'Would you like to buy blue shoes?',
		inventoryText: 'Would you like your pet to wear these blue shoes?',
		wearUri: require('../images/blue_shoes.png'),
		benefits: {
			Health: 0.2
		}
	},
	black_shirt: {
		name: 'black shirt',
		uri: require('../test_images/black_shirt.png'),
		cost: 10,
		category: 'clothes',
		buyText: 'Would you like to buy a black shirt?',
		inventoryText: 'Would you like your pet to wear this black shirt?',
		wearUri: require('../images/black_shirt.png'),
		benefits: {
			Health: 0.3
		}
	},
	blue_shirt: {
		name: 'blue shirt',
		uri: require('../test_images/blue_shirt.png'),
		cost: 10,
		category: 'clothes',
		buyText: 'Would you like to buy a blue shirt?',
		inventoryText: 'Would you like your pet to wear this blue shirt?',
		wearUri: require('../images/blue_shirt.png'),
		benefits: {
			Health: 0.3
		}
	},
	red_ball: {
		name: 'red ball',
		uri: require('../test_images/red_ball.png'),
		cost: 10,
		category: 'toys',
		buyText: 'Would you like to buy a red ball?',
		inventoryText: 'Would you like your pet to play with this red ball?',
		benefits: {
			Fun: 0.3
		}
	},
	black_ball: {
		name: 'black ball',
		uri: require('../test_images/black_ball.png'),
		cost: 10,
		category: 'toys',
		buyText: 'Would you like to buy a black ball?',
		inventoryText: 'Would you like your pet to play with this black ball?',
		benefits: {
			Fun: 0.3
		}
	},
	black_shoes: {
		name: 'black shoes',
		uri: require('../test_images/black_shoes.png'),
		cost: 12,
		category: 'clothes',
		buyText: 'Would you like to buy black shoes?',
		inventoryText: 'Would you like your pet to wear these black shoes?',
		wearUri: require('../images/black_shoes.png'),
		benefits: {
			Fun: 0.3
		}
	},
	shampoo: {
		name: 'shampoo',
		uri: require('../test_images/carrot.png'),
		cost: 4,
		category: 'grooming',
		buyText: 'Would you like to buy shampoo?',
		inventoryText: 'Would you like your pet to wash with shampoo?',
	},
	soap: {
		name: 'soap',
		uri: require('../test_images/carrot.png'),
		cost: 4,
		category: 'grooming',
		buyText: 'Would you like to buy soap?',
		inventoryText: 'Would you like your pet to wash with soap?',
	},
}

export { ItemInventory }
