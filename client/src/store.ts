import { configureStore } from '@reduxjs/toolkit';

import classesApi from './features/classes/api';

export const store = configureStore({
    reducer: {
        [classesApi.reducerPath]: classesApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(classesApi.middleware),
});