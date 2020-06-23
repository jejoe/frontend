export default (state, action) => {
    switch (action.type) {
        case 'GET_DEALS':
            return {
                ...state,
                deals: action.payload
            }
        case 'DEAL_FETCH_ERROR':
            return {
                ...state,
                error: action.payload
            }
        case 'DELETE_DEAL':
            return {
                ...state,
                deals: state.deals.filter(deal => deal._id !==
                    action.payload)
            }
        case 'ADD_DEAL':
            return {
                ...state,
                deals: [...state.deals, action.payload]
            }
            case 'EDIT_DEAL':
                const dealId = action.payload.id;
                const updatedDeal = action.payload.editedDeal
                const updatedDeals = state.deals.map( deal => {
                    if(deal._id === dealId) {
                        return updatedDeal
                    }
                    return deal;
                });
                return {
                    deals: updatedDeals
                }
        default:
            return state;
    }
}