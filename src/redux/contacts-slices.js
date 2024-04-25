import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const url = 'https://662425a204457d4aaf9bba3b.mockapi.io/contacts/contacts';

const initialState = {
    contacts: {
        items: [],
        isLoading: false,
        error: null
    },
        filter: ""
    }

    export const getContacts = createAsyncThunk('users/getContacts', () => { 
    return axios.get(url)
        .then(function(response){
        return response.data
        })
        .catch(function (error) {
        console.log(error);
    })
    })

    export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addContact: (state, action) => {
        state.contacts.items.push(action.payload)
        axios.post(url, {
        name: action.payload.name,
        number: action.payload.number,
        id: action.payload.id
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        
        },
        deleteContact: (state, action) => {
        const index = state.contacts.items.findIndex(user => user.id === action.payload)
        state.contacts.items.splice(index, 1)
        axios.delete(`https://662425a204457d4aaf9bba3b.mockapi.io/contacts/contacts${action.payload }`)
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        }); 
        },
        filterUser: (state, action) => {
        state.filter = action.payload
        
        }
    },
        extraReducers: (builder) => {
        builder
        .addCase(getContacts.pending, (state) => { 
        state.contacts.isLoading = true
        })
        .addCase(getContacts.rejected, (state) => {
            state.contacts.isLoading = false
        })
        .addCase(getContacts.fulfilled, (state, action) => { 
        console.log(action.payload)
        state.contacts.isLoading = false
        state.contacts.items = action.payload
        
        })
    }
})

export const { addContact, deleteContact, filterUser, fetchContacts } = usersSlice.actions
export default usersSlice.reducer