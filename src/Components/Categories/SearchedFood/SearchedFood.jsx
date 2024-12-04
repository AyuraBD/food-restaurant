import { Link } from 'react-router-dom';

const SearchedFood = ({item}) => {
  
  const {idMeal, strMealThumb, strMeal, strCategory} = item;
  return (
    <div className="w-full border p-3 rounded-md bg-gray-100">
      <img className='w-full rounded-t-md' src={strMealThumb} alt="" />
      <div className='pt-3 mt-2 text-center'>
        <h1>{idMeal}</h1>
        <h3 className="font-bold">Name: {strMeal}</h3>
        <p className='mb-2'>Category: {strCategory}</p>
        <Link to={`/categories/${idMeal}`} className='mt-2 bg-blue-500 px-4 py-1 rounded-md text-white'>See details</Link>
      </div>
    </div>
  )
}

export default SearchedFood