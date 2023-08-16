import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCocktails = createAsyncThunk("cocktails/fetchCocktails",
    async () => {
        try {
            const res = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");
          
            return res.data


        } catch (error) {
            console.log(error)
        }
    }
);

const cocktailSlice = createSlice({
    name: "cocktails",
    initialState: {
        loading: false,
        cocktails: [],
        error: null,
        cocktail: [],
    },

    extraReducers: {
        [fetchCocktails.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchCocktails.fulfilled]: (state, action) => {
            state.loading = false;
            state.cocktails = action.payload.drinks;
        },
        [fetchCocktails.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
})

export default cocktailSlice.reducer;