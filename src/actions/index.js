//Action

export const increment=()=>{
	return{
		type:'INCREMENT'
	}
}

export const decrement=()=>{
	return{
		type:'DECREMENT'
	}
}

export const addCount=(value)=>{
	return{
		type:'ADD_COUNT_BY',
		payload:value
	}
}

export const subCount=(value)=>{
	return{
		type:'SUB_COUNT_BY',
		payload:value
	}
}

export const resetCount=()=>{
	return{
	type:'RESET_COUNT'
}
}


