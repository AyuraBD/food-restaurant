import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const CategoryFood = () => {
    const categoryLoader = useLoaderData();
    const categoryFood = categoryLoader.meals;

  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1 gap-4 lg:px-20 md:px-12 sm:px-8 max-sm:px-4 py-10'>
        {
            categoryFood.map(food => 
            <div className='p-2 bg-gray-100 rounded-md' key={food.idMeal}>
                <img className='rounded-t-md' src={food.strMealThumb} alt="" />
                <div className="text-center mt-2 p-2">
                    <p className='text-[16px]'>Id: {food.idMeal}</p>
                    <h2 className='text-xl font-semibold'>Name: {food.strMeal}</h2>
                    <p className='mb-3'>Category: {food.strCategory}</p>
                    <Link to={`/categories/${food.idMeal}`} className='text-white bg-blue-500 px-4 py-1 rounded-md'>See details</Link>
                </div>
            </div>
            )
        }
    </div>
  )
}

export default CategoryFood