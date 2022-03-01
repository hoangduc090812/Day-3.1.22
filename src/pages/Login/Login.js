import React from 'react'
import { useFormik } from 'formik'
import *as Yup from 'yup'


export default function Login() {
    const formik = useFormik ({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            hoTen: '',
            email: '',
            soDt: ''
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required('Không được bỏ trống!!!'),
            matKhau: Yup.string().required('Không được bỏ trống!!').min(6,'Tối thiểu 6 ký tự !!').max(20, 'Tối đa 20 ký tự!!'),
            hoTen: Yup.string().required('Không được bỏ trống!!!'),
            email: Yup.string().required('Không được bỏ trống!!!').email('Không đúng định dạng!!'),
            soDt: Yup.string().required('Không được bỏ trống!!!').matches(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/, 'Không đúng định dạng.. Xin nhập lại!!'),
        }),
        onSubmit:(values) => {
            console.log(values);
        }
                        
    });

    console.log(formik.values);
  return (
    <form className='container' onSubmit={formik.handleSubmit}>
        <h3 className='text-center'>Đăng ký</h3>
        <div className='form-group'>
            <p>Tài khoản</p>
            <input className='form-control' type='text' name='taiKhoan' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            {formik.touched.taiKhoan && formik.errors.taiKhoan && <div className='alert alert-danger'>{formik.errors.taiKhoan}</div>}
        </div>
        <div className='form-group'>
            <p>Mật khẩu</p>
            <input className='form-control' type='password' name='matKhau' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            {formik.touched.matKhau && formik.errors.matKhau && <div className='alert alert-danger'>{formik.errors.matKhau}</div>}
        </div>
        <div className='form-group'>
            <p>Họ tên</p>
            <input className='form-control' type='text' name='hoTen' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            {formik.touched.hoTen && formik.errors.hoTen && <div className='alert alert-danger'>{formik.errors.hoTen}</div>}
        </div>
        <div className='form-group'>
            <p>Email</p>
            <input className='form-control' type='email' name='email' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            {formik.touched.email && formik.errors.email && <div className='alert alert-danger'>{formik.errors.email}</div>}
        </div>
        <div className='form-group'>
            <p>Số điện thoại</p>
            <input className='form-control' type='number' name='soDt' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            {formik.touched.soDt && formik.errors.soDt && <div className='alert alert-danger'>{formik.errors.soDt}</div>}
        </div>
        <div className='form-group'>
            <button className='btn btn-success' type='submit'>Đăng ký</button>
        </div>
    </form>
  )
}
