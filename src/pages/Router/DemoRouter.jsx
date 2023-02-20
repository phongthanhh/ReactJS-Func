import { useState } from "react"
// React Router-dom ver5
/**
 * Lấy thông tin từ form
 * check tài khoản => đăng nhập thành công => chuyển user về trang home
 */
export default function DemoRouter(props) {
    console.log(props)

    const [user, setUser] = useState({
        taiKhoan: "",
        matKhau: ""
    })

    const handleChange = (e) => {
        let { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (user.taiKhoan === 'cybersoft') {
            console.log('Thành công')
            // Push
            // Home->demoRouter->home
            props.history.push('/home')
            // Replace
            // Home->replace(thay thế thành home)
            // props.history.replace('/home')

        } else {
            console.log('Thất bại')
        }
    }

    return (
        <div className='container'>
            <form className='w-50' onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">UserName</label>
                    <input onChange={handleChange} type="text" className="form-control" name="taiKhoan" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input onChange={handleChange} type="password" className="form-control" name="matKhau" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button onClick={() => {
                    props.history.goBack('/home')
                }} type="button" className="btn btn-info">Back Home</button>
            </form>
        </div>
    )
}
