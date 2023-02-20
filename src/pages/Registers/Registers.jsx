import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { dangKyAction } from '../../redux/action/movie/QuanLyNdAction';
import { useDispatch } from 'react-redux';

const Registers = () => {

    const dispatch = useDispatch()

    const formik = useFormik({
        // Lưu giá trị lấy từ form
        initialValues: {
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maNhom: 'GP01',
            hoTen: ""
        },
        validationSchema: Yup.object({
            taiKhoan: Yup.string().required('Tài khoản không được để trống').min(3, 'Độ dài tối thiểu là 3 ').max(16, 'Độ dài tối đa là 16'),
            matKhau: Yup.string().required('Mật khẩu không được để trống').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,8}$/, 'Mật khẩu không đúng định dạng'),
            email: Yup.string().required('Email không được để trống').email('Email không đúng định dạng'),
        }),
        onSubmit: values => {
            console.log('values', values)
            // Gọi hàm dangKyAction để call API đăng ký BE
            dispatch(dangKyAction(values))
        },
    });

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1"> User</label>
                    <input type="text" className="form-control" name="taiKhoan"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.taiKhoan ? (
                        <div className='alert alert-danger'>{formik.errors.taiKhoan}</div>
                    ) : null}
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1"> Password</label>
                    <input type="password" className="form-control" name="matKhau"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.matKhau ? (
                        <div className='alert alert-danger'>{formik.errors.matKhau}</div>
                    ) : null}
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1"> Full Name</label>
                    <input type="text" className="form-control" name="hoTen" onChange={formik.handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="text" className="form-control" name="email" onChange={formik.handleChange} />
                    {formik.errors.email ? (
                        <div className='alert alert-danger'>{formik.errors.email}</div>
                    ) : null}
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1"> Phone</label>
                    <input type="text" className="form-control" name="soDt" onChange={formik.handleChange} />
                </div>

                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    );
}

export default Registers;


