var React = require('react');
var ProductTable = require('./ProductTable.jsx');
var SearchBox = require('./SearchBox.jsx');

var ProductContainer = React.createClass({
	render: function() {
		return(
			<div>
				<SearchBox />
				<ProductTable products={this.props.products} />
			</div>
		);
	}
});


module.exports = ProductContainer;