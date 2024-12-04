import React from 'react'
import { useLoaderData } from 'react-router-dom'

const CategoryFoodDetails = () => {
    const details = useLoaderData();
    const {idMeal, strMeal, strCategory, strInstructions, strMealThumb } = details
  return (
    <div>
        <div className='flex lg:flex-row md:flex-col sm:flex-col max-sm:flex-col lg:gap-10 items-start justify-center lg:px-20 md:px-12 sm:px-8 max-sm:px-4 text-center w-full py-10'>
            <img className='lg:w-1/2' src={strMealThumb} alt="" />
            <div className='lg:w-1/2 px-5 sm:mt-5 max-sm:mt-5'>
                <h4>Id: {idMeal}</h4>
                <h3 className="font-bold">Name: {strMeal}</h3>
                <p>Category: {strCategory}</p>
                <p className='font-bold mb-3'>Brief description of the dish</p>
                <p className='text-left'>{strInstructions}</p>
            </div>
        </div>
    </div>
  )
}

export default CategoryFoodDetails