import React, { useRef, useState } from 'react';

const DemoUseRef = () => {
    // !Khi dùng useState thì sẽ render lại UI khi setState
    // let [userLogin, setUserLogin] = useState({
    //     username: '',
    //     password: ''
    // })

    // Khi setState chỉ cần lưu ngầm giá trị , không cần render lại UI
    let useRefLogin = useRef({
        username: '',
        password: ''
    })
    let handleChange = (e) => {
        let { value, id } = e.target
        useRefLogin.current[id] = value
        // setUserLogin({
        //     ...userLogin,
        //     [id]: value
        // })
    }
    let handleSubmit = (e) => {
        e.preventDefault()
        console.log(useRefLogin)

    }

    console.log('render Form')
    return (
        <div className='container' onSubmit={handleSubmit}>
            <form className='w-50'>
                <div className="form-group">
                    <label htmlFor="username">UserName</label>
                    <input type="text" className="form-control" id="username" onChange={handleChange} />

                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default DemoUseRef;
