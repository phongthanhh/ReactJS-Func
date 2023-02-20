import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const TangGiamFS = () => {
    // Gía trị cần đổi là FONT-SIZE

    // Lấy state từ reducer xuống component
    // State giống rootReducer
    let fs = useSelector(state => state.TangGiamFSReducer)
    let dispatch = useDispatch()
    return (
        <div className='container'>
            <p style={{ fontSize: `${fs}px` }} className="alert alert-info">TangGiamFS</p>
            <button onClick={() => {
                let action = {
                    type: 'TANG_GIAM',
                    fs: 2
                }
                dispatch(action)
            }} className='btn btn-success mr-3'>Tăng</button>
            <button onClick={() => {
                let action = {
                    type: 'TANG_GIAM',
                    fs: -2
                }
                dispatch(action)
            }} className='btn btn-danger'>Giảm</button>

        </div >
    );
}

export default TangGiamFS;
