import { GET_SHOES_LIST } from "../../types/shoesShopType"
import axios from "axios"
import thunk from "redux-thunk"

export const getShoesListAction = () => {
    // Trả về hàm chưa gọi
    return async (dispatch2) => {
        try {
            let result = await axios({
                method: 'GET',
                url: 'https:shop.cyberlearn.vn/api/Product'
            })
            let action = {
                type: GET_SHOES_LIST,
                payload: result.data.content
            }
            //! dispatch2:đẩy dữ liệu lên store
            dispatch2(action)
        } catch (error) {
            console.log(error)
        }
    }
}




// try {
//     let result = await axios({
//         method: 'GET',
//         url: 'https://shop.cyberlearn.vn/api/Product'
//     })
//     dispatch(getShoesListAction(result.data.content))
// } catch (error) {
//     console.log(error)
// }