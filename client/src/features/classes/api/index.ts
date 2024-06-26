import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../../config';

const classesApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        prepareHeaders: (headers, { getState }) => {
            //const token = getState().auth.token;
            const token = "my token";
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['Class'],
    endpoints: (builder) => ({
        getClasses: builder.query({
            query: () => '/class',
            providesTags: ['Class']
        }),
        createClass: builder.mutation({
            query: (data) => ({
                url: `${API_URL}/class`,
                method: 'POST',
                body: { data },
            }),
            invalidatesTags: (result, error) => error ? [] : [{ type: 'Class' }]
        }),
        updateClass: builder.mutation({
            query: ({ id, className }) => ({
                url: `/class/${id}`,
                method: 'PUT',
                body: { className },
            }),
            invalidatesTags: (result, error) => error ? [] : [{ type: 'Class' }]
        }),
        deleteClass: builder.mutation({
            query: (id) => ({
                url: `/class/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error) => error ? [] : [{ type: 'Class' }]
        }),
    }),
});

export const { useGetClassesQuery, useCreateClassMutation, useUpdateClassMutation, useDeleteClassMutation } = classesApi;
export default classesApi