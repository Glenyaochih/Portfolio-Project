import ProductListCard from '../../components/card/ProductListCard';
import ProductFilterOffcanvas from '../../components/offcanvas/ProductFilterOffcanvas';
import { BsSortUp, BsSortDown } from 'react-icons/bs';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProductsAsync,
  setSortOption,
} from '../../redux/slice/front/products/frontProductsSlice';
import {
  selectFilteredProducts,
  selectProductsLoading,
} from '../../redux/slice/front/products/frontProductsSelectors';
import ScreenLoading from '../../components/loadings/ScreenLoading';
import { getCartAsync } from '../../redux/slice/front/cart/cartSlice';
export default function ProductListPage() {
  const dispatch = useDispatch();
  const products = useSelector(selectFilteredProducts);
  const productsLoading = useSelector(selectProductsLoading);
  const sortOption = [
    { value: '', label: '請選擇排序' },
    { value: 'low-to-height', label: '價格由低到高' },
    { value: 'height-to-low', label: '價格由高到低' },
  ];

  const handleProductSortChange = (e) => {
    const sortOption = e.target.value;
    dispatch(setSortOption({ sortOption }));
  };

  useEffect(() => {
    dispatch(getProductsAsync());
    dispatch(getCartAsync());
  }, [dispatch]);

  return (
    <>
      <div className='bg-neutral-40 product-list'>
        <div className='container '>
          <section>
            <div className='pb-9 pt-md-7 d-md-flex justify-content-between align-items-center'>
              <div className='py-4'>
                <nav aria-label='breadcrumb '>
                  <ol className='breadcrumb mb-0'>
                    <li className='breadcrumb-item'>
                      <a className='fs-8 fs-lg-7' href='#'>
                        首頁
                      </a>
                    </li>
                    <li
                      className='breadcrumb-item active fs-8 fs-lg-7'
                      aria-current='page'
                    >
                      所有產品
                    </li>
                  </ol>
                </nav>
              </div>
              <div className='d-flex'>
                <ProductFilterOffcanvas />
                <div>
                  <select
                    lang='zh-TW'
                    className='form-select form-select-sm  px-4 py-2 d-none d-md-block'
                    aria-label='Small select example'
                    onChange={handleProductSortChange}
                  >
                    {sortOption.map((option) => (
                      <option
                        disabled={option.value === ''}
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <div className='d-flex d-md-none gap-3 ms-auto'>
                    <button
                      onClick={handleProductSortChange}
                      value={'low-to-height'}
                      lang='zh-TW'
                      className='btn rounded-3 btn-outline-primary-40 text-primary-100 fw-normal fs-7'
                    >
                      價格
                      <span>
                        <BsSortUp />
                      </span>
                    </button>
                    <button
                      onClick={handleProductSortChange}
                      lang='zh-TW'
                      value={'height-to-low'}
                      className='btn rounded-3 btn-outline-primary-40 text-primary-100 fw-normal fs-7'
                    >
                      價格
                      <span>
                        <BsSortDown />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className='gy-7 pb-md-14'>
              <div className='list-container row row-cols-2 row-cols-md-4 '>
                {products.map((product, index) => {
                  return (
                    <div className='col' key={index}>
                      <div key={index}>
                        <ProductListCard
                          item={product}
                          cardBackground={'neutral-40'}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
        <ScreenLoading loadingSource={productsLoading} size={25} />
      </div>
    </>
  );
}
