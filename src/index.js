import React from 'react';
import ReactDOM from 'react-dom';
import {compose, applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import thunk from 'redux-thunk';
import {ThemeProvider} from '@mui/styles';


import App from './App';
import reducer from "./reducers";
import theme from './config/theme';

const store = createStore(reducer, compose(applyMiddleware(thunk)));

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <App/>        
        </ThemeProvider>
    </BrowserRouter>
</Provider>, document.getElementById("root"));