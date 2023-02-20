import { ADD_COMMENT } from "../../types/facebookType"

export const addComment = (userComment) => {
    return {
        type: ADD_COMMENT,
        userComment
    }
}