import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchCocktails } from "../Redux/features/cocktailSlice";
const SearchBox = () => {

    const searchTerm = useRef();
    const dispatch = useDispatch();

    const handleChange = () => {
        const searchText = searchTerm.current.value;
        dispatch(fetchSearchCocktails({ searchText }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (


        <form className='' onSubmit={handleSubmit}>
            <div class="w-[400px] mx-auto">
                <div class="flex space-x-4 my-4" >
                    <div class="flex rounded-md overflow-hidden w-full">
                        <input onChange={handleChange} ref={searchTerm} type="text" class="w-full rounded-md rounded-r-none" />
                        <button class="bg-indigo-600 text-white px-6 text-lg font-semibold py-2 rounded-r-md">Go</button>
                    </div>
                    <button class="bg-white px-6 text-lg font-semibold py-2 rounded-md">Clear</button>
                </div>
            </div>
        </form>

    )
}

export default SearchBox