import { useEffect, useState } from "react"
import UserService from "../service/UserService";
import jwt_decode from "jwt-decode";
import AddressService from "../service/AddressService";
import OrderService from "../service/OrderService";
import Header from "../component/Header";


export default function MyAccount(){

    const addressService = new AddressService()
    const userservice = new UserService()
    const orderService = new OrderService()

    var username = jwt_decode(userservice.getToken()).sub;
    var userID = parseInt(localStorage.getItem("userId"))


    const initUser = {
        admin:false,
        birthday:"",
        full_name:"",
        id:0,
        passWord:"",
        userName:""
    }

    const initAddress={
        name:"",
        user_id:userID,
        phoneNumber:"",
        province:"",
        district:"",
        wards:"",
        detail:""
    }

    const [user,setUser] = useState(initUser);
    const [listAddress, setListAddress ] = useState([])
    const [address,setAddress]=useState(initAddress)
    const [listOrder,setListOrder]= useState([])

    useEffect(()=>{
        userservice.getUserByUserName(username).then((data)=>{
            setUser(data)
        })
        orderService.getOrderByUserId(userID).then((data)=>{
            setListOrder(data)
        })
        addressService.getAddressByUserId(userID).then((data)=>{
            setListAddress(data)
        })
    },[])


    function createAddress(){
        addressService.addAddress(address).then((data)=>{
            console.log(data)
        })
    }

    function deleteAddress(id){

        addressService.deleteAddress(parseInt(id)).then((data)=>{
            console.log(data)
        })


    }



    const showListAddress = listAddress.map((item,index)=>
        <div key={index}>
            <p>Tên người nhận: {item.name}</p>
            <p>Sdt người nhận: {item.phoneNumber}</p>
            <p>Tỉnh/Thành phố: {item.province}</p>
            <p>Quận/Huyện: {item.district}</p>
            <p>Phường/Xã: {item.wards}</p>
            <p>Chi tiết: {item.detail}</p>
            <button>Sửa</button>
            <button onClick={()=>deleteAddress(item.id)}>Xóa</button>
        </div>
    
    )

    const showListOrder= listOrder.map((item,index)=>
        
        <div key={index}>
            <p>Mã đơn hàng: {item.id}</p>
        </div>
    )

    return(
        <div className="container">
            <Header />
            <div>
                <h2>User data</h2>
                <p>user name :{user.userName}</p>
                <p>Full name : {user.full_name}</p>
                <p>birthday  : {user.birthday}</p>
            </div>

            <div>
                <h2>Danh sách đơn hàng</h2>
                {showListOrder}
            </div>

            <div>
                <h2>List address</h2>
                {showListAddress}
            </div>
            
            <div>
                <h2>Thêm address</h2>
                <input type="text" onChange={(e)=>setAddress({...address,name:e.target.value})} />
                <input type="text" onChange={(e)=>setAddress({...address,phoneNumber:e.target.value})} />
                <input type="text" onChange={(e)=>setAddress({...address,province:e.target.value})} />
                <input type="text" onChange={(e)=>setAddress({...address,district:e.target.value})} />
                <input type="text" onChange={(e)=>setAddress({...address,wards:e.target.value})} />
                <input type="text" onChange={(e)=>setAddress({...address,detail:e.target.value})} />
                <button onClick={()=>createAddress()} >Thêm</button>
            </div>

        </div>
    )
}