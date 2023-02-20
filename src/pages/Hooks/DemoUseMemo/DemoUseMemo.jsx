import React, { useMemo, useState } from 'react';
import Cart from './Cart';

// C1
// let cart = [
//     { id: 1, name: 'iphone', price: 1000 },
//     { id: 2, name: 'htc phone', price: 2000 },
//     { id: 3, name: 'lg phone', price: 3000 }
// ];

const DemoUseMemo = () => {

    let [like, setLike] = useState(0)

    // Khi render lại UI => TẠO LẠI BIẾN cart(arr) => tạo lại địa chỉ ô nhớ mới
    let cart = [
        { id: 1, name: 'iphone', price: 1000 },
        { id: 2, name: 'htc phone', price: 2000 },
        { id: 3, name: 'lg phone', price: 3000 }
    ];
    // Lưu cache địa chỉ của biến ( array/obj)
    let cartMemo = useMemo(() => cart, [])

    return (
        <div className="m-5">
            Like: {like} ♥
            <br />
            <span style={{ cursor: 'pointer', color: 'red', fontSize: 35 }} onClick={() => {
                setLike(like + 1);
            }}>♥</span>
            <br />
            <br />
            <Cart cart={cartMemo} />
        </div>
    );
}

export default DemoUseMemo;
