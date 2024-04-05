import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import { API_URL } from '../../../config';

const classesApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    tagTypes: ['Class'],
    endpoints: (builder) => ({
        getClasses: builder.query({
            query: () => '/class',
            providesTags: ['Class']
        }),
        createClass: builder.mutation({
            async queryFn(text) {
                return await axios.post(
                    `${API_URL}/class`,
                    {
                        text
                    }
                );
            },
            invalidatesTags: ['Class']
        }),
        updateClass: builder.mutation({
            async queryFn({ id, text, completed }) {
                return await axios.put(
                    `${API_URL}/class/${id}`,
                    {
                        text,
                        completed
                    }
                );
            },
            invalidatesTags: (result, error, arg) => [{ type: 'Class', id: arg.id }]
        }),
        deleteClass: builder.mutation({
            async queryFn(id) {
                return await axios.delete(
                    `${API_URL}/class/${id}`
                );
            },
            invalidatesTags: (result, error, arg) => [{ type: 'Class', id: arg.id }]
        }),
    }),
});

export const { useGetClassesQuery, useCreateClassMutation, useUpdateClassMutation, useDeleteClassMutation } = classesApi;
export default classesApi