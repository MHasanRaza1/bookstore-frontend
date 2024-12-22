import React from 'react'

const Card = ({data}) => {
    const {name , category, price, image, title} = data;
    return (
        <>
            <div>
                <div className="card bg-base-100 w-96 shadow-xl my-4 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                    <figure>
                        <img
                            src={image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {name}
                            <div className="badge badge-secondary">{category}</div>
                        </h2>
                        <p>{title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">${price}</div>
                            <div className="px-2 py-1 rounded-full border-black border-[1px] cursor-pointer  hover:bg-pink-500 hover:text-white dark:border-white">Buy now</div>
                        </div>
                    </div>
                </div>
            </div></>
    )
}

export default Card