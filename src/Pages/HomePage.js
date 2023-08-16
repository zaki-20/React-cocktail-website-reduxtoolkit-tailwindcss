import React, { useEffect, useState } from 'react'
import Layout from '../Components/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCocktails } from '../Redux/features/cocktailSlice'
import Spinner from '../shared/Spinner'
import { Link } from 'react-router-dom'


const HomePage = () => {
  const [modifiedCocktails, setmodifiedCocktails] = useState([]);
  const { loading, cocktails, error, cocktail } = useSelector(state => ({ ...state.app }))
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchCocktails())
  }, [])

  useEffect(() => {
    if (cocktails) {
      const newCocktails = cocktails.map((item) => {
        const { idDrink, strAlcoholic, strDrinkThumb, strGlass, strDrink } =
          item;
        return {
          id: idDrink,
          name: strDrink,
          img: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
      setmodifiedCocktails(newCocktails);
    } else {
      setmodifiedCocktails([]);
    }
  }, [cocktails]);


  if (loading) {
    return <Layout>
      <Spinner />
    </Layout>
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  if (!cocktails) {
    return (
      <Layout>
        <h2>No Cocktail Found With THis Name</h2>
      </Layout>
    );
  }
  return (
    <>
      <Layout class="">
        <div className="px-12 py-20 flex flex-wrap items-center justify-center bg-gray-500">
          {modifiedCocktails.map((item) => (

            <Link to={`/products/${item.id}`}>
              <div className=" grayscale hover:grayscale-0 group duration-300 flex-shrink-0 m-6 relative overflow-hidden bg-black rounded-lg max-w-xs shadow-lg">
              <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ transform: 'scale(1.5)', opacity: '0.1' }}>
                <rect x="159.52" y={175} width={152} height={152} rx={8} transform="rotate(-45 159.52 175)" fill="white" />
                <rect y="107.48" width={152} height={152} rx={8} transform="rotate(-45 0 107.48)" fill="white" />
              </svg>
              <div className="relative pt-10 px-10 flex items-center justify-center">
                <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: '0.2' }} />
                <div class="relative w-32 h-32">
                  <img className= " grayscale hover:grayscale-0 hover:scale-105 duration-500 rounded  relative w-40 shadow-[0px_2px_57px_2px_rgba(165,_39,_255,_0.48)]" src={item.img} alt />
                  </div>
              </div>
              <div className="relative text-white px-6 pb-6 mt-6">
                <span className="text-orange-700 block opacity-75 -mb-1">{item.info}</span>
                <div className="flex justify-between">
                  <span className="text-orange-500 block font-semibold text-xl">{item.name}</span>
                  <span className="group-hover:animate-bounce  duration-700  bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">$36.00</span>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>

      </Layout>
    </>
  )

}
export default HomePage