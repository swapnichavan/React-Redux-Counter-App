import React from 'react';
import {connect} from 'react-redux';
import {increment,decrement,addCount,subCount,resetCount} from '../actions';

class Counter extends React.Component{

	render(){
		console.log(this.props.count);
		return(
			<div className="jumbotron">
			<h2 className="d-flex justify-content-center text-center">Counter:{this.props.count}</h2>
			<br />
			<div className="d-flex justify-content-around">
			<button
			className="btn btn-primary"
			onClick={this.props.increment}>Increment</button>
			<button
			className="btn btn-primary"
			onClick={this.props.decrement}>Decrement</button>
			<button
			className="btn btn-primary"
			onClick={()=>this.props.addCount(5)}>Add CountBy 5</button>
			<button
			className="btn btn-primary"
			onClick={()=>this.props.subCount(5)}>Sub CountBy 5</button>
			<button className="btn btn-primary"
			onClick={this.props.resetCount}>Reset</button>
			</div>
			</div>
			);
	}
}

const mapStateToProps=(state)=>{
	console.log(state);
	return{
		count:state.count
	}
}

export default connect(mapStateToProps,
					{increment,decrement,addCount,subCount,resetCount})(Counter);