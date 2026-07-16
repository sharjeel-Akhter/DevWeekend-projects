import {createSlice} from '@reduxjs/toolkit'

const initialState = {count:0};

export const Counterslice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        ADD_ONE: (state, action) => { state.count++; },
        Subs_ONE: (state, action) => { state.count>0 ?state.count--:state.count=0 },
        Reset_All:(state, action) => {state.count=0}
    }
})

export const {ADD_ONE, Subs_ONE, Reset_All} = Counterslice.actions;
export default Counterslice.reducer;