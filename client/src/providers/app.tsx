import React from 'react'
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';

type AppProviderProps = {
    children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {

    return (

        <Provider store={store}>
            <Toaster />
            <Router>{children}</Router>
        </Provider>
    )
}