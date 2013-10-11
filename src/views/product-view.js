(function () {

  window.ProductView = Backbone.View.extend({
  	function() {
  		$(this.el).html( this.model.get('name'));
  	}
  });

})();
