import usersReducer from './contacts-slices.js';
import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
    reducer: {
        users: usersReducer

    }
})