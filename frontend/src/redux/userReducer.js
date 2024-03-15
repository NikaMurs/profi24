import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin: false,
    id: '',
    surname: '',
    name: '',
    secondName: '',
    money: 0.00,
    bonus: 0,
    bonusStatus: 'bronze',
}

const { reducer, actions } = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {
           state.isLogin = true;
           state.id = action.payload.id;
           state.surname = action.payload.surname;
           state.name = action.payload.name;
           state.secondName = action.payload.secondName;
           state.money = action.payload.money;
           state.bonus = action.payload.bonus;
           state.bonusStatus = action.payload.bonusStatus;

        },
        unsetUser: (state, action) => {
            Object.assign(state, initialState);
        }
    }
})

export { actions as userActions };
export { reducer as userReducer };
