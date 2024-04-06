import { configureStore } from '@reduxjs/toolkit';

import classesApi from './features/classes/api';
import { rtkQueryErrorLogger, rtkQuerySuccessLogger } from './lib/rtk-query';

export const store = configureStore({
    reducer: {
        [classesApi.reducerPath]: classesApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(classesApi.middleware).concat(rtkQueryErrorLogger, rtkQuerySuccessLogger),
});