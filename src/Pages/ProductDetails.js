import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchSingleCocktails } from "../Redux/features/cocktailSlice";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Components/Layout";
import Spinner from "../shared/Spinner";

const ProductDetails = () => {
  const [modifendCocktail, setmodifendCocktail] = useState([]);

  const { loading, cocktail } = useSelector((state) => ({ ...state.app }));
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleCocktails({ id }));
  }, [dispatch, id]);

  useEffect(() => {
    if (cocktail.length > 0) {
      const {
        strDrink: name,
        strDrinkThumb: img,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = cocktail[0];
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      const newCocktail = {
        name,
        img,
        info,
        category,
        glass,
        ingredients,
      };
      setmodifendCocktail(newCocktail);
    } else {
      setmodifendCocktail(null);
    }
  }, [id, cocktail]);


  if (!modifendCocktail) {
    return <h2>No Cocktail Details</h2>;
  } else {
    const { name, img, info, category, glass, ingredients } = modifendCocktail;
    return (
      <>
        {loading ? (
          <Spinner />
        ) : (
          <Layout>
            <div className="container mx-auto mt-8">
              <Link to="/" className="inline-block px-4 py-2 mb-4 text-white bg-blue-500 hover:bg-blue-600 rounded">
                GO BACK
              </Link>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="flex justify-center items-center">
                  <img src={img} alt={name} className="w-[300px] h-auto py-5" />
                </div>
                <div className="flex flex-col justify-center">
                  <h2 className="text-2xl font-semibold mb-2">{name}</h2>
                  <p className="text-gray-600 mb-2">Category: {category}</p>
                  <p className="mb-4">{info}</p>
                  <div className="mb-2">
                    <span className="font-semibold">Glass:</span> {glass}
                  </div>
                  <div className="mb-4">
                    <span className="font-semibold">Ingredients:</span>   {ingredients && ingredients.length > 0 ? ingredients.join(", ") : "N/A"}

                  </div>
                  <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

          </Layout>
        )}
      </>
    )
  }
}
export default ProductDetails