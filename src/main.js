(function(){

  var cufflinks = new Product({
  	name: "MadHatter Cufflinks",
  	price: 100
  });

	var productView = new ProductView({
		model: cufflinks,
		el: '#store'
	});

	productView.render();
})();


