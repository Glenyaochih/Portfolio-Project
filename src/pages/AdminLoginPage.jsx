import { useDispatch } from 'react-redux';
import { adminLogin, checkAuthStatus, setAccount } from '../redux/slice/adminLoginSlice';
import { useEffect } from 'react';
import axios from 'axios';


export default function AdminLoginPage() {
  const dispatch = useDispatch();

  const inputAccount = (e) => {
    const { value, name } = e.target;
    dispatch(setAccount({ value, name }));
  };

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(adminLogin());
  };
  useEffect(() => {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)nomadsToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    );
    axios.defaults.headers.common['Authorization'] = token;
    dispatch(checkAuthStatus())
  }, []);

  return (
    <>
      <div className='loading-page-background vh-100'>
        <div
          className='h-100 w-100'
          style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
        >
          <div className='container  h-100'>
            <div className='d-flex flex-column justify-content-center align-items-center  h-100'>
              <h1 className='mb-3 py-6'>
                Welcome
                <br />
                Nomad Partner
              </h1>
              <form onSubmit={loginHandler} className='input-width'>
                <div className='row g-3 border-bottom mb-7'>
                  <div className='col-sm-2'>
                    <label htmlFor='inputEmail' className='col-form-label'>
                      E-mail
                    </label>
                  </div>
                  <div className='col-sm-10'>
                    <input
                      name='username'
                      type='email'
                      id='inputEmail'
                      className='form-control border-0'
                      aria-describedby='passwordHelpInline'
                      onChange={inputAccount}
                    />
                  </div>
                </div>
                <div className='row g-3 border-bottom mb-7'>
                  <div className='col-sm-2'>
                    <label htmlFor='inputPassword' className='col-form-label'>
                      password
                    </label>
                  </div>
                  <div className='col-sm-10'>
                    <input
                      name='password'
                      type='password'
                      id='inputPassword'
                      className='form-control border-0'
                      aria-describedby='passwordHelpInline'
                      onChange={inputAccount}
                    />
                  </div>
                </div>
                <div className='d-grid  '>
                  <button
                    type='submit'
                    className='btn btn-outline-light rounded-pill'
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
