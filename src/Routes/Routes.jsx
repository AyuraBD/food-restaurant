import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Components/Home/Home";
import LandingPage from "../Components/LandingPage/LandingPage";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import About from "../Components/About/About";
import Categories from "../Components/Categories/Categories";
import SearchFoodDetails from "../Components/Categories/SearchedFood/SearchFoodDetails/SearchFoodDetails";
import CategoryFood from "../Components/Categories/Category/CategoryFood/CategoryFood";
import CategoryFoodDetails from "../Components/Categories/Category/CategoryFood/CategoryFoodDetails/CategoryFoodDetails";

const Routes = () => {
  const router = new createBrowserRouter([
    {
      path:'/',
      element: <Home></Home>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path:'/about',
          element: <About></About>
        },
        {
          path:'/categories',
          element: <Categories></Categories>,
          loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        },
        {
          path:'/categories/:searchId',
          element: <SearchFoodDetails></SearchFoodDetails>,
          loader: ({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.searchId}`)
        },
        {
          path:'/catogories/:categoryFoodId',
          element:  <CategoryFood></CategoryFood>,
          loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.categoryFoodId}`)
        },
        {
          path:'/categories/:categoryFoodId',
          element:<CategoryFoodDetails></CategoryFoodDetails>,
          loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.categoryFoodId}`)

        }
      ]
    }
  ]);
  return (
    <Suspense>
      <RouterProvider router={router}>

      </RouterProvider>
    </Suspense>
  )
};

export default Routes;
