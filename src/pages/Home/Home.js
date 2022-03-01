import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { GetUserApi } from '../../callApi/CallApiNguoiDung';

export default function (props) {
    let mangNguoiDung = useSelector(rootReducer => rootReducer.QuanLyNguoiDungReducer.mangNguoiDung);
    const dispatch = useDispatch();
    // console.log(mangNguoiDung);
    useEffect(() => { 
        let action = GetUserApi;
        dispatch(action);
     },[])

  return (
    <div className='container'>
         <h3 className='text-center'>Danh sách người dùng</h3>
         <div className='row mt-5'>
             {mangNguoiDung.map((nguoiDung, index) => {
                 return <div className='col-3' key={index}>
                 <div className='card'>
                     <img src={`https://i.pravatar.cc/150?u=${nguoiDung.taiKhoan}`} alt='...'/>
                     <div className='card-body'>
                         <p>Họ tên: {nguoiDung.hoTen}</p>
                         <p>SĐt: {nguoiDung.soDt}</p>
                     </div>
                 </div>
             </div>
             })}
            
         </div>
    </div>
  )
}
