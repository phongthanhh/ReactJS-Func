import React, { useEffect, useState } from 'react';

// Những biến không gán lại giá trị ban đầu khi render  lại UI thì đặt bên ngoài func
let arrLocation = [
    {
        id: 'HCM',
        tenTP: 'Hồ Chí Minh',
        danhSachQH: [
            { id: 'Q001', name: 'Quận 1' },
            { id: 'Q002', name: 'Quận 2' },
            { id: 'Q003', name: 'Quận 3' },
        ]
    },
    {
        id: 'DN',
        tenTP: 'Đà Nẵng',
        danhSachQH: [
            { id: 'HC', name: 'Hải Châu' },
            { id: 'LC', name: 'Liên Chiểu' },
            { id: 'ST', name: 'Sơn Trà' },
        ]
    }
]

let timeout = {}

// Khi render lại UI => tạo lại function =>Những biến trong fc được tạo lại
const DemoUseEffect = () => {
    // !Updating chạy khi => state, props thay đổi
    let [number, setNumber] = useState(0)
    let [arrQH, setQH] = useState([])
    let [idTP, setTP] = useState('')
    // call API , gọi các thư viện slick ,countUp => sau khi UI render
    // ComponentDidMount,componentDidUpdate(ClassComponent)
    // Hook =>UseEffect(Function): Đại diện cho nhiều medthod của lifeCyle

    // useEffect(() => {
    //     console.log('componentDidmount');
    //     console.log('componentDidUpdate');
    //     //! không nên gọi setState ở componentDidmount và componentDidUpdate
    // })
    // Chỉ chạy riêng componentDidmount
    //! useEffect(Hàm xử lý theo lifeCycle,mảng)
    useEffect(() => {
        console.log('componentDidmount');
    }, [])

    // unmount
    useEffect(() => {
        // setInterval trả về obj
        timeout = setInterval(() => {
            console.log('call API')
        }, 1000);
        return () => {
            // Thực hiện các code khi rwời khỏi hoặc xóa  component khỏi UI
            clearInterval(timeout)
        }
    }, [])

    // Updating
    useEffect(() => {
        // Sau khi UI render lại xong khi chọn setTP
        //thì idTP đã đc xét xong
        getArrQH();
    }, [idTP]) // CHỈ CHẠY KHI IDTP đổi

    let renderQH = () => {
        if (arrQH.length == 0) return <option >Hãy chọn thành phố trước </option>
        return arrQH.map((QH => {
            console.log(QH)
            return (
                <option key={QH.id} value={QH.id}>{QH.name} </option>
            )
        }))
    }

    let getArrQH = () => {
        if (idTP !== '') {
            // có chọn thành phố
            let tpTK = arrLocation.find(tp => tp.id === idTP)
            let newArrQH = tpTK.danhSachQH
            setQH(newArrQH)
        }
    }

    // 2 Dropdown: danh sách thành phố, danh sách quận huyện theo thành phố
    // khi chọn thành phố: => tự động hiển thị danh sách quận huyện tương ứng


    console.log(arrQH)
    console.log(idTP)
    return (
        <div className='container'>
            <p className='alert alert-success'>{number}</p>
            <button onClick={() => {
                setNumber(number + 1)
            }} className='btn btn-info'>Tăng Number</button>

            <h2>Demo chọn thành phố</h2>
            <div className='w-50'>
                <div className="row">
                    <div className="col-6">
                        {/* City */}
                        <select className="form-control" onChange={(e) => {
                            let { value } = e.target;
                            // console.log('PhongThanh 🚀 ~> value', value)
                            setTP(value)

                        }} id="">
                            <option value={''}>Chọn thành phố</option>
                            <option value={'HCM'}>Hồ Chí Minh</option>
                            <option value={'DN'}>Đà Nẵng</option>
                        </select>
                    </div>
                    <div className="col-6">
                        {/* Quận huyện */}
                        <select className="form-control" id="">
                            {renderQH()}
                        </select>
                    </div>
                </div>
            </div>

        </div>
    );
}

// ClassComponent => thuộc tính(ở phương thức contrucstor) được khai báo trong class=> thì sẽ k bị ảnh hưởng khi render UI
// KHI RENDER LẠI Ui => chỉ có phương thức render được gọi lại

export default DemoUseEffect;
