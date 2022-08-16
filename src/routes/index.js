import { useRoutes } from 'react-router-dom';

import Dashboard from '../pages/dashboard';
import Products from '../pages/products';

const App = () => {
  let routes = useRoutes([
    {
      path: '/',
      element: <Dashboard/>
    },
    {
      path: '/products',
      element: <Products/>
    },
  ]);
  return routes;
}
export default App;