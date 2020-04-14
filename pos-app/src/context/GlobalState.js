import React, {createContext,useReducer} from 'react';
import AppReducer from './AppReducer';
// Init state
const initialState = {
    orders: [
        { id: 1, first: "Fabrizio", last:"Catinella", addrNumb:"69", addrStreet:"Pleasance Avenue", time:"13:00", total:"3.00", type: "Delivery", 
        products:[
            { spec: '12"', name: "Pepperoni", cost: '3.00', category:'Pizza', extras: [
                { name:"Mushrooms",  cost: '0.80'}
            ] },
            { spec: '12"', name: "Mag", cost: '6.00', category:'Pizza', extras: [
                { name:"Pineapple",  cost: '0.90'}
            ] }
        ]},
        { id:2, first: "John ", last:"Smith", addrNumb:"69", addrStreet:"Pleasance Avenue", time:"13:00", total:"3.00", type: "Collection",
        products:[
            { spec: '12"', name: "Pepperoni", cost: '3.00', category:'Pizza', extras: [
                { name:"Mushrooms",  cost: '0.80'}
            ] },
            { spec: '12"', name: "Mag", cost: '6.00', category:'Pizza', extras: [
                { name:"Pineapple",  cost: '0.90'}
            ] }
        ]}
      ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ( { children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteOrder(id) {
        dispatch({
            type : 'DELETE_ORDER',
            payload: id
        })
    }

    return (
        <GlobalContext.Provider value={{
           orders: state.orders,
           deleteOrder 
        }}>
            {children}
        </GlobalContext.Provider>
    );

}