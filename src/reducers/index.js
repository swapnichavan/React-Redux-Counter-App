//Reducers

const initialState={count:0};

const CounterReducer=(state=initialState,action)=>{
	switch(action.type){
		case 'INCREMENT':
		return{
			...state,
			count:state.count+1
		}
		case 'DECREMENT':
		return{
			...state,
			count:state.count-1
		}
		case 'ADD_COUNT_BY':
		return{
			...state,
			count:state.count+action.payload
		}
		case 'SUB_COUNT_BY':
		return{
			...state,
			count:state.count-action.payload
		}
		case 'RESET_COUNT':
		return{
			count:0
		}
		default:
		return state;
	}

}

export default CounterReducer;