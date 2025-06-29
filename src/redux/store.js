import { configureStore } from '@reduxjs/toolkit';
import adminLoginReducer from './slice/admin/adminLoginSlice';
import adminGetProductsReducer from './slice/admin/products/adminGetProductsSlice';
import adminPostProductReducer from './slice/admin/products/adminPostProductSlice';
import adminUploadImageReducer from './slice/admin/products/adminUploadImageSlice';
import adminDelProductReducer from './slice/admin/products/adminDelProductSlice';
import adminPutProductReducer from './slice/admin/products/adminPutProductSlice';
import adminPostCouponReducer from './slice/admin/coupons/adminPostCouponSlice';
import adminPutCouponReducer from './slice/admin/coupons/adminPutCouponSlice';
import adminGetCouponsReducer from './slice/admin/coupons/adminGetCouponsSlice';
import adminDelCouponsReducer from './slice/admin/coupons/adminDelCouponsSlice';
import adminGetOrdersReducer from './slice/admin/orders/adminGetOrdersSlice';
import adminPutOrderReducer from './slice/admin/orders/adminPutOrderSlice';
import adminDelOrdersReducer from './slice/admin/orders/adminDelOrdersSlice';
import adminLogoutReducer from './slice/admin/adminLogoutSlice';
import frontGetProductsReducer from './slice/front/products/frontProductsSlice';
import frontCartReducer from './slice/front/cart/cartSlice';
import modalReducer from './slice/modalSlice';
import loadingReducer from './slice/admin/adminLoadingSlice';

export const store = configureStore({
  reducer: {
    // === 後台管理 ===
    adminLogin: adminLoginReducer,
    adminLogout: adminLogoutReducer,
    adminGetProducts: adminGetProductsReducer,
    adminPostProduct: adminPostProductReducer,
    adminDelProducts: adminDelProductReducer,
    adminUploadImage: adminUploadImageReducer,
    adminPutProduct: adminPutProductReducer,
    adminPostCoupon: adminPostCouponReducer,
    adminPutCoupon: adminPutCouponReducer,
    adminGetCoupons: adminGetCouponsReducer,
    adminDelCoupons: adminDelCouponsReducer,
    adminGetOrders: adminGetOrdersReducer,
    adminPutOrder: adminPutOrderReducer,
    adminDelOrders: adminDelOrdersReducer,
    // === 前台管理 ===
    frontGetProducts: frontGetProductsReducer,
    cart: frontCartReducer,

    // === 元件控制 ===
    modal: modalReducer,
    loading: loadingReducer,
  },
});
