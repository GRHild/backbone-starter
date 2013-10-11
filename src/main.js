(function(){

  var products = new Inventory();

  var storeView = new StoreView({
		collection: products,
		el: '#store'
	})

	products.add([
			{ name: 'scarf', price: 40 },
			{ name: 'gloves', price: 40 },
			{ name: 'gym-shoes', price: 130 },
			{ name: 'cufflinks', price: 45 },
			{ name: 'wool tie', price: 12 },
			{ name: 'silk socks', price: 45 },			
			{ name: 'trousers', price: 89 },
			{ name: 'glasses', price: 230 },
			{ name: 'googles', price: 99 },
			{ name: 'sun-glasses', price: 260 },
			{ name: 'dress-shoes', price: 130 },
			{ name: 'ascot', price: 45 },
			{ name: 'pocket-square', price: 15 },
			{ name: 'manly-bracelet', price: 100 },
			{ name: 'pocket-watch', price: 900 },
			{ name: 'promenading-cane', price: 30 },			
		])

	

	storeView.render();
})();