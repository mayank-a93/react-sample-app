var React = require('react');

var TableHeading = React.createClass({
	render: function() {
		var style = {
			textAlign: 'left'
		}
		return(
			<tr><th colSpan='2' style={style} >{this.props.category}</th></tr>
		);
	}
});


module.exports = TableHeading;