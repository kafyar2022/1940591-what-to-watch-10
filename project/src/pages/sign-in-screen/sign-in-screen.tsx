import { Navigate } from 'react-router-dom';
import LoginForm from '../../components/login-form/login-form';
import MainLogo from '../../components/main-logo/main-logo';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';

function SignInScreen(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <MainLogo />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <LoginForm />
      </div>
      <footer className="page-footer">
        <MainLogo footer />
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default SignInScreen;
