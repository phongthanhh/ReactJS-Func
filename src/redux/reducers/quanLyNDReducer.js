import { userMovie } from "../../ulti/setting"
import { DANG_NHAP } from "../types/movieType"

// Check LocalStorage
let userLogin = null //Chưa có localStorage
// const userLogin
// Xử lí đăng nhập khi => mở ứng dụng lên hoặc mở 1 tab mới của ứng dụng
if (localStorage.getItem(userMovie)) {
    // Có local => đã login
    userLogin = JSON.parse(localStorage.getItem(userMovie))
}

const initialState = {
    userLogin: userLogin
}

export const quanLyNDReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case DANG_NHAP:
            // Chưa đăng nhập hoặc đã dăng xuất và đăng nhập lại
            console.log(payload)
            // Render lại UI sau khi đăng nhập thành công   
            state.userLogin = payload
            return { ...state }

        default:
            return state
    }
}
