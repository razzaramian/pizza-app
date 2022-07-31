import Header from 'components/header';

import { useRoutes } from 'react-router-dom';

import { elements } from 'routes';

import 'app/index.scss';

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
