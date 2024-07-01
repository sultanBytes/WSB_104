import React from 'react'
import SliderCard from './sub-components/SliderCard';
import img1 from './../assests/images/benefits_subimage_icon_11681880477.svg';
import img2 from './../assests/images/benefits_subimage_icon_31681880478.svg';
import img3 from './../assests/images/benefits_title_image.jpg';


const data = [
    {
        title:'card heading 1',
        img:img1
    },
    {
        title:'card heading 2',
        img:img2
    },
    {
        title:'card heading 3',
        img:img3
    },
    {
        title:'card heading 4',
        img:img1
    },
    {
        title:'card heading 5',
        img:img1
    }

];

const ExpoloreCat = () => {
    return (
        <div className='explore-cats'>
            <div className='container'>
                <h1>Explore Category</h1>
                <div className='cats-inner'>
                    {
                        data.map((item, index)=>(
                            <SliderCard key={index} title={item.title} img={item.img} />
                        ))
                    }
                   
                </div>
            </div>

        </div>
    )
}

export default ExpoloreCat