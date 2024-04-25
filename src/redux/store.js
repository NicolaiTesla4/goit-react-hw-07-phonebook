import usersReducer from './contacts-slices';
import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
    reducer: {
        users: usersReducer

    }
})