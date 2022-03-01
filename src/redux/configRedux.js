import {applyMiddleware, combineReducers, createStore} from 'redux'
import { QuanLyNguoiDungReducer } from './QuanLyNguoiDung/QuanLyNguoiDungReducer';
import reduxThunk from 'redux-thunk'

const rootReducer = combineReducers({
    QuanLyNguoiDungReducer : QuanLyNguoiDungReducer
})

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));