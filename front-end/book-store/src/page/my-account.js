import { useEffect, useState } from "react"
import UserService from "../service/UserService";
import jwt_decode from "jwt-decode";
import AddressService from "../service/AddressService";
import Modal from 'react-bootstrap/Modal';
import OrderService from "../service/OrderService";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import Header from "../component/Header";
import Footer from "../component/Footer";

import '../css/my-account.css'


export default function MyAccount() {

    const addressService = new AddressService()
    const userservice = new UserService()
    const orderService = new OrderService()

    var username = jwt_decode(userservice.getToken()).sub;
    var userID = parseInt(localStorage.getItem("userId"))


    const initUser = {
        admin: false,
        birthday: "",
        full_name: "",
        id: 0,
        passWord: "",
        userName: ""
    }

    const initAddress = {
        name: "",
        user_id: userID,
        phoneNumber: "",
        province: "",
        district: "",
        wards: "",
        detail: ""
    }



    const [user, setUser] = useState(initUser);
    const [listAddress, setListAddress] = useState([])
    const [address, setAddress] = useState(initAddress)
    const [listOrder, setListOrder] = useState([])
    const [showNewAddress, setShowNewAddress] = useState(false);







    useEffect(() => {
        userservice.getUserByUserName(username).then((data) => {
            setUser(data)
        })
        orderService.getOrderByUserId(userID).then((data) => {
            setListOrder(data)
        })
        addressService.getAddressByUserId(userID).then((data) => {
            setListAddress(data)
        })
    }, [])

    function getAddressApi() {
        addressService.getAddressByUserId(userID).then((data) => {
            setListAddress(data)
        })
    }


    function createAddress() {
        addressService.addAddress(address).then((data) => {
            getAddressApi()
        })
        setShowNewAddress(false)
    }

    function deleteAddress(id) {
        addressService.deleteAddress(parseInt(id)).then((data) => {
            getAddressApi()
        })

    }



    const showListAddress = listAddress.map((item, index) =>
        <div key={index} className="address-item">
            <div className="address-detail-header">
                <p><span>{item.name}</span> | {item.phoneNumber}</p>
                <div>
                    <button className="address-btn">Sửa</button>
                    <button className="address-btn" onClick={() => deleteAddress(item.id)}>Xóa</button>
                </div>
            </div>
            <p>{item.detail}</p>
            <p>Xã {item.wards}, Huyện {item.district}, {item.province}</p>
        </div>

    )

    const showListOrder = listOrder.map((item, index) =>

        <div key={index}>
            <p>Mã đơn hàng: {item.id}</p>
        </div>
    )

    return (
        <div>
            <Header />
            <div className="container account">
                <div className="row">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <div className="col-md-2 content-box-1">
                            <div className="nav-account-button">
                                <Nav variant="pills" >
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Thông tin tài khoản</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Đơn hàng</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="three">Địa chỉ</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </div>

                        <div className="col-md-9 content-box-2">
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <div className="container">
                                        <div>
                                            <h2>Thông tin tài khoản</h2>
                                            <p>Quản lý thông tin tài khoản để bảo mật</p>
                                        </div>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="row">
                                                        <h4>Thông tin chi tiết</h4>
                                                        <div className="col-md-2">
                                                            <p>Tên đăng nhập</p>
                                                        </div>
                                                        <div className="col-md-10">
                                                            <p>{user.userName}</p>
                                                        </div>

                                                        <div className="col-md-2">
                                                            <p>Tên</p>
                                                        </div>
                                                        <div className="col-md-10">
                                                            <p>{user.full_name}</p>
                                                        </div>

                                                        <div className="col-md-2">
                                                            <p>Ngày sinh</p>
                                                        </div>
                                                        <div className="col-md-10">
                                                            <p>{user.birthday}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <div>
                                        <div>
                                            <h2>Danh sách đơn hàng</h2>
                                            {showListOrder}
                                        </div>

                                    </div>
                                </Tab.Pane>

                                <Tab.Pane eventKey="three">
                                    <div className="container">
                                        <div className="m-address-header">
                                            <div className="address-header-1" >
                                                <h2>Địa chỉ của tôi</h2>
                                                <p>Quản lý thông địa chỉ nhận hàng</p>
                                            </div>
                                            <div className="address-header-2" >
                                                <button className="account-btn" onClick={() => setShowNewAddress(true)}>Thêm địa chỉ</button>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="m-address-detail">
                                                {showListAddress}
                                            </div>
                                        </div>
                                        <Modal
                                            size="md"
                                            show={showNewAddress}
                                            onHide={() => setShowNewAddress(false)}
                                            aria-labelledby="model-new-address"
                                        >
                                            <Modal.Header closeButton>
                                                <Modal.Title id="model-new-address">
                                                    Thêm địa chỉ
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <Form>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <Form.Group controlId='name' className='mb-3'>
                                                                <Form.Label>Tên người nhận</Form.Label>
                                                                <Form.Control type="text" size="sm" name="name" onChange={(e) => setAddress({ ...address, name: e.target.value })}  />
                                                            </Form.Group>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <Form.Group controlId='name' className='mb-3'>
                                                                <Form.Label>Số điện thoại</Form.Label>
                                                                <Form.Control type="text" size="sm" name="sdt" onChange={(e) => setAddress({ ...address, phoneNumber: e.target.value })} />
                                                            </Form.Group>
                                                        </div>

                                                        <div className="col-md-12">
                                                            <Form.Group controlId='name' className='mb-3'>
                                                                <Form.Label>Tỉnh/Thành phố</Form.Label>
                                                                <Form.Control type="text" size="sm"  onChange={(e) => setAddress({ ...address, province: e.target.value })} />
                                                            </Form.Group>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <Form.Group controlId='name' className='mb-3'>
                                                                <Form.Label>Quận/Huyện</Form.Label>
                                                                <Form.Control type="text" size="sm" onChange={(e) => setAddress({ ...address, district: e.target.value })}  />
                                                            </Form.Group>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <Form.Group controlId='name' className='mb-3'>
                                                                <Form.Label>Phường/Xã</Form.Label>
                                                                <Form.Control type="text" size="sm"  onChange={(e) => setAddress({ ...address, wards: e.target.value })}  />
                                                            </Form.Group>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <Form.Group controlId='name' className='mb-3'>
                                                                <Form.Label>Địa chỉ chi tiết</Form.Label>
                                                                <Form.Control type="textarea" size="sm"  onChange={(e) => setAddress({ ...address, detail: e.target.value })} />
                                                            </Form.Group>
                                                        </div>
                                                        <div className="btn-new-address col-md-12">
                                                            <button onClick={() => createAddress()}>Thêm</button>
                                                        </div>
                                                    </div>
                                                </Form>

                                            </Modal.Body>
                                        </Modal>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                    </Tab.Container>
                </div>
            </div>

            <Footer />
        </div >
    )
}