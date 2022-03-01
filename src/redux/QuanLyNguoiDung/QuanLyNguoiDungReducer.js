
const stateDefault = {
    mangNguoiDung : [
        {
            "taiKhoan": "0941234234",
            "hoTen": "vitan",
            "email": "xxcxxc@gmail.com",
            "soDt": "0956766667776",
            "matKhau": "thien568",
            "maLoaiNguoiDung": "KhachHang"
          },
          {
            "taiKhoan": "121212ddd",
            "hoTen": "stt",
            "email": "dd@qwe.vc",
            "soDt": "1111111111",
            "matKhau": "12345678",
            "maLoaiNguoiDung": "KhachHang"
          }
    ]
}

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => { 
    switch(action.type){
        case"GET_USER" :{
            state.mangNguoiDung = action.data;
            return {...state};
        }
        default: {
            return {...state};
        }
    }
 }