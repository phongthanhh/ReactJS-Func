import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getShoesListAction } from '../../redux/action/shoeShop/shoeShopAction'
import { GET_SHOES_LIST } from '../../redux/types/shoesShopType'

export default function ShopMiddleware() {

    const { arrShoes } = useSelector(state => state.shoesShopReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        getShoesList()
    }, [])

    const getShoesList = () => {
        // Action => loại 1: obj
        // Loại 2: hàm
        // TODO gán hàm action của shoesShopAction
        // khi action loại 2 có xử lý call API và dispatch data lên reducer = > middleware =>đẩy dữ liệu từ API lên store
        // ! middleware => tạo 1 hàm dispatch2
        // const action = getShoesListAction()
        // !dispatch1:Gọi chạy hàm action bên trên
        // Chỉ nhận vào hàm chưa được gọi
        dispatch(getShoesListAction())
    }
    console.log(arrShoes)
    const renderUI = () => {
        return arrShoes.map(shoes => {
            return (
                <div className="col-4" key={shoes.id}>
                    <div className="card">
                        <img className="card-img-top" src={shoes.image} />
                        <div className="card-body">
                            <h4 className="card-title">{shoes.name}</h4>
                            <p className="card-text">{shoes.description}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }
    return (
        <div className='container'>
            <h2>ShopMiddleware</h2>
            <div className="row">
                {renderUI()}
            </div>
        </div>
    )
}
