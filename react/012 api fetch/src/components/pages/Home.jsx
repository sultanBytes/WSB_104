import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../common-components/Header';
import ProductCard from '../common-components/ProductCard';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css';
import Cookies from 'js-cookie';

const Home = () => {
    const [data, setData] = useState([]);
    const [allData, setAllData] = useState([]);
    const [totalPages, setPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [categories, setCategories] = useState([]);
    const [activeCat, setActiveCat] = useState('all');
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100000);
    const [userPriceLimit, setUserPriceLimit] = useState(1000);
    const [modalData, setModelData] = useState({});
    const [cartCount, setCartCount] = useState(null);
    const [cartData, setCartData] = useState([]);




    const getData = async () => {
        let url = `https://dummyjson.com/products?limit=12&skip=${(currentPage - 1) * 12}`;

        if (activeCat !== 'all') {
            url = `https://dummyjson.com/products/category/${activeCat}?limit=12&skip=${(currentPage - 1) * 12}`;
        }

        const response = await axios.get(url);



        if (response.status !== 200) return alert('something went wrong');

        setData(response.data.products);
        setAllData(response.data.products)
        setPages(Math.ceil((response.data.total) / 12));

        let min = Infinity;
        let max = -Infinity;
        response.data.products.forEach((item) => {

            if (item.price < min) {
                min = item.price;
            };

            if (item.price > max) {
                max = item.price;
            };
        })

        setMinPrice(min);
        setMaxPrice(max);
        setUserPriceLimit(max);
    }

    useEffect(() => {
        getData()
    }, [currentPage, activeCat]);

    const priceFilter = () => {
        const pricedata = allData.filter((item) => item.price <= userPriceLimit);
        setData(pricedata);
    }

    useEffect(() => {
        priceFilter();
    }, [userPriceLimit])


    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const getCategories = async () => {
        const response = await axios.get('https://dummyjson.com/products/categories');
        setCategories(response.data);
    }
    useEffect(() => {
        getCategories();
    }, []);

    const handelModel = (indexdata) => {
        setModelData(data[indexdata]);
        onOpenModal();
    };

    const handleAddtoCart = (productData) => {
        let olddata = Cookies.get('product-cart');
        if (olddata) {
            olddata = JSON.parse(olddata);
        } else {
            olddata = [];
        }

       
        const indexNo = olddata.findIndex((item) => item.id === productData.id);

        if (indexNo === -1) {
            const data = {
                id: productData.id,
                quentity: 1
            }
            olddata.push(data);
            Cookies.set('product-cart', JSON.stringify(olddata));
            
        } else {
            olddata[indexNo].quentity = olddata[indexNo].quentity + 1;

            Cookies.set('product-cart', JSON.stringify(olddata));
        }

        getCartData();

    }

    const getCartData = ()=>{
        let olddata = Cookies.get('product-cart');
        if (olddata) {
            olddata = JSON.parse(olddata);
        } else {
            olddata = [];
        }

        let total = 0;

        olddata.forEach((item)=>{
            total += item.quentity
        })
        setCartData(olddata);
        setCartCount(total);
    }

    useEffect(()=>{
        getCartData();
    },[]);
    return (
        <>
            <Header cart={cartCount} cartData={cartData} />
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
                                onClick={() => { setActiveCat('all') }}
                            >All</li>
                            {
                                categories.map((cat) => (
                                    <li
                                        className={`${(activeCat === cat.slug) ? 'active-cat-li' : ''}`}
                                        onClick={() => { setActiveCat(cat.slug) }}
                                    >{cat.name}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='price-filter'>
                        <input type='range' min={minPrice} value={userPriceLimit} max={maxPrice} onChange={(e) => { setUserPriceLimit(Number(e.target.value)) }} />
                        <div>
                            <span>Max price</span>
                            <span>{userPriceLimit}</span>
                        </div>
                    </div>
                </div>
                <div className='products'>
                    {
                        data.map((product, index) => (
                            <ProductCard cartFunction={() => { handleAddtoCart(product) }} key={index} modalOpen={() => { handelModel(index) }} data={product} />
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
                    <div className='modal-container'>
                        <div>
                            <Zoom>
                                <img
                                    alt="That Wanaka Tree, New Zealand by Laura Smetsers"
                                    src={modalData.thumbnail}
                                    width="500"
                                />
                            </Zoom>
                        </div>
                        <div>

                        </div>
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default Home