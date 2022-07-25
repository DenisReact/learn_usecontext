import React from 'react'

interface IinitialState {
    login: boolean
}
export const initialState: IinitialState = {login: false};

const Store = React.createContext<any>({});

export default Store;