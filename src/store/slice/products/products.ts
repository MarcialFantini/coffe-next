import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  AsyncThunkAction,
} from "@reduxjs/toolkit";
import { getData } from "@/utils/getData";
import { fetchProducts } from "./ThunksUser";

export interface Product {
  name: string;
  price: number;
  stock: number;
  description: string;
  url_img: string;
  id: number;
}

interface InitialState {
  products: Product[];
  isLoading: boolean;
  error: unknown | null;
  currentPage: number;
}

const initialState: InitialState = {
  products: [],
  isLoading: false,
  error: null,
  currentPage: 0,
};

export type FetchProductsAction = AsyncThunkAction<Product[], number, {}>;

const productsSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  // Añadimos una propiedad extraReducers para manejar los casos
  // de éxito y fracaso de la petición
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload !== undefined) {
          state.products = action.payload;
        }
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCurrentPage } = productsSlice.actions;

export default productsSlice.reducer;
