import { memo } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getUser } from '../../services/user';
import { logoutAction } from '../../store/api-action';
import { getAuthorizationStatus } from '../../store/user-slice/selector';

function UserDetails(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = getUser();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.NoAuth
      ?
      <div className="user-block">
        <Link className="user-block__link" to={AppRoute.Login}>Sign in</Link>
      </div>
      :
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src={user.avatarUrl} alt={user.name} width={63} height={63} />
          </div>
        </li>

        <li className="user-block__item">
          <Link
            className="user-block__link"
            to="/"
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(logoutAction());
            }}
          >
            Sign out
          </Link>
        </li>
      </ul>
  );
}

export default memo(UserDetails);
