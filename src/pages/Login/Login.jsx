import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { dangNhapAction } from '../../redux/action/movie/QuanLyNdAction';
import { useDispatch } from 'react-redux';

const Login = () => {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: ""
        },
        validationSchema: Yup.object({
            taiKhoan: Yup.string().min(6, 'Tối thiểu là 6 kí tự')
                .max(15, 'Tối đa 15 kí tự')
                .required('Tài khoản không được để trống'),
            matKhau: Yup.string().required('Mật khẩu không được để trống').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,8}$/, 'Mật khẩu không đúng định dạng'),
        }),

        onSubmit: values => {
            // TODO dispatch action call API đăng nhập
            dispatch(dangNhapAction(values))
        },
    });

    return (
        <div className='container py-5'>
            <h2>Sign In</h2>
            <form className='w-50' onSubmit={formik.handleSubmit} >
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">UserName</label>
                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" className="form-control" name="taiKhoan" />
                    {formik.errors.taiKhoan ? (
                        <div className='alert alert-danger mt-1'>{formik.errors.taiKhoan}</div>
                    ) : null}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" className="form-control" name="matKhau" />
                    {formik.errors.matKhau ? (
                        <div className='alert alert-danger mt-1'>{formik.errors.matKhau}</div>
                    ) : null}
                </div>
                <button type="submit" className="btn btn-primary mr-5">Sing In</button>

                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    );
}

export default Login;
