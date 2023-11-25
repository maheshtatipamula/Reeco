import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";

const initialState = {
  product: [
    {
      id: 1,
      title: "Chicken Breast Fillets, Boneless",
      brand: "Hormel Black label",
      price: "$60.67 / 6 Lb",
      quantity: "15 x 6 Lb",
      total: "$9000.88",
      image: "Ava.jpg",
      status: "approved",
    },
    {
      id: 2,
      title: "Chicken Breast Fillets, Boneless",
      brand: "Hormel Black label",
      price: "$60.67 / 6 Lb",
      quantity: "15 x 6 Lb",
      total: "$9000.88",
      image: "Apple.png",
      status: "urgent",
    },
    {
      id: 3,
      title: "Chicken Breast Fillets, Boneless",
      brand: "Hormel Black label",
      price: "$60.67 / 6 Lb",
      quantity: "15 x 6 Lb",
      total: "$9000.88",
      image: "Ava.jpg",
      status: "missing",
    },
    {
      id: 4,
      title: "Chicken Breast Fillets, Boneless",
      brand: "Hormel Black label",
      price: "$60.67 / 6 Lb",
      quantity: "15 x 6 Lb",
      image: "Ava.jpg",
      total: "$9000.88",
      status: "idle",
    },
    {
      id: 5,
      title: "Chicken Breast Fillets, Boneless",
      brand: "Hormel Black label",
      price: "$60.67 / 6 Lb",
      quantity: "15 x 6 Lb",
      image: "Apple.png",
      total: "$9000.88",
      status: "idle",
    },
    {
      id: 6,
      title: "Chicken Breast Fillets, Boneless",
      brand: "Hormel Black label",
      price: "$60.67 / 6 Lb",
      quantity: "15 x 6 Lb",
      image: "Ava.jpg",
      total: "$9000.88",
      status: "idle",
    },
    {
      id: 7,
      title: "Chicken Breast Fillets, Boneless",
      brand: "Hormel Black label",
      price: "$60.67 / 6 Lb",
      quantity: "15 x 6 Lb",
      image: "Ava.jpg",
      total: "$9000.88",
      status: "idle",
    },
    {
      id: 8,
      title: "Chicken Breast Fillets, Boneless",
      brand: "Hormel Black label",
      price: "$60.67 / 6 Lb",
      quantity: "15 x 6 Lb",
      image: "Ava.jpg",
      total: "$9000.88",
      status: "idle",
    },
    {
      id: 9,
      title: "Chicken Breast Fillets, Boneless",
      brand: "Hormel Black label",
      price: "$60.67 / 6 Lb",
      quantity: "15 x 6 Lb",
      image: "Ava.jpg",
      total: "$9000.88",
      status: "idle",
    },
    {
      id: 10,
      title: "Chicken Breast Fillets, Boneless",
      brand: "Hormel Black label",
      price: "$60.67 / 6 Lb",
      quantity: "15 x 6 Lb",
      image: "Ava.jpg",
      total: "$9000.88",
      status: "idle",
    },
    {
      id: 11,
      title: "Chicken Breast Fillets, Boneless",
      brand: "Hormel Black label",
      price: "$60.67 / 6 Lb",
      quantity: "15 x 6 Lb",
      image: "Ava.jpg",
      total: "$9000.88",
      status: "idle",
    },
    {
      id: 12,
      title: "Chicken Breast Fillets, Boneless",
      brand: "Hormel Black label",
      price: "$60.67 / 6 Lb",
      quantity: "15 x 6 Lb",
      image: "Ava.jpg",
      total: "$9000.88",
      status: "idle",
    },
  ],
  status: "idle",
};

export const ProductSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    updateStatus: (state, action) => {
      const { selectedProduct, newStatus } = action.payload;
      const productToUpdate = state.product.find(
        (product) => product.id === selectedProduct
      );

      if (productToUpdate) {
        productToUpdate.status = newStatus;
      }
    },
  },
});

export const { updateStatus } = ProductSlice.actions;

export const selectProducts = (state) => state.products.product;

export default ProductSlice.reducer;
