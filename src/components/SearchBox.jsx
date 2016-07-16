var React = require('react');

var SearchBox = React.createClass({
	handleChange: function() {
    	this.props.onUserInput(
      	this.refs.filterTextInput.value,
      	this.refs.inStockOnlyInput.checked
    	);
  	},
	render: function() {
		return(
			<form>
				<input 
					type="text" 
					placeholder="Search..." 
					value={this.props.filterText}
					ref="filterTextInput"
          			onChange={this.handleChange} 
				/>
				<br></br>
				<label>
					<input 
						type="checkbox"
            			checked={this.props.inStockOnly}
            			ref="inStockOnlyInput"
        				onChange={this.handleChange}
					/>
					Only show products in stock
				</label>
			</form>
		);
	}
});


module.exports = SearchBox;