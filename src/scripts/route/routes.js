import Home from '../views/page/home';
import Detail from '../views/page/detail';
import Favorite from '../views/page/favorite';

const routes = {
  '/': Home,
  '/restaurant/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
