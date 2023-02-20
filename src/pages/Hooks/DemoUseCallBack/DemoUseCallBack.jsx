import React, { useCallback, useState } from 'react';
import Comment from './Comment';

const DemoUseCallBack = () => {

    let [like, setLike] = useState(0)
    let [number, setNumber] = useState(0)

    // hàm:tham chiếu ( obj,arr,hàm)
    // Các biến và hàm sẽ bị tạo lại => địa chỉ mới
    let notifyMsg = () => {
        console.log(`bạn đã tăng number${number}`);
    }
    // Lưu cache, lưu lại đỉa cũ của hàm
    let notifyMsgCallBack = useCallback(notifyMsg, [number])

    return (
        <div className='container'>
            <button onClick={() => {
                setLike(like + 1)
            }} className='btn btn-warning mr-5'>Tăng Like</button>

            <button onClick={() => {
                setNumber(number + 1)
            }} className='btn btn-warning'>Tăng Number</button>
            <div className="card w-25">
                <img style={{ width: '100%' }} className="card-img-top" src='' alt='' />
                <div className="card-body">
                    <p className="card-text">Like: {like}</p>
                </div>
            </div>

            {/* =>props truyền xuống bị đổi địa chỉ mới =>memo render lại UI do nhầm giá trị thay đổi */}
            <Comment notifyMsg={notifyMsgCallBack} />
        </div>
    );
}

export default DemoUseCallBack;
