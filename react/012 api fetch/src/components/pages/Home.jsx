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
    const [totalPages, setPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [categories, setCategories] = useState([]);
    const [activeCat, setActiveCat] = useState('all');


    const getData = async () => {
        let url = `https://dummyjson.com/products?limit=12&skip=${(currentPage - 1) * 12}`;

        if(activeCat !== 'all'){
            url =  `https://dummyjson.com/products/category/${activeCat}?limit=12&skip=${(currentPage - 1) * 12}`;
        }

        const response = await axios.get(url);



        if (response.status !== 200) return alert('something went wrong');

        setData(response.data.products);
        setPages(Math.ceil((response.data.total) / 12));
    }

    useEffect(() => {
        getData()
    }, [currentPage, activeCat]);



    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const getCategories = async()=>{
        const response = await axios.get('https://dummyjson.com/products/categories');
        setCategories(response.data);

        console.log(response.data);
    }
    useEffect(()=>{
        getCategories();
    },[]);

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
                </div>
                <div className='products'>
                    {
                        data.map((product, index) => (
                            <ProductCard key={index} modalOpen={onOpenModal} data={product} />
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
                    <h2>Simple centered modal</h2>
                </Modal>
            </div>
        </>
    )
}

export default Home