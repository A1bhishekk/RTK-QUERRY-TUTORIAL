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
                body: user,
                // headers: {
                //     'Content-Type': 'application/json; charset=UTF-8',
                // }
            }),
            invalidatesTags: ['User'],
        }),

        deleteUser: builder.mutation({
            query: (id) => ({
                url: `users/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['User'],

        }),

        updateUser: builder.mutation({
            query: ({_id,...user}) => ({
                url: `users/${_id}`,
                method: 'PUT',
                body: user,
                // headers: {
                //     'Content-Type': 'application/json; charset=UTF-8',
                // }
            }),
            invalidatesTags: ['User'],
        }),

    }),
})

export const { useGetAlluserQuery } = userApi
export const { useAddUserMutation } = userApi
export const { useDeleteUserMutation } = userApi

export const { useUpdateUserMutation } = userApi

