import { Provider } from 'react-redux'
import { render } from "@testing-library/react";
import shiftReducer from "../src/app/_lib/redux/shiftsSlice";
import { configureStore } from '@reduxjs/toolkit';

const renderWithStore = (ui: React.ReactElement, { preloadedState = {}, store = configureStore({ 
    reducer: {
        shifts: shiftReducer
    }, preloadedState }), ...renderOptions } = {}) => {
 
    return render(
        <Provider store={store}>
            {ui}
        </Provider>,
        renderOptions
     )
};

export default renderWithStore;