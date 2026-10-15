import Home from './pages/home/home';
import Login from './pages/login/login';
import Favorites from './pages/favorites/favorites';
import Offer from './pages/offer/offer';
import NotFound from './pages/not-found/not-found';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from './const';
import PrivateRoute from './router/private-route';
import { Offers } from './types/offer';

type AppScreenProps = {
  offers: Offers;
}

function App({offers}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Home} element={<Home offers={offers} />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth} // пока не авторизован по дефолту
            >
              <Favorites offers={offers} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<Offer />} />
        <Route path={AppRoute.NotFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    //<MainPage offersCount={offersCount} />
  );
}

export default App;
