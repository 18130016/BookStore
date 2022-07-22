import React, { useEffect, useState } from 'react';
import BookService from '../../service/BookService';

const Blog = () => {

    const [books, setBooks] = useState([]);
    const bookService = new BookService();

    const date = new Date();

    function getApi() {
        return bookService.getAll();
    }
    useEffect(() => {
        getApi().then((data) => setBooks(data));
    }, []);

    console.log(books);

    return (
        <div className='w-[80%] m-auto'>
            <button
                className=" bg-[#fe1616] px-14 py-2 mt-5 drop-shadow-lg text-white font-semibold rounded-lg"
            >
                TẠO BLOG MỚI
            </button>
            {books.map(book => (
                <div className='w-full flex bg-white drop-shadow-xl mb-5 mt-5 p-2 rounded-md'>
                    <div className='w-[30%]  flex items-center justify-center'>
                        <img className='pl-2' src={book.image} alt='book' />
                    </div>
                    <div className='flex flex-col ml-10'>
                        <span className='pt-4 font-semibold text-2xl'>{book.name}</span>
                        <span className='font-semibold text-[#666666] pt-2'>{book.descripton}</span>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default Blog