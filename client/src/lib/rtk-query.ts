
import { isRejectedWithValue, isFulfilled } from '@reduxjs/toolkit'
import type { Middleware } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';


interface ErrorPayload {
    status: number;
    data: {
        message: string;
    };
}

interface SuccessPayload {
    message: string;
}

export const rtkQueryErrorLogger: Middleware =
    () => (next) => (action) => {
        if (isRejectedWithValue(action)) {
            const payload = action.payload as ErrorPayload;
            if (payload && payload.status) {
                if (payload.status === 401) {
                    localStorage.clear();
                }
                toast.error(payload.data.message);
            }
        }
        return next(action);
    }

export const rtkQuerySuccessLogger: Middleware =
    () => (next) => (action) => {
        if (isFulfilled(action)) {
            const payload = action.payload as SuccessPayload;
            if (payload.message) {
                toast.success(payload.message);
            }
        }
        return next(action);
    };