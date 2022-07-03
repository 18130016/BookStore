import { useEffect, useState, useRef } from "react"
import "../css/cart.css"
import CartService from "../service/CartService"
import { Toast } from 'primereact/toast';

import { useDispatch,useSelector } from "react-redux";
import { addItem,removeItem,removeAll } from "../app/ListCartItem";
import { useNavigate } from "react-router-dom";

export default function Cart() {
    let uID = localStorage.getItem("userId")
    const toast = useRef(null);
    const cartService = new CartService()
    const dispath = useDispatch()
    const navigate= useNavigate()
    
    const data = useSelector(state => state.listCartItem.list)


    const [cartItem, setCartItem] = useState([])

    useEffect(() => {
        cartService.getCartByIdUser(uID).then((data) => {
            setCartItem(data)
            dispath(removeAll())
        })
    },[])

    function removeItemOfCart(id) {
        cartService.removeItem(id).then((data) => {
            if (data.check === true) {
                toast.current.show({ severity: 'success', summary: 'Thành công!', detail: data.acessToken, life: 1000 });
            } else {
                toast.current.show({ severity: 'error', summary: 'Thất bại!', detail: data.acessToken, life: 1000 });
            }
        })
    }

    function minusValue(item) {
        
        if(item.qty===1){ 
            return  toast.current.show({ severity: 'error', summary: 'Thất bại!', detail: "Số lượng đã tối thiểu", life: 1000 });
        }

        let cartItem = {
            id: item.id,
            book_id: item.book.id,
            qty: item.qty - 1,
            user_id: item.user_id
        }
        cartService.updateCartItem(cartItem).then((data) => {
            if (data.check === true) {
                toast.current.show({ severity: 'success', summary: 'Thành công!', detail: data.acessToken, life: 1000 });
            } else {
                toast.current.show({ severity: 'error', summary: 'Thất bại!', detail: data.acessToken, life: 1000 });
            }
        })

    }

    //tăng so lượng
    function plusValue(item) {

        let cartItem = {
            id: item.id,
            book_id: item.book.id,
            qty: item.qty + 1,
            user_id: item.user_id
        }
        cartService.updateCartItem(cartItem).then((data) => {
            if (data.check === true) {
                toast.current.show({ severity: 'success', summary: 'Thành công!', detail: data.acessToken, life: 1000 });
            } else {
                toast.current.show({ severity: 'error', summary: 'Thất bại!', detail: data.acessToken, life: 1000 });
            }
        })

    }

    //chọn thì thêm vào redux bỏ chọn thì xóa khỏi redux
    const cartItemSelect = (checked,item)=>{
        if(checked){
            dispath(addItem(item))
        }else{
            dispath(removeItem(item))
        }
    }

    function checkOut(){
        if(data.length===0){
            toast.current.show({ severity: 'error', summary: 'Thất bại!', detail: "Chưa chọn sản phẩm thanh toán", life: 1000 });
        }else{
            navigate("/checkout", { replace: true });
        }


        
    }

    


    const showCartItem = cartItem.map((item, index) =>

        <tr key={index}>
            <td><input type="checkbox" onChange={(e)=>cartItemSelect(e.target.checked,item)}/></td>
            <td>
                <div className="img">
                    <a href="#"><img src={item.book.image} alt="Image" /></a>
                    <p>{item.book.name}</p>
                </div>
            </td>
            <td>{item.book.price}</td>
            <td>
                <div className="qty">
                    <button className="btn-minus" onClick={() => minusValue(item)}><i className="pi pi-minus"></i></button>
                    <p>{item.qty}</p>
                    <button className="btn-plus" onClick={() => plusValue(item)}><i className="pi pi-plus"></i></button>
                </div>
            </td>
            <td>{item.book.price * item.qty}</td>
            <td><button onClick={()=>removeItemOfCart(item.id)}><i className="pi pi-trash"></i></button></td>
        </tr>


    )

    return (
        <div className="cart-page">
            <Toast ref={toast} />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="cart-page-inner">
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>Chọn</th>
                                            <th>Sản phẩm</th>
                                            <th>Giá</th>
                                            <th>Số lượng</th>
                                            <th>Tổng giá</th>
                                            <th>Xóa</th>
                                        </tr>
                                    </thead>
                                    <tbody className="align-middle">
                                        {showCartItem}
                                    </tbody></table>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="cart-page-inner">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="coupon">
                                        <input type="text" placeholder="Coupon Code" />
                                        <button>Mã giảm giá</button>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="cart-summary">
                                        <div className="cart-content">
                                            <h1>Cart Summary</h1>
                                            <p>Sub Total<span>$99</span></p>
                                            <p>Shipping Cost<span>$1</span></p>
                                            <h2>Grand Total<span>$100</span></h2>
                                        </div>
                                        <div className="cart-btn">
                                            <button onClick={()=>checkOut()}>Checkout</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}