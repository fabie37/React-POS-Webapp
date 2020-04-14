export default (state,action) => {
    switch(action.type) {
        case "DELETE_ORDER":
            return {
                ...state,
                orders: state.orders.filter( order => order.id !== action.payload) 
            }
        default:
            return state;
    }
}