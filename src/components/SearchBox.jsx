var React = require('react');

var SearchBox = React.createClass({
	render: function() {
		return(
			<form>
				<input type="text" placeholder="Search..." />
				<br></br>
				<label><input type="checkbox" value="Only show products in stock" />Only show products in stock</label>
			</form>
		);
	}
});


module.exports = SearchBox;