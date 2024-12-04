import React from 'react'
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    const {strMeal, strCategory, strCategoryThumb} = category;
  return (
    <Link to={`/catogories/${strCategory}`} className='w-full bg-slate-400 p-4 rounded-lg'>
        <img className='w-full rounded-md' src={strCategoryThumb} alt={strCategory} />
        <h4 className='text-center lg:text-xl font-bold my-2'>{strCategory}</h4>
    </Link>
  )
}

export default Category