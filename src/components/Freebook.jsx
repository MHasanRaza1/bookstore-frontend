import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from '../constant/list.json'
import Card from './Card';

const Freebook = () => {
    const filterData = list.filter((data) => data.category === "Free")
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div>
                    <h1 className='font-bold text-xl pb-2'>Free Offered Courses</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque accusantium, animi repellendus non unde nostrum dignissimos, quis amet eveniet delectus laborum qui dolorem necessitatibus commodi officia natus? Quae, recusandae iusto?</p>
                </div>

                <div>
                    <Slider {...settings}>
                        {
                            filterData.map((item)=>{
                                return<Card data={item} key={item.id} />
                            })
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Freebook