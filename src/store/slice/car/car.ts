import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ProductOrder {
  id: number;
  amount: number;
  name: string;
  price: number;
}

export interface InitialState {
  productsSelected: ProductOrder[];
}

const initialState: InitialState = {
  productsSelected: [],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    addProductCar: (
      state,
      action: PayloadAction<{ name: string; id: number; price: number }>
    ) => {
      let indexFound = 0;
      const orderFound = state.productsSelected.find((order, index) => {
        if (order.id === action.payload.id) {
          indexFound = index;
        }

        return order.id === action.payload.id;
      });

      if (orderFound) {
        state.productsSelected[indexFound] = {
          ...orderFound,
          amount: orderFound.amount + 1,
        };
        return;
      }

      state.productsSelected.push({
        id: action.payload.id,
        amount: 1,
        name: action.payload.name,
        price: action.payload.price,
      });
    },
    delProductCar: (state, action: PayloadAction<number>) => {
      const indexProduct = state.productsSelected.findIndex(
        (item) => item.id === action.payload
      );

      state.productsSelected.splice(indexProduct, 1);
      console.log(indexProduct);
    },
    lessProductCar: (state, action: PayloadAction<number>) => {
      const index = state.productsSelected.findIndex(
        (item) => item.id === action.payload
      );

      if (index === -1) {
        return;
      }

      const valueAmount = state.productsSelected[index].amount - 1;

      if (valueAmount === 0) {
        state.productsSelected.splice(index, 1);
      } else {
        state.productsSelected[index].amount = valueAmount;
      }
    },
  },
});

export const { addProductCar, delProductCar, lessProductCar } =
  carSlice.actions;

export const carReducer = carSlice.reducer;
