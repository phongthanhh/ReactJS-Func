import { ADD_COMMENT } from "../types/facebookType"

const initialState = {
    arrComment: [
        { username: 'User1', comment: 'hay', avatar: 'https://i.pinimg.com/236x/ef/61/2a/ef612a0bb2ac679567142c3b978d4d37.jpg' },
        { username: 'User2', comment: 'verygood', avatar: 'https://i.pinimg.com/236x/ef/61/2a/ef612a0bb2ac679567142c3b978d4d37.jpg' }
    ]
}

export const facebookReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            console.log(action.userComment)
            state.arrComment = [...state.arrComment, action.userComment]
            return { ...state }

        default:
            return state
    }
}
