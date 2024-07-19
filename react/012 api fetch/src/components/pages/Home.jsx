import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../common-components/Header';
import ProductCard from '../common-components/ProductCard';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

const Home = () => {
    const [data, setData] = useState([]);
    const [allData, setAllData] = useState([]);
    const [totalPages, setPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [categories, setCategories] = useState([]);
    const [activeCat, setActiveCat] = useState('all');
    // const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100000);
    const [userPriceLimit, setUserPriceLimit] = useState(1000);
    const [modalData, setModelData] = useState({});

    // console.log(minPrice);


    const getData = async () => {
        let url = `https://dummyjson.com/products?limit=12&skip=${(currentPage - 1) * 12}`;

        if(activeCat !== 'all'){
            url =  `https://dummyjson.com/products/category/${activeCat}?limit=12&skip=${(currentPage - 1) * 12}`;
        }

        const response = await axios.get(url);



        if (response.status !== 200) return alert('something went wrong');

        setData(response.data.products);
        setAllData(response.data.products)
        setPages(Math.ceil((response.data.total) / 12));

        console.log(response.data.products);
        response.data.products.forEach((item)=>{
            // let min = Infinity;
            let max = -Infinity;

            // if(item.price < min){
            //     min = item.price;
            // };

            // setMinPrice(min);

            // console.log(min);

            if(item.price > max){
                max = item.price;
            };

            setMaxPrice(max);
        })
    }

    useEffect(() => {
        getData()
    }, [currentPage, activeCat]);

    const priceFilter = ()=>{
        const pricedata = allData.filter((item)=> item.price <= userPriceLimit);
        setData(pricedata);

        console.log(pricedata);
    }

    useEffect(()=>{
        priceFilter();
    },[userPriceLimit])


    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const getCategories = async()=>{
        const response = await axios.get('https://dummyjson.com/products/categories');
        setCategories(response.data);
    }
    useEffect(()=>{
        getCategories();
    },[]);

    const handelModel = (indexdata)=>{
        console.log(data[indexdata]);
        setModelData(data[indexdata]);
        onOpenModal();
    };

    return (
        <>
            <Header />
            <div className='page-btns'>
                <ResponsivePagination
                    current={currentPage}
                    total={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
            <div className='product-container'>
                <div className='product-filter'>
                    <div className='categories'>
                        <h4>Categories</h4>
                        <ul>
                        <li 
                        className={`${(activeCat === 'all') ? 'active-cat-li' : ''}`}
                        onClick={()=>{setActiveCat('all')}}
                        >All</li>
                        {
                            categories.map((cat)=>(
                                <li 
                                className={`${(activeCat === cat.slug) ? 'active-cat-li' : ''}`}
                                onClick={()=>{setActiveCat(cat.slug)}}
                                >{cat.name}</li>
                            ))
                        }
                        </ul>
                    </div>
                    <div className='price-filter'>
                       <input type='range' min={0} max={maxPrice} onChange={(e)=>{setUserPriceLimit(Number(e.target.value))}} />
                       <div>
                        <span>Max price</span>
                        <span>{userPriceLimit}</span>
                       </div>
                    </div>
                </div>
                <div className='products'>
                    {
                        data.map((product, index) => (
                            <ProductCard key={index} modalOpen={()=>{handelModel(index)}} data={product} />
                        ))
                    }
                </div>
            </div>
            <div className='page-btns'>
                <ResponsivePagination
                    current={currentPage}
                    total={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
            <div>
                {/* <button onClick={onOpenModal}>Open modal</button> */}
                <Modal open={open} onClose={onCloseModal} center>
                    <h2>{modalData.title}</h2>
                </Modal>
            </div>
        </>
    )
}

export default Home