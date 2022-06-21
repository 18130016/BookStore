import axiosClient from "../api/axiosClient"

class BookService {
    getAll = ()=>{
        const url = 'http://localhost:8080/api//book'
        return axiosClient.get(url);
    }
    
}


export default BookService;