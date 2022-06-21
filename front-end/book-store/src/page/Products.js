import React, { useState, useEffect, useCallback } from "react"
import "../css/product.css";

import BookCard from "../component/BookCard";
import CheckBox from "../component/CheckBox";

import listBook from "../asset/listbook";
import ReactPaginate from "react-paginate";

export default function Products() {

    const initFilter = {
        category: [],
        author: []
    }

    const author = [
        {
            display: "Bao kaka",
            author: "bao-kaka"
        },
        {
            display: "Normal",
            author: "nomal"
        },
        {
            display: "Special",
            author: "Special"
        }
    ]

    const category = [
        {
            display: "Kinh dị",
            type: "kinh-di"
        },
        {
            display: "Tiểu thuyết",
            type: "tieu-thuyet"
        },
        {
            display: "Văn học",
            type: "van-hoc"
        }
    ]

    const productList = listBook.getAllBook();

    const [products, setProducts] = useState(productList)

    const [filter, setFilter] = useState(initFilter)

    const [pageNumber, setPageNumber] = useState([]);

    const [searchValue, setSearchValue] = useState("");

    const productPerpage = 8;

    const pageVisited = pageNumber * productPerpage;

    const pageCount = Math.ceil(products.length / productPerpage);


    const filterSelect = (type, checked, item) => {
        if (checked) {
            switch (type) {
                case "TYPE":
                    setFilter({ ...filter, category: [...filter.category, item.type] })
                    break
                case "AUTHOR":
                    setFilter({ ...filter, author: [...filter.author, item.author] })
                    break
                default:
            }
        } else {
            switch (type) {
                case "TYPE":
                    const newCategory = filter.category.filter(e => e !== item.type)
                    setFilter({ ...filter, category: newCategory })
                    break
                case "AUTHOR":
                    const newAuthor = filter.author.filter(e => e !== item.author)
                    setFilter({ ...filter, author: newAuthor })
                    break
                default:
            }
        }
    }

    const updateProducts = useCallback(
        () => {
            let temp = productList

            if(searchValue.length>0){
                temp = temp.filter(e => {

                    if(e.name.indexOf(searchValue)!==-1){
                        return true;
                    }else{
                        return false;
                    }
                }    
                )
            }

            if (filter.category.length > 0) {
                temp = temp.filter(e => {
                    const check = e.type.find(data => filter.category.includes(data))
                    return check !== undefined
                })
            }

            if (filter.author.length > 0) {
                temp = temp.filter(e => {
                    const check = e.author.find(author => filter.author.includes(author))
                    return check !== undefined
                })
            }

            setProducts(temp)

        },
        [searchValue ,filter, productList],
    )

    useEffect(() => {
        updateProducts()
    }, [updateProducts])


    const showProduct = products.slice(pageVisited, pageVisited + productPerpage)
        .map((item, key) =>
            <div key={key} className="col-md-3">
                <BookCard book={item}></BookCard>
            </div>
        )

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    }

    const clearFilter = ()=>setFilter(initFilter)


    return (
        <div className="listing-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="category-listing">
                            <div className="single-listing">
                                <div className="select-Categories pb-30">
                                    <div className="small-tittle mb-20">
                                        <h4>Filter by Genres</h4>
                                    </div>
                                    {category.map((item, index) =>
                                        <div key={index}>
                                            <CheckBox
                                                label={item.display}
                                                onChange={(input) => filterSelect("TYPE", input.checked, item)}
                                                checked={filter.category.includes(item.type)}
                                            />
                                        </div>
                                    )}

                                    <div className="small-tittle mb-20">
                                        <h4>Filter by Author</h4>
                                    </div>
                                    {author.map((item, index) =>
                                        <div key={index}>
                                            <CheckBox
                                                label={item.display}
                                                onChange={(input) => filterSelect("AUTHOR", input.checked, item)}
                                                checked={filter.author.includes(item.author)}
                                            />
                                        </div>
                                    )}

                                    <div className="small-tittle">
                                        <button className="btn" onClick={clearFilter}>Delete filter</button>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-9">
                        <div className="row">
                            <div className="product-view-top">
                                <div className="col-md-12">
                                    <div className="product-search">
                                        <input type="text" placeholder="Search" onChange={e=>setSearchValue(e.target.value)} />
                                        <button><i className="pi pi-search"></i></button>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="row">
                            {showProduct}
                        </div>
                        <div>
                            <ReactPaginate
                                previousLabel={"< Previous"}
                                nextLabel={"Next >"}
                                pageCount={pageCount}
                                onPageChange={changePage}
                                containerClassName={"paginationBttns"}
                                previousLinkClassName={"previousBttn"}
                                nextLinkClassName={"nextBttn"}
                                activeClassName={"paginationActive"}
                            ></ReactPaginate>
                        </div>
                    </div>

                </div>
            </div>
        </div>




    )
}