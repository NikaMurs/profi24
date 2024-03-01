import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin: true,
    surname: 'Вахренев',
    name: 'Аким',
    secondName: 'Андреевич',
    money: 10000,
    bonus: 500,
    bonusStatus: 'bronze',
    orders: [
        {
            statusText: '',
            statusPersent: 0,
            id: 0,
            LinkedwithID: [0],
            description: '',
            price: '',
            dateStart: 0,
            dateFinished: 0,
            weight: 0,
            trackNumber: 0,
            comment: '',
        }
    ]

}

export const userReducer = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, action) => {

        },
        unsetUser: (state, action) => {

        }
    }
})