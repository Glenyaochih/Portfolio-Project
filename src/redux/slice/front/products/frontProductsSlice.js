import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { frontGetProductsAPI } from './frontProductsAPI';

const initialState = {
  products: [],
  isProductsLoading: false,
  productsError: null,
  product: {},
  isProductLoading: false,
  productError: null,
  recommendType: '',
  filters: {
    filterOffcanvasOpen: false,
    tempFilters: {
      grades: [],
      finSystem: '',
      priceRange: { min: 0, max: Infinity },
      size: '',
    },
    activeFilters: {
      grades: [],
      finSystem: '',
      priceRange: { min: 0, max: Infinity },
      size: '',
    },
    sortOption: 'best-selling',
  },
  search: '',
};

export const getProductsSlice = createSlice({
  name: 'frontGetProducts',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { filterType, value } = action.payload;
      state.filters.tempFilters[filterType] = value;
    },
    setApplyFilter: (state) => {
      //當點擊套用篩選按鈕時將tempFilter塞入activeFilters
      state.filters.activeFilters = state.filters.tempFilters;
    },
    setResetFilters: (state) => {
      //清除篩選器
      state.filters.tempFilters = initialState.filters.tempFilters;
      state.filters.activeFilters = initialState.filters.activeFilters;
    },
    //Offcanvas 開關
    setFilterOffcanvasToggle: (state, action) => {
      state.filters.filterOffcanvasOpen = action.payload;
    },
    //搜尋選項
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    //排序選項
    setSortOption: (state, action) => {
      const { sortOption } = action.payload;
      state.filters.sortOption = sortOption;
    },
    //推薦
    setRecommend: (state, action) => {
      const { recommendType } = action.payload;
      state.recommendType = recommendType;
    },
  },

  extraReducers: (builder) => {
    builder
      // 取得所有產品
      .addCase(getProductsAsync.pending, (state) => {
        state.isProductsLoading = true;
        state.productsError = null;
      })
      .addCase(getProductsAsync.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isProductsLoading = false;
      })
      .addCase(getProductsAsync.rejected, (state, action) => {
        state.isProductsLoading = false;
        state.productsError = action.error.message;
      })
      //取得單一產品
      .addCase(getSingleProductAsync.pending, (state) => {
        state.isProductLoading = true;
        state.product = {};
        state.productError = null;
      })
      .addCase(getSingleProductAsync.fulfilled, (state, action) => {
        state.product = action.payload;
        state.isProductLoading = false;
      })
      .addCase(getSingleProductAsync.rejected, (state, action) => {
        state.isProductLoading = false;
        state.productError = action.error.message;
      });
  },
});
//取得產品
export const getProductsAsync = createAsyncThunk(
  'products/frontGetProducts',
  async (_, { rejectWithValue }) => {
    try {
      const res = await frontGetProductsAPI.getProducts();
      return res.data.products;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);
//取得單一產品
export const getSingleProductAsync = createAsyncThunk(
  'product/frontGetSingleProducts',
  async (id, { rejectWithValue }) => {
    try {
      const res = await frontGetProductsAPI.getSingleProducts(id);
      return res.data.product;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export const {
  setSearch,
  setFilter,
  setRecommend,
  setSortOption,
  setApplyFilter,
  setResetFilters,
  setFilterOffcanvasToggle,
} = getProductsSlice.actions;
export default getProductsSlice.reducer;
