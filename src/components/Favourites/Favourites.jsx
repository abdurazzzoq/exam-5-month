import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import FavouriteContext from '../context/FavouriteContext'



const Favourites = () => {

const {favouriteList, setFavouriteList} = useContext(FavouriteContext)

  const addToFav = (data) => {
    let has = false;
    favouriteList.forEach((product) => {
      if (product.id === data.id) {
        has = true;
      }
    });
    if (!has) {
      setFavouriteList([...favouriteList, data]);
    

    } else {
      const result =  favouriteList.filter((product) => {
        if (product.id !== data.id) {
          return product
        }
      });
      setFavouriteList(result)
    }
    console.log(favouriteList);
  };


  return (
    <div className='flex gap-4'>
       


      {favouriteList.length ===0 && 
      <div>no products are here</div>
      } 
         {favouriteList.map((data, i) => (
        <div
          style={{ maxwidth: 236, width: 236 }}
          key={i}
          className=" border rounded-lg shadow cursor-pointer"
        >
          <Link to={"/products/" + data.id}>
            <img
              className="rounded-t-lg w-full"
              src={data.images[0]}
              alt={data.name}
            />
          </Link>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              {data.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {data.description}
            </p>
          </div>
          <button
              onClick={() => addToFav(data)}
              className="bg-violet-400 text-white font-medium py-1 px-3 rounded-xl"
            >
              add to favourites
            </button>
        </div>
      ))}</div>
  )
}

export default Favourites