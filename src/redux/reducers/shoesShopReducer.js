import { GET_SHOES_LIST } from "../types/shoesShopType"

const initialState = {
    arrShoes: [],
    user: {}
}

export const shoesShopReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {

        case GET_SHOES_LIST:
            console.log(payload)
            return { ...state, arrShoes: payload }

        default:
            return state
    }
}
