(function(){

  var products = new Inventory();

	var productView = new ProductView({
		collection: products,
		el: '#store'
	});

	products.add([
			{ name: 'scarf', price: 220 },
			{ name: 'gloves', price: 80 },
			{ name: 'shoes', price: 130 }
		])

	var storeView = new StoreView({
		collection: products,
		el: '#set'
	})

	storeView.render();
})();


