import axios from "axios";
import { history } from "../../../App";
import { ACCESS_TOKEN, TOKEN, URL_API, userMovie } from "../../../ulti/setting";
import { DANG_NHAP } from "../../types/movieType";

export const dangKyAction = (thonTinND) => {
    return (dispatch2) => {
        // Đăng ký k cần đưa lên reducer nên k cần dispatch2
        axios({
            method: 'POST',
            url: `${URL_API}QuanLyNguoiDung/DangKy`,
            data: thonTinND,
            headers: {
                'TokenCybersoft': TOKEN
            }
        })
            .then(result => {
                alert('Thành công')
                console.log(result.data)
                // TODO chuyển hướng về trang login
                history.push('/login')
            })
            .catch(error => console.log(error))
    }
}

// TODO tạo action đăng nhập

export const dangNhapAction = (ThongTinLogin) => {
    return (dispatch2) => {
        axios({
            method: 'POST',
            url: `${URL_API}QuanLyNguoiDung/DangNhap`,
            data: ThongTinLogin,
            headers: {
                'TokenCybersoft': TOKEN
            }
        })
            .then(result => {
                // Lưu data đăng nhập xuống LocalStorage
                localStorage.setItem(ACCESS_TOKEN, result.data.content.accessToken)

                localStorage.setItem(userMovie, JSON.stringify(result.data.content))

                history.push('/home')
                dispatch2({
                    type: DANG_NHAP,
                    payload: result.data.content
                })
            })
            .catch(error => console.log(error.response.content))
    }
}