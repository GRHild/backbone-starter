(function() {

	window.StoreView = Backbone.View.extend({
		initialize: function(options){
			this.listenTo(this.collection, 'add', this.onProductAdd)
		},
		onProductAdd: function(newProduct){
			var productView = new ProductView({	model: newProduct });

			productView.render();
			$(this.el).append( productView.el );
		},
		render: function() {
			$(this.el).empty();
			$(this.el).addClass("storeView");
			this.collection.each(this.onProductAdd, this);
		}
	});
})();