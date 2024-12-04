import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Category from './Category/Category';
import SearchedFood from './SearchedFood/SearchedFood';

const Categories = () => {
  const categories = useLoaderData();
  

  const [inputValue, setInputValue] = useState("");
  const [searchFood, setSearchedFood] = useState(null);
  const  [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>{
    setInputValue(e.target.value);
  }
  const handleSearch  = async()=>{
    if(!inputValue.trim()){
      setError("Please Enter a search term.");
      return;
    }
    setError(null);
    setLoading(true);
    try{
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputValue}`)
      if(!res.ok) throw new Error('Failed to fetch data');
      const result = await res.json();
      setSearchedFood(result);
    } catch(err){
      setError(err.message);
      setSearchedFood(null);
    } finally{
      setLoading(false);
    }
  }   
  return (
    <>
      {/* Search Field */}
      <div className='flex justify-center items-center gap-4 mt-5'>
        <input className='bg-slate-300 rounded-md w-2/5 px-2 py-1 focus:outline-0' type="text" placeholder='Search your food with first letter of the name' value={inputValue} onChange={handleChange}/>
        <button onClick={handleSearch} className='bg-blue-500 px-6 text-white py-1 rounded-md'>Search</button>
      </div>
      {/* Loading and Error */}
      <div className='text-center my-10'>
        {loading && <p>Loading ...</p>}
        {error && <p>{error}</p>}
      </div>

      {searchFood && (
        <div className="mt-4 lg:px-20 md:px-12 sm:px-8 max-sm:px-4">
          {searchFood.meals.length > 0 ? (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1 gap-4">
              {searchFood.meals.map((item) => (
                <SearchedFood key={item.idMeal} item={item}>
                  
                </SearchedFood>                
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No results found for "{inputValue}".</p>
          )}
          </div>
      )}



    <div>
      <h1 className='text-center text-2xl font-bold mt-4'>Categories</h1>
      <div className='grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-3 max-sm:grid-cols-2 gap-4 lg:px-20 md:px-12 sm:px-8 max-sm:px-4 my-8'>
        {
          categories.categories.map(category => <Category key={category.idCategory} category={category} ></Category>)
        }
      </div>
    </div>
    </>
  )
}

export default Categories