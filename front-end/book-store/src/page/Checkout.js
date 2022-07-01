import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import AddressService from "../service/AddressService"
import { removeItem, removeAll } from "../app/ListCartItem"
import OrderService from "../service/OrderService"


export default function Checkout() {
    const listCartItem = useSelector(state => state.listCartItem.list)
    const user = JSON.parse(localStorage.getItem("user"))
    const addressService = new AddressService()
    const orderService = new OrderService()
    const dispath = useDispatch()

    const [listAddress, setListAddress] = useState([])
    const [selectAddress, setSelectAddress] = useState(0)


    useEffect(() => {

        addressService.getAddressByUserId(user.id).then((data) => {
            setListAddress(data)
        })


    }, [])

    function checkOut() {
        console.log(listCartItem)
        console.log(listAddress)
    }

    function deleteCartItem(item) {
        dispath(removeItem(item))
    }

    function createOrder() {

        if (selectAddress === 0) {
            console.log("hãy chọn địa chỉ nhận hàng")
        }
        const current = new Date();
        const time = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()} | ${current.getHours()}:${current.getMinutes()}`;


        let order = {
            user_id: user.id,
            address_id: selectAddress,
            list_products: convertListProductToString(listCartItem),
            status: "Chờ xác nhận",
            create_day: time
        }

        orderService.createOrder(order).then((data)=>{
            console.log(data)
        })
    }

    function selectCheckBox(cheked, item) {
        if (cheked) {
            setSelectAddress(item)
        } else {
            setSelectAddress(0)
        }

        console.log(selectAddress);
    }

    function convertListProductToString(list){
        var result = ""
        for (var i = 0; i < list.length; i++){
            result += list[i].book.id +"-"+list[i].qty+";"
        }

        return result;
    }


    const showAddress = listAddress.map((item, index) =>
        <div style={{ display: "flex" }} key={index}>
            <input type="checkbox" onChange={(e) => selectCheckBox(e.target.checked, item.id)} /><p style={{ margin: "0px" }}> <strong>{item.name} - {item.phoneNumber} </strong>  : {item.province} , {item.district} , {item.wards}, {item.detail}   </p>
        </div>
    )

    const showListProduct = listCartItem.map((item, index) =>
        <tr key={index}>
            <td>
                <img style={{ height: '100px', width: '80px' }} src={item.book.image} alt="" />
                <p>{item.book.name}</p>
            </td>

            <td>
                <p>{item.qty}</p>
            </td>

            <td>
                <p>
                    {item.book.price}</p>
            </td>
            <td>
                <p> {item.book.price * item.qty}</p>
            </td>
            <td>
                <button onClick={() => deleteCartItem(item)}>Xóa</button>
            </td>
        </tr>

    )


    return (
        <div className="container">
            <button onClick={() => checkOut()}>Check</button>
            <div>
                <h2>Chọn địa chỉ</h2>
                <div>
                    {showAddress}
                </div>
            </div>

            <div>
                <h2>Danh sách sản phẩm</h2>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th> Sản phẩm</th>
                                <th> Số lượng</th>
                                <th> Đơn giá</th>
                                <th> Tổng</th>
                                <th>Xóa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {showListProduct}
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <h2>Đặt hàng</h2>
                <div><button onClick={() => createOrder()}>Thanh toán</button></div>
            </div>


        </div>
    )
}