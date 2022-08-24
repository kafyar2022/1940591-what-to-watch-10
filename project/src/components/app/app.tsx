import { Route, Routes } from 'react-router-dom';
import browserHistory from '../../browser-history';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import AddReviewScreen from '../../screens/add-review/add-review-screen';
import MainScreen from '../../screens/main/main-screen';
import MyListScreen from '../../screens/my-list/my-list-screen';
import NotFoundScreen from '../../screens/not-found/not-found';
import PlayerScreen from '../../screens/player/player-screen';
import HistoryRouter from '../history-route/history-route';
import PrivateRoute from '../private-route/private-route';
import LoginScreen from '../../screens/login/login-screen';
import LoadingScreen from '../../screens/loading-screen/loading-screen';
import FilmScreen from '../../screens/film/film-screen';
import { getAuthorizationStatus } from '../../store/user-slice/selector';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Unknown
      ?
      <LoadingScreen />
      :
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainScreen />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginScreen />}
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute>
                <MyListScreen />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Film}
            element={<FilmScreen />}
          />
          <Route
            path={AppRoute.AddReview}
            element={
              <PrivateRoute>
                <AddReviewScreen />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Player}
            element={<PlayerScreen />}
          />
          <Route
            path={AppRoute.NotFound}
            element={<NotFoundScreen />}
          />
        </Routes>
      </HistoryRouter>
  );
}

export default App;
