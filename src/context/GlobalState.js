import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
import axios from 'axios';

//Initial state
const initialState = {
    deals: [],
    error: null,
}

//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    //Actions
    async function getDeals() {
        try {
            const res = await axios.get(
                '/api/deals/');
            dispatch({
                type: 'GET_DEALS',
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: 'DEAL_FETCH_ERROR',
                payload: err.response.data.error
            });
        }
    }

    async function deleteDeal(id) {
        try {

            await axios.post(`/api/deals/delete/${id}`)
                .then(res => console.log(res.data)
                );
            dispatch({
                type: 'DELETE_DEAL',
                payload: id
            });
        } catch (err) {
            dispatch({
                type: 'DEAL_FETCH_ERROR',
                payload: err.response.data.error
            });
        }
    }

    function addDeal(newDeal) {
        try {

            axios.post('/api/deals/add', newDeal)
                .then(res => console.log(res.data)
                );
            dispatch({
                type: 'ADD_DEAL',
                payload: newDeal
            });
        } catch (err) {
            dispatch({
                type: 'DEAL_FETCH_ERROR',
                payload: err.response.data.error
            });
        }
    }

    function editDeal(id, editedDeal) {
        try {



            axios.post(`/api/deals/update/${id}`, editedDeal)
                .then(res => console.log(res.data)
                );


            dispatch({
                type: 'EDIT_DEAL',
                payload: { id: id, editedDeal: editedDeal }
            });
        } catch (err) {
            dispatch({
                type: 'DEAL_FETCH_ERROR',
                payload: err.response.data.error
            });
        }
    }


    return (<GlobalContext.Provider value=
        {{
            deals: state.deals,
            error: state.error,
            getDeals,
            deleteDeal,
            addDeal,
            editDeal
        }}>
        {children}
    </GlobalContext.Provider>)
}