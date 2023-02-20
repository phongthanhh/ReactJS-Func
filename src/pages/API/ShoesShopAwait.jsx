import React, { useEffect, useState } from 'react'
import axios from 'axios'

/** 
 * B1:Tạo UI (button call API,row,col hiển thị sản phẩm)
 * B2: Tạo function call API(console.log)
 * B3: render lại UI để hiển thị data lên UI => lưu data vao state  để khi setState sẽ render lại UI
 * B4:  làm sao để khi load web sẽ hiển thị dữ liệu từ API lên UI
 * 
 * Luồng chạy
 * 1.load ứng dụng lên
 * 2.khởi tạo state, hàm
 * 3. chạy return => renderUI
 * 4. chạy useEffect => chạy hàm call API(didmount)
 * 5.setState(trong hàm call API)=> render lại UI
 * 6.arrShoes => có data mới
 * 7.Binding data lên UI
 */

export default function ShoesShopAwait() {
    const [arrShoes, setArrShoes] = useState([])

    // mounting(load ứng dụng),didmount(Chạy khi render xong UI,khi render lại UI sẽ không chạy lại)
    useEffect(() => {
        // Code chạy trong didmount
        getShoesList()
    }, [])

    // Hàm có xử lý bất đồng bộ thì đặt từ khóa async
    const getShoesList = async () => {
        // await giúp trình duyệt chờ xử lý lấy xong data mới chạy tiếp code
        // await chỉ dùng trong hàm có async
        try {
            // xử lý Thành công
            let result = await axios({
                method: 'GET',
                url: 'https://shop.cyberlearn.vn/api/Product'
            })
            setArrShoes(result.data.content)
            console.log('PhongThanh 🚀 ~> result', result.data.content)
        } catch (error) {
            // Thất bại
            console.log(error)
        }


    }

    const renderUI = () => {
        return arrShoes.map(shoes => {
            return (
                <div className="col-4" key={shoes.id}>
                    <div className="card">
                        <img className="card-img-top" src={shoes.image} />
                        <div className="card-body">
                            <h4 className="card-title">{shoes.name}</h4>
                            <p className="card-text">{shoes.description}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className='container'>
            <h2>Shoe Shop Await</h2>
            <button className='btn btn-danger' onClick={getShoesList}>call API</button>
            <div className="row">
                {renderUI()}
            </div>
        </div>
    )
}
