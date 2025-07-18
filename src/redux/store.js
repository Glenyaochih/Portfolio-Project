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
import couponReducer from './slice/front/coupons/couponsSlice';
import orderReducer from './slice/front/order/orderSlice';
import paymentReducer from './slice/front/payment/paymentSlice';
import messageReducer from './slice/message/messageSlice';
import usersReducer from './slice/front/user/userSlice';
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
    coupon: couponReducer,
    order: orderReducer,
    payment: paymentReducer,
    user: usersReducer,

    // === 元件控制 ===
    modal: modalReducer,
    loading: loadingReducer,
    messages: messageReducer,
  },
});
