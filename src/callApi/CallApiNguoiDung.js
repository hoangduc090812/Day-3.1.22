import axios from 'axios'


export let GetUserApi = (dispatch) => {
    let promise = axios({
        url: 'http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01',
        method: 'GET'
    })
    promise.then((result) => {
        // console.log(result);
        dispatch({
            type: "GET_USER",
            data: result.data.content
        })
    });
    promise.catch((errors) => {
        console.log(errors);
    });
} 