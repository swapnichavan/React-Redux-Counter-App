import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import CounterReducer from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';


const store=createStore(CounterReducer);

ReactDOM.render(<Provider store={store}>
				<Counter />
				</Provider>,document.querySelector("#root"));