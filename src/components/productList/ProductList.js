import React, { useState, useEffect } from "react";
import axios from "axios";
// import "../../Styles/components/productList.scss"
import Filter from "./Filter";
import { Link } from "react-router-dom";
import FilterMenu from "./FilterMenu";

export default function ProductList() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [category, setCatogery] = useState([]);
    const [latest, setLatest] = useState(false);
    const [oldest, setOldest] = useState(false);
    const [highToLow, setHighToLow] = useState(false);
    const [lowToHigh, setLowToHigh] = useState(false);
    const [search, setsearch] = useState("");
    const [pagination, setPagination] = useState(1);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(12);



    useEffect(() => {
        fetchHandler();

    }, []);
    useEffect(() => {
        checkDistinct();

    }, [data]);

    const fetchHandler = (event) => {
        setIsLoading(true);
        axios
            .get("https://fakestoreapi.com/products")
            .then((resp) => {
                setData(resp.data);
                console.log(resp.data);
                setIsLoading(false);

            });


    }
    let content = <p>Found no Data.</p>;
    let categoryNames = <p>Found no Data.</p>;
    let paginationCount = <p>Found no Data.</p>;
    if (isLoading) {
        content =

            categoryNames = <>
                <input type="checkbox" id="Loading" name="Loading" value="Loading" />
                <label htmlFor="Loading"> Loading...</label><br></br></>
        paginationCount = <>Loading</>


    }
    if (data.length > 0) {
        if (latest) {
            data.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
        }
        else if (oldest) {
            data.sort((a, b) => parseFloat(b.id) - parseFloat(a.id));
        }
        else if (highToLow) {
            data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        } else if (lowToHigh) {
            data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        }

        content = data
            .filter((data) =>
                data.category.toLowerCase().includes(search.toLowerCase()))
            .filter((data) => (data.id >= startIndex) && (data.id <= endIndex))
            .map((item) => (

                <div className="aem-GridColumn  aem-GridColumn--default--4 aem-GridColumn--phone--6 d-flex" key={item.id}>
                    <div className='card'>

                        <Link to={`/ProductDetails/${item.id}`}>
                            <div className='card-body'>
                                <img src={item.image} alt="product-img" className='img-wrapper' />
                                <p className='title'>{item.id}</p>
                                <p className='title'>{item.title.slice(0, 17 - 3) + '...'}</p>
                                <p className='price'>${item.price}</p>
                                <img className="icon" src="./../../../assets/icons/heart.svg" alt="wishlist icon" />
                            </div>
                        </Link>

                    </div>
                </div>
            ));
        categoryNames =
            category.map((category) => (
                <>

                    <input type="checkbox" class="radioCheck" onClick={() => filterSelection(category)} id={category} value={category} />
                    <label htmlFor={category}> {category}</label><br></br>
                </>
            ))
        paginationCount =
            <>
                <a ><button onClick={event => nextPage(event, "1")}>1</button></a>
                <a ><button onClick={event => nextPage(event, "2")}>2</button></a>
            </>

    }

    const checkDistinct = () => {
        var distinctCategory = [];
        for (var i = 0; i < data.length; i++) {
            distinctCategory.push(data[i].category);
        }

        distinctCategory = distinctCategory.map(x => x
            .replace("women's ", '')
            .replace("men's ", '')
        );

        setCatogery(distinctCategory.filter((x, i, a) => a.indexOf(x) == i));
        console.log(category);

    };
    const filterSelection = (category) => {

        setsearch(category);

    };
    const onSelect = () => {

        let text;
        let dataSort = [];
        let getValue = document.getElementById("sort").value;
        switch (getValue) {
            case "sortByLatest":

                setLatest(true);
                setOldest(false);
                setLowToHigh(false);
                setHighToLow(false);

                break;
            case "sortByOldest":

                setLatest(false);
                setOldest(true);
                setHighToLow(false);
                setLowToHigh(false);


                break;
            case "highToLow": {
                setLatest(false);
                setOldest(false);
                setHighToLow(true);
                setLowToHigh(false);


            }
                break;
            case "lowToHigh": {

                setLatest(false);
                setOldest(false);
                setHighToLow(false);
                setLowToHigh(true);

            }
                break;
            case "Reset": {
                alert("Reset");
                setHighToLow(false);
                setLowToHigh(false);
                fetchHandler();
            }
                break;
            default:
                setHighToLow(false);
                setLowToHigh(false);
                fetchHandler();

        }

    };

    const nextPage = (event, currentPage) => {
        console.log(currentPage);
        setPagination(currentPage);
        switch (currentPage) {
            case "1": {

                setStartIndex(0);
                setEndIndex(12);
                break;
            }
            case "2": {

                setStartIndex(startIndex + 12);
                setEndIndex(endIndex + 12);
                break;
            }

            default:
                alert("Page End");
        }
    }




    return (
        <section className='productList'>
            <div className='container'>
                <div className='row'>
                    <div className="aem-Grid aem-Grid--12 ">
                        <div className="aem-GridColumn  aem-GridColumn--default--3 aem-GridColumn--phone--hide ">
                            <ul className="breadcrumb">
                                <li><a>Clothing</a></li>
                                <li><a>Women’s</a></li>
                                <li>Outerwear</li>
                            </ul>
                        </div>
                        <div className="aem-GridColumn  aem-GridColumn--default--9 aem-GridColumn--phone--hide">
                            <div className="aem-Grid aem-Grid--12 ">
                                <div className="aem-GridColumn  aem-GridColumn--default--6 ">
                                    <span className="results"> {data.length} Results</span>
                                </div>
                                <div className="aem-GridColumn  aem-GridColumn--default--6 ">
                                    <div className="sort">
                                        <select id="sort" name="sort" className="btn" onChange={() => onSelect()} >
                                            <option value="sortByLatest">Sort By Latest </option>
                                            <option value="sortByOldest">Sort By Oldest</option>
                                            <option value="highToLow">Price: High to Low</option>
                                            <option value="lowToHigh">Price: Low to High</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className="aem-Grid aem-Grid--12 ">
                        <Filter categoryNames={categoryNames} category={category} filterSelection={filterSelection} />
                        <div className="aem-GridColumn  aem-GridColumn--default--9 aem-GridColumn--phone--12">
                            <div className="aem-GridColumn  custom--desktop--hide aem-GridColumn--phone--12">
                                <div className="aem-Grid aem-Grid--12 d-flex Filter-sort-align-mob tp-bt-10">
                                    <div className="aem-GridColumn  custom--desktop--hide aem-GridColumn--phone--12">
                                        <ul className="breadcrumb">
                                            <li><a>Clothing</a></li>
                                            <li><a>Women’s</a></li>
                                            <li>Outerwear</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="aem-Grid aem-Grid--12 d-flex Filter-sort-align-mob tp-bt-10" style={{ margin: "20px 0px" }}>

                                    <div className="aem-GridColumn  custom--desktop--hide aem-GridColumn--phone--6">
                                        <div className="filter">
                                            <FilterMenu categoryNames={categoryNames} />
                                        </div>
                                    </div>
                                    <div className="aem-GridColumn  custom--desktop--hide aem-GridColumn--phone--6">
                                        <div className="filter">
                                            <img className="sort-icon" src="./../../../assets/icons/sort.png" alt="profile icon" />
                                            <a className="Filter-sort">Sort Products</a>
                                        </div>
                                    </div>

                                </div>
                                <div className="aem-Grid aem-Grid--12 d-flex Filter-sort-align-mob tp-bt-10">
                                    <div className="aem-GridColumn  custom--desktop--hide aem-GridColumn--phone--12">
                                        <div className="filter">
                                            <a className="results">{data.length} Results</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="aem-Grid aem-Grid--12 d-flex">
                                {content}

                            </div>
                            <div className="aem-Grid aem-Grid--12 d-flex justify-content-center">

                                <div class="pagination">
                                    <a >&laquo;</a>
                                    {paginationCount}
                                    <a >&raquo;</a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
