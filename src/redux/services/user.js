import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://abhishekexpress.vercel.app/api/v1/'
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getAlluser: builder.query({
            query: () => ({
                url: 'users',
                method: 'GET',
            }),
            providesTags: ['User'],
        }),
        addUser: builder.mutation({
            query: (user) => ({
                url: 'users',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['User'],
        }),



    }),
})

export const { useGetAlluserQuery } = userApi
export const { useAddUserMutation } = userApi

