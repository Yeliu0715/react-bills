// hold the bill list related state and actions
import {createSlice} from '@reduxjs/toolkit';
import axios, { Axios } from 'axios';

const billStore = createSlice({
    name: 'billStore',
    initialState: {
        billList: []
    },
    reducers: {
        setBillList(state, action) {
            state.billList = action.payload;
        }
    }
});

const {setBillList} = billStore.actions;

// async action
const getBillList = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:8888/ka');
        dispatch(setBillList(res.data));
    }
}

export { getBillList };

const reducer = billStore.reducer;

export default reducer;