import React, { useState } from 'react';

const DemoUseState = () => {

    // UseStae trả về 1 mảng[state,setState](giá trị cần đổi,hàm giúp đổi giá trị state)
    // let [state, setState] = useState(Gía trị ban đầu của state)
    let [fs, setFs] = useState(16)
    let [userInfo, setUserInfo] = useState({
        name: 'Nguyễn Văn A',
        avatar: 'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI',
        vote: 0
    })
    return (
        <div className='container'>
            <div>
                <h2>Demo Tăng giảm fontsize</h2>
                <p style={{ fontSize: `${fs}px` }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, possimus?</p>
                <button onClick={() => {
                    setFs(fs + 1)
                }} className='btn btn-info mr-3'>+</button>
                <button onClick={() => {
                    setFs(fs - 1)
                }} className='btn btn-danger'>-</button>

                <h2 className='py-5'>Demo Vote</h2>
                <div className="card w-25">
                    <img style={{ width: '100%' }} className="card-img-top" src={userInfo.avatar} alt='' />
                    <div className="card-body">
                        <h4 className="card-title">{userInfo.name}</h4>
                        <p className="card-text">{userInfo.vote}</p>
                        <button onClick={() => {
                            setUserInfo({ ...userInfo, vote: userInfo.vote + 1 })
                        }} className='btn btn-warning'>Vote</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DemoUseState;
