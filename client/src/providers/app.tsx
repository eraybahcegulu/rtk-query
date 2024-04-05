import React from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';

type AppProviderProps = {
    children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {

    return (
        <NextUIProvider>
            <Toaster />
            <Provider store={store}>
                <Router>{children}</Router>
            </Provider>
        </NextUIProvider>
    )
}