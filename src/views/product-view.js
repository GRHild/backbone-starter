(function () {
	// var productTemplateHtml = $('#templates .product').html();
	// var productTemplate = _.template(productTemplateHtml);

	var productTemplate = _.getTemplate('product');


  window.ProductView = Backbone.View.extend({
  	render: function() {
  		var newHtml = productTemplate( this.model.toJSON() );
  		$(this.el).html(newHtml);

  		// $(this.el).html( this.model.get('name'));
  	}
  });

})();
