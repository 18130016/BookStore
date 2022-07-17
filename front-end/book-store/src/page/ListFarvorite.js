import { useEffect, useState } from "react"
import FarvoriteService from "../service/FarvoriteService"


export default function ListFarvorite() {

    const favService = new FarvoriteService();
    const [change,setChange]=useState(0);

    const [list, setList] = useState([]);
    const uID = parseInt(localStorage.getItem("userId"));

    useEffect(() => {
        favService.getList(uID).then((data) => {
            setList(data)
        })
    },[change])

    function removeItem(id) {
        setChange(id+1);
        favService.deleteFarvoriteBook(id).then((data) => {
            console.log(data)  
        })
    }

    const showProduct = list.map((item, index) =>
        <div key={index}>
            <h3>{item.book.name}</h3>
            <img style={{ height: "120px", width: "80px" }} src={item.book.image} alt="" />
            <button onClick={() => removeItem(item.id)}>xóa</button>
        </div>
    )
  
    return (
        <div className="container">
            {showProduct}
        </div>
    )
}