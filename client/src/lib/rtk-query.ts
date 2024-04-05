
import { isRejectedWithValue } from '@reduxjs/toolkit'
import type { Middleware } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

interface Payload {
    status: number;
    data: {
        message: string;
    };
}

export const rtkQueryErrorLogger: Middleware =
    () => (next) => (action) => {
        if (isRejectedWithValue(action)) {
            console.log(action);
            const payload = action.payload as Payload;
            if (payload && payload.status) {
                if (payload.status === 401) {
                    localStorage.clear();
                }
                toast.error(payload.data.message);
            }
        }
        return next(action);
    }