import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { history } from '../../App';
import { userMovie } from '../../ulti/setting';

const Header = () => {

    let { userLogin } = useSelector(state => state.quanLyNDReducer)
    /**
     * Đăng Xuất:
     * b1:Tạo hàm đăng xuất
     * b2:clear LocalStorage
     * b3:dispatch lên reducer(null)
     */
    const handleSignOut = () => {
        localStorage.removeItem(userMovie)

    }


    return (
        <header className='container'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink activeStyle={{ color: 'orange' }} className="nav-link" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/register">Register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/demo-router">DemoRouter</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                Hooks
                            </a>
                            <div className="dropdown-menu">
                                <NavLink className="dropdown-item" to="/use-state">useState</NavLink>
                                <NavLink className="dropdown-item" to="/use-effect">useEffect</NavLink>
                                <NavLink className="dropdown-item" to="/use-callBack">useCallBack</NavLink>
                                <NavLink className="dropdown-item" to="/use-memo">useMemo</NavLink>
                                <NavLink className="dropdown-item" to="/use-ref">useRef</NavLink>
                                <NavLink className="dropdown-item" to="/tang-giam-fs">Tăng Giam FontSize</NavLink>
                                <NavLink className="dropdown-item" to="/facebook-app">FacebookApp</NavLink>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                API
                            </a>
                            <div className="dropdown-menu">
                                <NavLink className="dropdown-item" to="/shoes-shop-api">ShoeShop API</NavLink>
                                <NavLink className="dropdown-item" to="/shoes-shop-await">ShoeShop Await</NavLink>
                                <NavLink className="dropdown-item" to="/middle-ware">ShoeShop MiddleWare</NavLink>

                            </div>
                        </li>
                    </ul>
                    {/* TODO binding tên user khi đã đăng nhâp */}
                    <p className='text-white'>{userLogin ? userLogin.hoTen : <span onClick={() => history.push('/login')}>Đăng nhập</span>}</p>
                    <p onClick={handleSignOut} className='text-white ml-3'>{userLogin !== null ? 'Đăng Xuất' : ''}</p>
                </div>
            </nav>
        </header>
    );
}

export default Header;
