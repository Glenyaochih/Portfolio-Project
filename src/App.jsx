import { Outlet } from 'react-router-dom';
import TestNavbar from './components/TestNavbar';
import OceanFooter from './components/OceanFooter';

function App() {
  return (
    <>
      <div id='app'>
        <TestNavbar />
        <div>
          <Outlet />
        </div>
        <OceanFooter />
      </div>
    </>
  );
}

export default App;
