import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function ShoesShopAPI() {

    const [arrShoes, setArrShoes] = useState([])

    // Mounting(DidMount)
    useEffect(() => {
        //call API
        getShoesList()
    }, [])

    const getShoesList = () => {
        // Call API
        axios({
            method: 'GET',
            url: 'https://shop.cyberlearn.vn/api/Product'
        })
            // Thành công
            .then(result => {
                console.log('PhongThanh 🚀 ~> result.data.content', result.data.content)
                setArrShoes(result.data.content)
            })
            //Thất bại
            .catch(error => console.log(error))
    }

    const renderShoesList = () => {
        return arrShoes.map(shoes => {
            return (
                <div className="col-3" key={shoes.id} >
                    <div className="card">
                        <img className="card-img-top" src={shoes.image} />
                        <div className="card-body">
                            <h4 className="card-title">{shoes.name}</h4>
                            <p className="card-text">{shoes.shortDescription}</p>
                        </div>
                    </div>
                </div >
            )
        })
    }

    return (
        <div className='container'>
            <h2>Shoes Shop</h2>
            <button onClick={getShoesList} className='btn btn-danger'>Get Shoes List</button>
            <div className="row py-5">
                {renderShoesList()}
            </div>
        </div>
    )
}
