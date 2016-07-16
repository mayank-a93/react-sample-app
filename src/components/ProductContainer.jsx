var React = require('react');
var ProductTable = require('./ProductTable.jsx');
var SearchBox = require('./SearchBox.jsx');

var ProductContainer = React.createClass( {
	getInitialState: function() {
	    return {
	        filterText: '',
	        inStockOnly: false
    	};
  	},
  	handleUserInput: function(filterText, inStockOnly) {
	    this.setState({
	      filterText: filterText,
	      inStockOnly: inStockOnly
	    });
 	},
	render: function() {
		return(
			<div>
				<SearchBox 
					filterText={this.state.filterText}
          			inStockOnly={this.state.inStockOnly}
          			onUserInput={this.handleUserInput}
				/>
				<ProductTable 
					products={this.props.products}
					filterText={this.state.filterText}
          			inStockOnly={this.state.inStockOnly}
				/>
			</div>
		);
	}
});


module.exports = ProductContainer;