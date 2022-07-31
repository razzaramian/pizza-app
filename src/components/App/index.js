import { useRoutes } from 'react-router-dom';

import Header from 'components/Header';
import { elements } from 'routes';

import 'components/App/index.scss';

const App = () => {
  const routes = useRoutes(elements);

  return (
    <div className='app'>
      <Header />
      {routes}
    </div>
  );
}

export default App;
