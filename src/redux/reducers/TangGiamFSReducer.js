const initialState = 16

export const TangGiamFSReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TANG_GIAM':
            state += action.fs
            return state
        default:
            return state
    }
}
